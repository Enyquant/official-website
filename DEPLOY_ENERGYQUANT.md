# Enyquant.com Deployment Notes

## 1. Static Asset Sync
Project assets can still be refreshed locally with:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\download-feishu-assets.ps1
```

This updates the checked-in public assets used by the site build.

## 2. Build
Use the static build for Cloudflare Pages:

```powershell
npm install
npm run build
```

Notes:
- `npm run build` builds the static client bundle only.
- The static output directory is `dist/client`.
- If a full NestJS package is required, use `npm run build:fullstack`.

## 3. Cloudflare Pages
Recommended project settings:

- Build command: `npm run build`
- Build output directory: `dist/client`
- Production branch: `main`

## 4. GitHub Actions Auto Deploy
The repository now includes `.github/workflows/deploy-pages.yml`.

Behavior:
1. Pushes to `main` deploy production to the existing `official-website` Cloudflare Pages project.
2. Pull requests deploy preview builds using the PR branch name.
3. The workflow builds locally in GitHub Actions with `npm ci` and `npm run build`, then uploads `dist/client` with Wrangler.

Required GitHub repository secrets:
1. `CLOUDFLARE_API_TOKEN`
2. `CLOUDFLARE_ACCOUNT_ID`

Token requirements:
1. Create a Cloudflare API token scoped to the target account.
2. Grant at minimum `Account` / `Cloudflare Pages` / `Edit`.

Manual fallback:
1. `npm run deploy:pages` performs a local direct upload to Cloudflare Pages with Wrangler.
2. Use the Pages manual path only when GitHub Actions is unavailable or when you need an emergency redeploy.
3. `npm run deploy` targets the connected Cloudflare Workers project configured by `wrangler.jsonc`; keep it for Workers Git integration validation, not as the default production Pages path.

## 5. Legacy Server / Nginx Path
If you ever need to host the static build outside Cloudflare Pages, upload the contents of `dist/client` to the target server and serve it as a single-page application.

Example Nginx configuration:

```nginx
server {
    listen 80;
    server_name enyquant.com www.enyquant.com;

    root /var/www/enyquant;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|svg|ico|woff2?)$ {
        expires 30d;
        add_header Cache-Control "public, max-age=2592000, immutable";
    }
}
```

## 6. DNS
If DNS is managed outside Cloudflare, point:
1. `enyquant.com` to the production host or Cloudflare-managed endpoint.
2. `www.enyquant.com` to the same destination, usually via CNAME.
