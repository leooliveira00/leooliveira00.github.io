# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A single-page personal portfolio (React 18 + Create React App, Bootstrap 5) for a full-stack developer with an IT infrastructure background. All sections (Hero, About, Projects, Skills, Timeline, Contact, Footer) render on one page (`src/App.js`) and are navigated via hash links (`HashRouter` + `react-router-hash-link`).

## Commands

- `npm start` — dev server at http://localhost:3000 with hot reload.
- `npm run build` — production build to `build/`.
- `npm test` — runs `react-scripts test` (Jest/RTL). No test files currently exist in the repo; there is no established pattern for adding them yet.
- `npm run eject` — irreversible CRA eject; do not run without explicit user request.

There is no lint script; ESLint runs via `react-scripts` using the `react-app` config in `package.json`.

## Architecture

### Content lives in two places, and they are not the same

- `src/locales/{pt-BR,en-US}/*.json` — the actual source of truth for on-page text. Loaded eagerly and registered as i18next namespaces in `src/i18n/config.js` (one namespace per file: `common`, `hero`, `about`, `projects`, `skills`, `contact`, `footer`).
- `src/data/projectsData.js` and `src/data/skillsData.js` — **dead code**. `Projects.jsx` and `Skills.jsx` do not import them; instead each component rebuilds an equivalent array/object at render time from `t('projects:projects', { returnObjects: true })` / from individual `t('skills....')` calls, hardcoding things like `technologies` and skill `level` percentages inline in the component. When editing project or skill content, edit the JSON locale files (and keep pt-BR/en-US in sync) plus the parallel hardcoded arrays in the component (technologies list in `Projects.jsx`, skill levels in `Skills.jsx`) — not `src/data/projectsData.js`/`skillsData.js`.
- `src/data/timelineData.js` — used directly by `Timeline.jsx`, but is **not internationalized at all**: no i18n namespace exists for it, and `Timeline.jsx` also has its own hardcoded Portuguese strings (headings, "Ver conquistas", `typeColors` labels, summary stats). Switching language does not affect the Timeline section. If asked to translate it, this requires adding a new `timeline` namespace/locale files and wiring `useTranslation` into `Timeline.jsx`, mirroring the pattern in `Projects.jsx`/`Skills.jsx`.

### i18n mechanics

- `src/i18n/config.js` statically imports every JSON file and initializes i18next with `LanguageDetector` (localStorage → navigator) and `fallbackLng: 'pt-BR'`. Adding a new locale namespace means: create the JSON pair under `src/locales/{pt-BR,en-US}/`, import both in `config.js`, and add them to the `resources` map under the appropriate key.
- `LanguageSwitcher.jsx` toggles `i18n.language` directly between `'pt-BR'` and `'en-US'` (no other locales supported).
- `SEO.jsx` (rendered once in `App.js`) derives `<html lang>`, OG/Twitter meta tags, and language-specific keyword strings from `i18n.language`; it does not read a `seo` namespace.

### Loading strategy

`App.js` loads `Navigation`, `Hero`, `SEO`, `ScrollProgress` eagerly; `About`, `Projects`, `Skills`, `Contact`, `Footer` are `React.lazy`-loaded behind a single `Suspense` boundary. Keep this split in mind when adding new sections — above-the-fold components should stay eager.

### Contact form

`Contact.jsx` currently **simulates** submission with a `setTimeout` — it does not send real email despite `emailjs-com` being a dependency. Real sending requires wiring up EmailJS (or another provider) per `CONFIGURAR_EMAILJS.md` in the repo root. Contact details (email, phone, social URLs) are hardcoded in `Contact.jsx`, not translated (only their labels go through `t()`).

### Styling

Global design tokens (colors, gradients, fonts, spacing, shadows) are CSS custom properties defined once in `src/styles/globals.css` (`:root`). Each component has a co-located `.css` file; prefer consuming the existing `--primary-color`/`--secondary-color`/etc. variables over introducing new hardcoded colors.

## Other docs in this repo

- `README.md` — project overview, features, deploy instructions (Vercel/Netlify/GitHub Pages).
- `GUIA_CUSTOMIZACAO.md` / `GUIA_RECRUTADORES.md` — content/personalization guides for the portfolio owner, not developer docs.
- `CONFIGURAR_EMAILJS.md` — steps to wire up real email sending for the contact form.
