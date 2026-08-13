# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start                      # dev server at http://localhost:3000
npm run build                  # production bundle into build/
npm test                       # Jest watch mode (CRA)
CI=true npm test               # single non-interactive run
npm test -- --testPathPattern=App   # run one test file
npm run deploy                 # predeploy runs build, then gh-pages -d build
```

Both `package-lock.json` and `yarn.lock` are committed. `npm` is the one used by the
scripts (`predeploy` hardcodes `npm run build`), so prefer npm and avoid regenerating
`yarn.lock`.

## Architecture

Single-page personal portfolio site — Create React App (react-scripts 5), React 18, no
router, no state management, no component library. The entire page lives in
[src/App.js](src/App.js) as one function component of hand-written JSX content;
[src/App.css](src/App.css) holds its styles. There is no components/ directory and no
data layer — adding portfolio content means editing that JSX and CSS directly.

Images are project-local under [src/img/](src/img/) and pulled in with
`require('./img/…')` inside JSX so webpack fingerprints them; `public/` is only for
static assets referenced from `index.html`.

## Deployment

Deployed to GitHub Pages under a custom domain: `homepage` in
[package.json](package.json) is `https://loveipeter.com` and
[public/CNAME](public/CNAME) pins the domain. Both must stay in sync — changing one
without the other breaks asset paths or the domain mapping. `npm run deploy` publishes
`build/` to the `gh-pages` branch.

## Known state

[src/App.test.js](src/App.test.js) is still the CRA default test asserting on a "learn
react" link that no longer exists, so `npm test` fails out of the box. Fix or replace it
rather than assuming a real regression.
