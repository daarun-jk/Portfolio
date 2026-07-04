# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Changed
- Migrated build system from Create React App (`react-scripts`) to **Vite** for significantly faster builds and instant Hot Module Replacement (HMR).
- Converted `src/App.js` and `src/index.js` to `.jsx` extensions as required by Vite.
- Switched SVG imports in `Footer.jsx` to use Vite's `?react` query parameter (powered by `vite-plugin-svgr`) instead of CRA's `ReactComponent`.
- Configured PostCSS (`postcss.config.js`) to process Tailwind CSS correctly under Vite.
- Reordered CSS `@import` statements in `src/globals.css` to properly precede `@tailwind` directives.
- Cleaned up `.gitignore` to prevent tracking of IDE config directories (`.vscode/`), build outputs (`/build`), and a large amount of unused mock image assets.

### Removed
- Entire `src/components/parts` directory. Components (`Button`, `Heading`, `Section`, etc.) were refactored and inlined directly into the pages that consumed them.
- Entire `src/components/molecules` directory. Sub-components were simplified and inlined directly into their parent pages.
- Unused components (`AnimatedLetters`, `Contacts` page, `sdconfig.jsx`) and their associated CSS/SCSS files.
- Extraneous imports and dead code from `App.jsx`, `Footer.jsx`, `About.jsx`, `Skills.jsx`, `Projects.jsx`, `Experience.jsx`, and `Achievements.jsx` to resolve all ESLint warnings.
- `public/index.html` was moved to the project root for Vite compatibility.
