# Fiore florist — complete source export

This archive contains the editable Next.js App Router source, Tailwind styles, components, original image assets, dependency lockfile, environment example, and setup README.

## Run with standard Next.js

1. Install Node.js 22.13 or later and the pnpm version listed in package.json.
2. From this folder, run `pnpm install`.
3. Copy `.env.example` to `.env.local`.
4. Run `pnpm exec next dev` and open http://localhost:3000.

Build: `pnpm exec next build --webpack`
Start production: `pnpm exec next start`

The package's default dev/build scripts retain the original Sites/Vinext tooling. The commands above run standard Next.js directly. The standard Next.js production build was verified successfully.

This is the inquiry-only (non-ecommerce) template. Personalize `siteConfig.ts`, `lib/content.ts`, and the page/component copy. Read README.md for integration setup and photography sources. Photographs are demo references with unverified reuse rights; replace or license them before commercial publication.

This export excludes installed dependencies, generated build output, local secrets, and the original private Site identity. All editable images are in public/images/.
