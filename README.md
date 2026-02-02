# Vertalex – Simple Next.js (no backend)

A simple Next.js app with **all data in the repo**. No WordPress, no API, no backend. Everything is dummy data you can edit in code.

## Data

All content lives in **`src/data/index.ts`**:

- **Menu** – nav links
- **Pages & posts** – for catch-all route `[...slug]`
- **Projects** – Our Projects section
- **Testimonials** – testimonials section
- **News** – news section
- **Sitemap** – URLs for `/sitemap.xml`

Edit the arrays and getters in that file to change the site. No env vars are required for content (optional: `NEXT_PUBLIC_BASE_URL` for sitemap/robots URLs).

## Scripts

- `npm run dev` – start dev server
- `npm run build` – build for production
- `npm run start` – run production build

## Structure

- `src/app` – routes and pages
- `src/components` – shared components
- `src/data` – **single source of content** (dummy data)
- `src/utils` – helpers (e.g. `seoData`, `nextSlugToWpSlug`)

Contact form on Testimonials is demo-only: it shows a success message without sending data anywhere.
