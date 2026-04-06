# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is a React + Vite + Tailwind CSS frontend for a legal digital consultancy firm ("Docketo"). The actual working codebase lives in `legal_digital_frontend/`.

```
legal_digital_cons/
└── legal_digital_frontend/
    ├── index.html              # Entry point — loads from src_redesign/main.jsx
    ├── src/                    # Original version (not active)
    ├── src_redesign/           # Active codebase (loaded by index.html)
    │   ├── App.jsx             # Router setup with all routes
    │   ├── main.jsx            # React entry point
    │   ├── components/
    │   │   ├── legal_pages/    # PrivacyPolicy, TermsOfService, Disclaimer
    │   │   └── *.jsx           # Page sections and layout components
    │   └── hooks/
    │       └── useScreenWidth.js  # Responsive breakpoint hook
    └── public/                 # Static assets (images, SVGs, logo)
```

**Important:** `index.html` points to `src_redesign/main.jsx`, not `src/main.jsx`. The `src/` directory is the old version — do not modify it.

## Commands

All commands run from `legal_digital_frontend/`:

```bash
npm run dev       # Start dev server
npm run build     # Production build (outputs to dist/)
npm run lint      # ESLint
npm run preview   # Preview production build
```

## Architecture

- **Routing:** React Router v7. Routes defined in `src_redesign/App.jsx`. `ScrollUp` component wraps the app to scroll to top on route change.
- **Styling:** Inline styles (not Tailwind classes) are used throughout `src_redesign/` components. Tailwind is configured via `@tailwindcss/vite` plugin but the redesigned components use JavaScript style objects directly.
- **Responsive layout:** `useScreenWidth` hook tracks `window.innerWidth`. The breakpoint for mobile nav is `< 500px`.
- **Color palette:** Dark navy `#0d1b2a` background, gold `#c9a84c` accents, warm off-white `#f5f0e8` / `#c8c0b4` text.
- **Header:** Fixed, scroll-aware (changes opacity/shadow on scroll), active route highlighted in gold.
- **Pages:** Home (`/`), Services (`/services`), Team (`/team`), Contact (`/contact`), Privacy (`/privacy`), Terms (`/terms`), Disclaimer (`/disclaimer`).
