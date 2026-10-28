<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./public/logo/white.svg" />
    <img src="./public/logo/black.svg" alt="Ranielli Montagna logo" width="88" height="88" />
  </picture>

  <h1>links.ranimontagna.com</h1>

  <p>A static, first-party links page built with Astro that replaces Linktree in Ranielli Montagna's social profiles.</p>

  <p>
    <a href="LICENSE"><img src="https://img.shields.io/github/license/raniellimontagna/links.ranimontagna.com" alt="License" /></a>
    <img src="https://img.shields.io/github/package-json/dependency-version/raniellimontagna/links.ranimontagna.com/astro?logo=astro" alt="Astro version" />
    <img src="https://img.shields.io/github/package-json/dependency-version/raniellimontagna/links.ranimontagna.com/dev/typescript?logo=typescript" alt="TypeScript version" />
  </p>

  <p><strong>Live:</strong> <a href="https://links.ranimontagna.com">links.ranimontagna.com</a></p>
</div>

## Preview

<table>
  <tr>
    <td width="72%" valign="top">
      <img src="./docs/assets/preview-desktop.png" alt="Desktop preview of links.ranimontagna.com" />
    </td>
    <td width="28%" valign="top">
      <img src="./docs/assets/preview-mobile.png" alt="Mobile preview of links.ranimontagna.com" />
    </td>
  </tr>
</table>

## About

The page keeps the clarity of a Linktree-style profile while running on its own domain, with the portfolio's visual identity and full control over content, performance and deploys.

## Features

- One static page with no backend and no client-side JavaScript beyond the JSON-LD block.
- Mobile-first layout tuned for traffic from social media bios.
- Links and copy kept as typed data in a single file.
- `rel="me"` on links to personal profiles.
- Metadata, Open Graph, Twitter Card and JSON-LD.
- Light and dark favicons, plus the RM brand assets from the portfolio.
- Respects `prefers-reduced-motion`.
- Vitest checks for the public links and metadata.

## Tech stack

| Layer | Technology |
| --- | --- |
| Framework | Astro (static output) |
| Language | TypeScript |
| Styling | Plain global CSS |
| Tests | Vitest |
| Package manager | pnpm |
| Hosting | Vercel |

## Getting started

Prerequisites: Node.js 22.12 or newer and pnpm 11.

```bash
pnpm install
pnpm dev
```

The site runs at `http://localhost:4321`.

## Scripts

| Command | What it does |
| --- | --- |
| `pnpm dev` | Start the Astro dev server |
| `pnpm build` | Build the static site into `dist/` |
| `pnpm preview` | Serve the build locally |
| `pnpm check` | Run Astro and TypeScript checks |
| `pnpm test` | Run the Vitest suite |
| `pnpm test:watch` | Run Vitest in watch mode |

Before publishing a change, run `pnpm test`, `pnpm check` and `pnpm build`.

## Project structure

```text
.
├── docs/
│   ├── assets/                 # README screenshots
│   └── superpowers/            # Design spec and implementation plan
├── public/
│   ├── images/                 # Profile photos
│   ├── logo/                   # RM logos copied from the portfolio
│   └── og-image.png
├── src/
│   ├── data/profile.ts         # Identity, copy and public links
│   ├── lib/metadata.ts         # Centralized metadata
│   ├── pages/index.astro       # The page
│   └── styles/global.css       # Layout and visual system
└── package.json
```

## Editing the links

All content lives in [`src/data/profile.ts`](src/data/profile.ts): name and handle, title and subtitle, and the ordered list of links with their accessible labels. The tests in `src/data/profile.test.ts` pin the link order and the `rel="me"` set, so update them together with the data.

## Deploy

`pnpm build` writes a fully static site to `dist/`. Production runs on Vercel, and any static host works.

## License

Released under the [MIT License](LICENSE).
