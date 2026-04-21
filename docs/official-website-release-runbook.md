# Official Website Release Runbook

Audience: both
Purpose: runbook
Owner: Web Platform Team
Source-of-Truth: yes
Status: active
Last-Updated: 2026-03-24

## Goal
Provide one release checklist for the official website, with GitHub Actions as the default Cloudflare Pages deployment path.

## Preconditions
1. Work from a reviewed branch before merging to `main`.
2. Confirm no unreviewed public copy remains in `client/src/content/site-content.ts`.
3. Confirm no unverified metrics, case results, fake downloads, or fake form flows have been reintroduced.

## Release Gate
Run in `official-website/`:

```bash
npm run test:content
npm run type:check
npm run build
```

For local visual review on Windows:

```bash
npm run preview:client:win
```

Expected:
1. all commands exit `0`,
2. preview opens on `http://127.0.0.1:4173`,
3. no page shows legacy brand copy or mock launch content.

## Manual Review Checklist
1. Home clearly explains who EnergyQuant is and what the site is for.
2. Solutions page contains only approved scenarios, deliverables, and cooperation entry points.
3. About page keeps only approved company positioning and methods.
4. Knowledge page is an explicit placeholder with no fake downloads.
5. Updates page contains only approved update items.
6. Contact page has no unapproved online form flow or fake contact path.
7. Chinese and English navigation, footer, and SEO titles stay aligned.

## Build Output
1. `npm run build` produces the static release bundle under `dist/client/`.
2. GitHub Actions deploys `dist/client` to the `official-website` Cloudflare Pages project.
3. If server packaging is required, use `npm run build:fullstack` and follow `DEPLOY_ENERGYQUANT.md`.

## Release Steps
1. Run the release gate commands.
2. Open preview locally and complete the manual review checklist.
3. Open or update the PR.
4. Confirm the preview deployment succeeds in GitHub Actions for that PR branch.
5. Merge to `main`.
6. Confirm the `Deploy Cloudflare Pages` workflow succeeds on `main` and updates production.

## Deployment Automation
1. The repository uses `.github/workflows/deploy-pages.yml` for Cloudflare Pages deployments.
2. Pull requests create preview deployments by running `wrangler pages deploy dist/client --branch=<pr-branch>`.
3. Pushes to `main` create production deployments by running `wrangler pages deploy dist/client --branch=main`.
4. GitHub repository secrets must include `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`.
5. The Cloudflare API token should have at minimum the `Account` / `Cloudflare Pages` / `Edit` permission on the target account.
6. Local `npm run deploy` remains available as a manual fallback if GitHub Actions is unavailable.

## Rollback
1. Revert the merge commit if the release needs to be rolled back at code level.
2. Redeploy the previous stable artifact if the issue is deployment-specific.
3. Record the reason and affected page scope in the repo progress log or incident channel.

## Notes
1. This runbook assumes the Cloudflare Pages production branch is `main`.
2. Public downloads, public social links, and public metrics require separate business confirmation before a later release can enable them.
