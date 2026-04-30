# official-website

任能科技 / EnergyQuant Research 官方网站。

这是一个以静态前端发布为主的企业官网项目，当前生产构建输出 `dist/client`，适合部署到 Cloudflare Pages。仓库仍保留 NestJS 全栈模板能力，但官网主路径优先使用静态 React/Rspack 构建。

## 项目概览

- 品牌主体：任能科技 / EnergyQuant
- 网站内容：公司介绍、解决方案、发展历程、知识中心、关于我们、联系方式
- 核心方向：电力交易 Agent、储能资产 Agent、虚拟电厂与灵活性资源 Agent
- 默认语言：中文与英文双语内容
- 生产形态：静态单页应用，Cloudflare Pages 部署

## 技术栈

- Node.js 22
- React 19
- React Router 6
- Rspack
- TypeScript
- Tailwind CSS 4
- NestJS 10（保留的服务端能力）
- Cloudflare Pages / Wrangler

## 目录结构

```text
.
├── client/
│   ├── public/                 # Logo、项目图片、OG 图片等静态资源
│   └── src/
│       ├── app.tsx             # 页面路由
│       ├── content/            # 官网中英文内容数据
│       ├── components/         # 布局、SEO、动效与 UI 组件
│       └── pages/              # 首页、解决方案、新闻、知识库等页面
├── docs/                       # 内容质量、发布流程和历史计划文档
├── .github/workflows/          # Cloudflare Pages 自动部署工作流
├── DEPLOY_ENERGYQUANT.md       # 生产部署补充说明
└── package.json                # 构建、预览、测试和部署脚本
```

## 环境要求

```bash
node --version
npm --version
```

建议版本：

- Node.js：`22.x`
- npm：`10.x` 或更高

仓库包含 `.node-version`，在支持该文件的 Node 版本管理工具中会自动选用 Node 22。

## 安装依赖

```bash
npm install
```

CI 环境建议使用：

```bash
npm ci
```

## 本地预览

### Windows 静态预览

这是维护官网内容和检查页面样式时最常用的路径，不依赖后端和数据库。

```bash
npm run preview:client:win
```

打开：

```text
http://127.0.0.1:4173
```

### 前端开发服务

```bash
npm run dev:client:win
```

默认开发端口由 `CLIENT_DEV_PORT` 控制，当前 `.env` 中为 `8090`。

### 完整本地开发

只有在需要联调 NestJS 服务端能力时才使用完整开发模式。

```bash
npm run dev:win
```

本地服务端相关环境变量：

```env
SERVER_PORT=3000
SERVER_HOST=0.0.0.0
SUDA_DATABASE_URL=<your postgres connection string>
FORCE_AUTHN_INNERAPI_DOMAIN=http://localhost:3000
```

## 构建

### 生产静态构建

```bash
npm run build
```

等价于：

```bash
npm run build:client
```

输出目录：

```text
dist/client
```

### 全栈打包

如需面向非 Cloudflare Pages 环境构建 NestJS + client 包：

```bash
npm run build:fullstack
```

## 测试与质量检查

```bash
npm run test:content
npm run type:check:client
npm run test:website
npm run lint
```

说明：

- `test:content` 检查官网内容质量。
- `type:check:client` 检查前端 TypeScript 类型。
- `test:website` 组合执行内容检查和前端类型检查。
- `lint` 会并行运行 ESLint、TypeScript 类型检查和 Stylelint。

## 内容维护

官网主要内容集中在：

```text
client/src/content/site-content.ts
```

维护建议：

- 中英文内容保持同步更新。
- 页面导航、SEO 标题、描述和关键词也在同一文件中维护。
- 联系方式、解决方案方向、知识库主题和发展历程变更后，运行 `npm run test:website`。
- 图片资源放在 `client/public/images/`，Logo 与 favicon 放在 `client/public/`。

页面入口：

- 首页：`client/src/pages/HomePage/HomePage.tsx`
- 解决方案：`client/src/pages/ProjectsPage/ProjectsPage.tsx`
- 发展历程：`client/src/pages/NewsPage/NewsPage.tsx`
- 知识中心：`client/src/pages/KnowledgeBasePage/KnowledgeBasePage.tsx`
- 关于我们：`client/src/pages/AboutPage/AboutPage.tsx`
- 联系我们：`client/src/pages/ContactPage/ContactPage.tsx`

## 部署

### Cloudflare Pages

推荐配置：

- Build command：`npm run build`
- Build output directory：`dist/client`
- Production branch：`main`

GitHub Actions 工作流：

```text
.github/workflows/deploy-pages.yml
```

需要在 GitHub 仓库中配置 Secrets：

```text
CLOUDFLARE_API_TOKEN
CLOUDFLARE_ACCOUNT_ID
```

推送到 `main` 会部署生产环境；Pull Request 会生成预览部署。

### 手动部署

```bash
npm run deploy:pages
```

更多部署细节见：

```text
DEPLOY_ENERGYQUANT.md
```

## 审阅记录

本次仓库审阅后的主要结论：

- README 原文信息偏少，无法覆盖官网维护、内容编辑、静态部署和质量检查流程。
- 当前项目实际生产路径是静态前端构建，README 中应把 `npm run build` 与 `dist/client` 作为默认部署路径。
- 仓库根目录存在 `.env` 文件，当前没有看到数据库连接串等真实密钥，但仍建议后续改为 `.env.example`，并避免提交真实环境变量。
- `client/package.json` 不存在；依赖、脚本和构建入口都在根目录 `package.json`。
- `client/src/content/site-content.ts` 是内容维护的核心文件，应在说明文档中明确标出。

## 相关文档

- `DEPLOY_ENERGYQUANT.md`：Cloudflare Pages、Nginx 和 DNS 部署说明
- `docs/content-quality-maintenance.md`：内容质量维护说明
- `docs/official-website-release-runbook.md`：发布运行手册
- `docs/PLAN_INDEX.md`：计划文档索引
