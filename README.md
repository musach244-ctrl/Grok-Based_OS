# Musa OS — Phase 1 Shell

An App Router and Tailwind CSS portfolio shell with a cinematic boot screen, responsive landing page, system profile, project cards, timeline, AI-workspace preview, and contact section.

## Run locally

1. Open this folder in a terminal.
2. Run `npm install`.
3. Run `npm run dev`.
4. Visit `http://localhost:3000`.

## Project map

- `app/page.tsx` — composition and boot-to-interface state
- `app/globals.css` — the full responsive visual system
- `components/` — focused UI sections, ready to expand in later phases

The current AI Workspace button is intentionally a UI preview. Phase 2 can connect it to a separate workspace route and API layer.

## GitHub Pages deployment

This project is configured for static export. The included GitHub Actions workflow builds and deploys the site whenever changes are pushed to the `main` branch. In the repository settings, set **Pages → Source** to **GitHub Actions** once.
