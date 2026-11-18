# Cyprus Beauty Directory

A Cyprus-wide directory for barbershops, hair salons and independent professionals. This repository currently contains a **static preview** of the platform, not the finished SaaS.

## Hostinger deployment (shared hosting / public_html)

The project uses Next.js static export (`output: 'export'`). Copy **generated files from `out/`**, not the raw Next.js source files, into the Hostinger `public_html` document root. Copying `app/` and `package.json` to `public_html` alone results in no index page and may cause HTTP 403.

### Automated deployment through GitHub Actions

GitHub Actions builds on each push to `main` and stores a downloadable `hostinger-public-html` artifact. To also publish automatically to Hostinger, go to **Repository → Settings → Secrets and variables → Actions**:

**Repository secrets**
- `HOSTINGER_FTP_SERVER`: FTP hostname from Hostinger.
- `HOSTINGER_FTP_USERNAME`: FTP login from Hostinger.
- `HOSTINGER_FTP_PASSWORD`: FTP password from Hostinger.

**Repository variables**
- `ENABLE_HOSTINGER_FTP_DEPLOY` = `true`
- `HOSTINGER_FTP_SERVER_DIR` = `/public_html/` **only if** this is the correct FTP-visible remote directory for the site; some accounts use `/` or a domain-specific path.

The workflow uses FTPS. Verify Hostinger FTPS support and the FTP root path before activating. GitHub must have permission to run workflows. To avoid overwriting another site, confirm the FTP user points to the correct target domain. Never put passwords or private keys in repository code.

GitHub → **Actions → Build and deploy to Hostinger → Run workflow** can rebuild on demand.

### Local preview
```bash
npm install
npm run dev
```

### Local static build
```bash
npm install
npm run build
```
Publish the contents of `out/` to `public_html/`, with `out/index.html` becoming `public_html/index.html`.

## Roadmap and limitations

This deployment is a static frontend: it has no live listings, login, Stripe checkout or admin backend yet. Supabase authentication and Stripe subscriptions require a secured backend/Node.js app and a separate development phase. Do not advertise payments or account registration as functional.
