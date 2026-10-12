# Listing Tag Viewer

A Next.js App Router overview for a personal, read-only research tool. Etsy API approval is pending. No Etsy integration, scraping, database, analytics, or contact form is implemented. Preview data is fictional.

## Run locally

Use Node.js 20.9+ (24 LTS recommended) and npm:

```powershell
npm ci
npm run dev
```

Open http://127.0.0.1:3000. Production checks and local production server:

```powershell
npm run lint
npm run typecheck
npm run build
npm start
```

## Configuration

`src/lib/site.ts` is the single configuration entry point. The supplied email is `alihafeez146@gmail.com`; all email links use it. Optionally override with `CONTACT_EMAIL`.

Copy `.env.example` to `.env.local` for local overrides. Set `SITE_URL` to the actual HTTPS production origin with no path or query. Leave blank until known. Canonical and Open Graph URLs are omitted while blank. No sitemap or robots settings containing placeholder URLs are generated. Environment changes require a new production build. Do not add Etsy credentials.

## Vercel deployment

1. Push this project, including `package-lock.json`, to your GitHub, GitLab, or Bitbucket repository. Do not commit `.env.local` or credentials.
2. In Vercel, select **Add New → Project**, import that repository, and select the intended production branch.
3. Use **Framework Preset: Next.js**, **Root Directory: ./**, **Build Command: npm run build**, and the default Next.js output directory. Select Node.js 24.x in project settings. Vercel installs from the lockfile.
4. Optionally set `CONTACT_EMAIL` for Production if changing the supplied email. If you already have a real custom production domain, set `SITE_URL` to its HTTPS origin. Otherwise leave it blank for the first deployment.
5. Click **Deploy**. Under **Settings → Domains**, copy the stable production domain. Do not use a unique deployment URL or branch preview URL for the Etsy application.
6. In **Settings → Environment Variables**, add `SITE_URL` with that exact HTTPS production origin for **Production**, then redeploy to update the metadata.
7. Review **Settings → Deployment Protection**. Ensure the stable production domain is public. Standard Protection normally leaves the production domain public while protecting preview and generated deployment URLs; adjust your configuration if it also protects production.
8. In a new incognito/private window, signed out of Vercel, open the stable production URL. It must show the overview without a Vercel login or access request. Also check `/privacy`, `/terms`, FAQ, preview disclosure, pending status, and the email link.
9. Use that verified stable production URL for the Etsy application. Deployment does not imply Etsy approval. This task does not deploy or submit the application.

References: [Import a project](https://vercel.com/docs/getting-started-with-vercel/import), [environment variables](https://vercel.com/docs/environment-variables), [deployment protection](https://vercel.com/docs/deployment-protection).

## Pre-publication checklist

- Confirm `alihafeez146@gmail.com` is the intended public contact address.
- Set the real stable production `SITE_URL` and redeploy.
- Confirm public access in incognito without Vercel authentication.
- Check all navigation and legal pages. The contact link should open your email application; it does not submit or send anything from the website.
- Keep pending-approval statements accurate and update privacy information before introducing a live integration.

## Source guide

- `src/app/page.tsx`: homepage and fictional preview.
- `src/app/globals.css`: Tailwind entry point and responsive styles.
- `src/app/privacy/page.tsx` and `src/app/terms/page.tsx`: supporting pages.
- `src/components/site-shell.tsx`: navigation, email link, exact trademark disclaimer.
- `src/lib/site.ts`: shared contact, URL, and metadata configuration.

All application components are server components. FAQ uses native HTML disclosures. Fonts and artwork are local and require no external requests.
