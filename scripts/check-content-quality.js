#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');

const projectRoot = process.cwd();
const publicRoot = path.join(projectRoot, 'client', 'public');
const scanRoots = [
  path.join(projectRoot, 'client', 'src', 'components'),
  path.join(projectRoot, 'client', 'src', 'content'),
  path.join(projectRoot, 'client', 'src', 'pages'),
];
const scanExtensions = new Set(['.ts', '.tsx']);

const MOJIBAKE_PATTERN = /[\uFFFD\u00C0-\u00FF]/g;
const PLACEHOLDER_LINK_PATTERN = /\b(?:href|to)\s*=\s*["']#["']/g;
const IMAGE_PATH_PATTERN = /\/images\/[A-Za-z0-9._/-]+/g;
const DISALLOWED_CONTENT_PATTERNS = [
  {
    label: 'sensitive metric claim',
    pattern:
      /\bIRR\b|Sharpe|最大回撤|胜率|毫秒级撮合|累计交易量|预测准确率|算法效率|项目总数|已交付项目|客户满意度|复用率|GWh|亿欧元|年化收益率|收益率提升|收益提升|风险事件减少|交易效率提升|运维成本降低|年节省运营成本|已处理超过|部署于\s*\d+/gi,
  },
  {
    label: 'rejected milestone',
    pattern: /盐城市创新创业大赛|优秀奖/gi,
  },
];

function walkFiles(rootDir) {
  const result = [];
  if (!fs.existsSync(rootDir)) {
    return result;
  }

  const stack = [rootDir];
  while (stack.length > 0) {
    const currentDir = stack.pop();
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      const absPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        stack.push(absPath);
        continue;
      }
      if (entry.isFile() && scanExtensions.has(path.extname(entry.name))) {
        result.push(absPath);
      }
    }
  }
  return result;
}

function toRel(absPath) {
  return path.relative(projectRoot, absPath).replace(/\\/g, '/');
}

function getLine(content, index) {
  return content.slice(0, index).split(/\r?\n/).length;
}

function uniqueBy(items, keyFn) {
  const seen = new Set();
  const out = [];
  for (const item of items) {
    const key = keyFn(item);
    if (!seen.has(key)) {
      seen.add(key);
      out.push(item);
    }
  }
  return out;
}

function checkMojibake(files) {
  const issues = [];
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    for (const match of content.matchAll(MOJIBAKE_PATTERN)) {
      const hit = match[0];
      if (hit === '©' || hit === '®') {
        continue;
      }
      issues.push({
        file: toRel(file),
        line: getLine(content, match.index),
        token: hit,
      });
    }
  }
  return uniqueBy(issues, (x) => `${x.file}:${x.line}:${x.token}`);
}

function checkPlaceholderLinks(files) {
  const issues = [];
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    for (const match of content.matchAll(PLACEHOLDER_LINK_PATTERN)) {
      issues.push({
        file: toRel(file),
        line: getLine(content, match.index),
        code: match[0],
      });
    }
  }
  return issues;
}

function checkMissingImageAssets(files) {
  const issues = [];
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    for (const match of content.matchAll(IMAGE_PATH_PATTERN)) {
      const imageRef = match[0];
      const relativePublicPath = imageRef.replace(/^\/images\//, 'images/');
      const absPublicPath = path.join(publicRoot, relativePublicPath);
      if (!fs.existsSync(absPublicPath)) {
        issues.push({
          file: toRel(file),
          line: getLine(content, match.index),
          imageRef,
        });
      }
    }
  }
  return uniqueBy(issues, (x) => `${x.file}:${x.imageRef}`);
}

function checkDisallowedContent(files) {
  const issues = [];
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    for (const rule of DISALLOWED_CONTENT_PATTERNS) {
      for (const match of content.matchAll(rule.pattern)) {
        issues.push({
          file: toRel(file),
          line: getLine(content, match.index),
          token: match[0],
          label: rule.label,
        });
      }
    }
  }
  return uniqueBy(issues, (x) => `${x.file}:${x.line}:${x.token}:${x.label}`);
}

function printSection(title, items, formatter) {
  if (items.length === 0) {
    return;
  }
  console.error(`\n[${title}] ${items.length} issue(s)`);
  for (const item of items) {
    console.error(`- ${formatter(item)}`);
  }
}

function main() {
  const files = scanRoots.flatMap(walkFiles);
  if (files.length === 0) {
    console.error('No files found to scan.');
    process.exit(1);
  }

  const mojibakeIssues = checkMojibake(files);
  const placeholderIssues = checkPlaceholderLinks(files);
  const missingImageIssues = checkMissingImageAssets(files);
  const disallowedContentIssues = checkDisallowedContent(files);

  const totalIssues =
    mojibakeIssues.length +
    placeholderIssues.length +
    missingImageIssues.length +
    disallowedContentIssues.length;

  if (totalIssues > 0) {
    console.error('Content quality check failed.');
    printSection('Mojibake', mojibakeIssues, (x) => `${x.file}:${x.line} token "${x.token}"`);
    printSection('Placeholder links', placeholderIssues, (x) => `${x.file}:${x.line} ${x.code}`);
    printSection('Missing image assets', missingImageIssues, (x) => `${x.file}:${x.line} ${x.imageRef}`);
    printSection(
      'Disallowed content',
      disallowedContentIssues,
      (x) => `${x.file}:${x.line} [${x.label}] "${x.token}"`
    );
    process.exit(1);
  }

  console.log('Content quality check passed.');
}

main();
