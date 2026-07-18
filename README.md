![](src/images/dress.svg)

# dress.css

The little dress of CSS

Blouson v5.4.0

By Rémino Rem  
<https://remino.net/>

[Site](https://remino.net/dress.css/) |
[Code Repo](https://github.com/remino/dress.css) |
[NPM Package](https://www.npmjs.com/package/@remino/dress.css)

---

## Minimal style for semantic HTML

**<mark>dress.css</mark>** is a minimalist class-less stylesheet that makes your
pages look great simply by writing HTML. Inspired by
[_new.css_](https://newcss.net/) but tailored with a custom vertical rhythm and
no external fonts, it delivers modern typography, spacing, and interactive
states out of the box. Earlier releases were known as **sem.css**.

---

<!-- mtoc-start -->

- [Features](#features)
- [Installation](#installation)
    - [HTML (CDN)](#html-cdn)
    - [npm](#npm)
    - [Direct download](#direct-download)
- [Usage](#usage)
    - [Layered imports](#layered-imports)
- [Browser support](#browser-support)
    - [Backwards compatibility](#backwards-compatibility)
- [Development](#development)
    - [Install first](#install-first)
    - [CSS](#css)
    - [Docs](#docs)
    - [Build everything](#build-everything)
- [Tests](#tests)
    - [Visual regression (Playwright)](#visual-regression-playwright)
    - [Response redirects (Hurl)](#response-redirects-hurl)
- [Contributing](#contributing)
- [Licence](#licence)

<!-- mtoc-end -->

---

## Features

- **Small** – roughly 5 KiB gzipped.
- **Class-less** – semantic HTML gets styled automatically.
- **Modern** – built with native CSS nesting, custom properties, and flexbox.
- **Readable** – carefully tuned typography and spacing.
- **Responsive** – relative units everywhere, zero media-query fuss.
- **Accessible** – friendly focus states and thoughtful defaults.
- **Printable** – attractive print layout with external URLs revealed.
- **Customizable** – override the CSS variables to theme it your way.

[Back to top](#)

---

## Installation

### HTML (CDN)

<!-- prettier-ignore -->
```html
<link rel="stylesheet" href="https://unpkg.com/@remino/dress.css">
```

Mirrors:

- https://unpkg.com/@remino/dress.css
- https://cdn.jsdelivr.net/npm/@remino/dress.css/dist/dress.css

### npm

Install the package first:

```sh
npm add @remino/dress.css
```

Then, in your app, import its CSS file:

```js
import '@remino/dress.css'
```

### Direct download

Grab the latest `dress.css` from the
[GitHub Releases](https://github.com/remino/dress.css/releases/latest/download/dress.css).

[Back to top](#)

---

## Usage

Reference the [_Elements_](https://remino.net/dress.css/elements/) page for
tag-by-tag examples that demonstrate the provided defaults.

### Layered imports

Need finer control? <mark>**dress.css**</mark> publishes each internal layer so
you can mix and match:

```js
import '@remino/dress.css/layers/variables.css'
import '@remino/dress.css/layers/base.css'
import '@remino/dress.css/layers/links.css'
// ...
```

These modules mirror the order of the main `dress.css` bundle, so importing them
sequentially reproduces the full experience while letting you override or skip
specific layers:

| Layer               | Purpose                                                                              |
| ------------------- | ------------------------------------------------------------------------------------ |
| `compat.css`        | Fallback variables for browsers not supporting `light-dark()`.                       |
| `variables.css`     | Declares `--dress-*` CSS custom properties, icons, spacing, and motion tokens.       |
| `base.css`          | Applies the global reset, body/html sizing, and accessibility skip-link helpers.     |
| `props.css`         | Bridges browser quirks (e.g. `color-scheme`, `text-size-adjust`, `scroll-behavior`). |
| `inlines.css`       | Normalises inline tags such as `strong`, `em`, `abbr`, and `small`.                  |
| `focus.css`         | Provides consistent focus/active outlines and selection styling.                     |
| `links.css`         | Styles anchors, download/external indicators, and heading-link wrappers.             |
| `blocks.css`        | Handles block-level spacing, generic containers, and vertical rhythm.                |
| `sections.css`      | Tunes `header`, `main`, `section`, and `footer` spacing/stacking.                    |
| `headings.css`      | Typography scale for `h1`–`h6`, including fluid sizes and margins.                   |
| `images.css`        | Shared rules for `img`, `picture`, and media elements (borders, captions).           |
| `lists.css`         | Normalises `ul`/`ol` padding, bullets, and definition lists.                         |
| `tables.css`        | Table layout, borders, striping, and responsive tweaks.                              |
| `forms.css`         | Inputs, buttons, selects, and checkbox/radio styling.                                |
| `code.css`          | Monospaced typography, `pre` blocks, and inline code treatments.                     |
| `animation.css`     | Keyframes and transition tokens used by other layers.                                |
| `popups.css`        | Details/Summary, dialog, and tooltip helpers.                                        |
| `print.css`         | Print styles (margins, URL disclosure, simplified layout).                           |
| `@remino/dress.css` | Imports every layer above in the correct order. (Use this by default).               |

[Back to top](#)

---

## Browser support

Designed for evergreen browsers (current Chrome, Edge, Firefox, Safari, and
their mobile counterparts). Compatibility is periodically checked with
[`doiuse`](https://www.npmjs.com/package/doiuse); older engines such as IE are
not supported.

### Backwards compatibility

This stylesheet is meant to stay up to date with the latest changes of
mainstream browsers, not to support old CSS forever. Major version changes will
likely break support of previous version of this stylesheet. Minor version
updates are less likely to do so, but there is still a possibility. If a
specific version of the stylesheet works best for you, stay with it. If you
prefer using the latest version, make sure to read the updates (`CHANGELOG.md`)
and to test your site or application.

[Back to top](#)

---

## Development

This project is built with Vite (for the CSS library) and Astro (for the
documentation site).

### Install first

```sh
npm install
```

### CSS

```sh
npm run build:css  # Build dist/dress.css
```

### Docs

```sh
npm run dev        # Start the Astro dev server
npm run build:site # Build the documentation site to deploy/public/
```

### Build everything

```sh
npm run build      # Run both builds
```

### Pre-commit checks

```sh
npm run precommit  # Format/lint only staged files
```

The Husky `pre-commit` hook uses `lint-staged`, so regular commits stay fast
while the Husky `pre-push` hook still runs the full validation suite.

```sh
npm run validate   # Format, lint, and run visual tests
```

### Releases

Update `CHANGELOG.md` first, then run:

```sh
npm run release:dry-run # Preview version/tag/publish steps
npm run release         # Publish to npm and create the GitHub release
```

`release-it` runs format, lint, visual tests, and the full build before creating
the release. It also updates the README version line and creates the GitHub
release from the CLI through `gh`, so make sure `gh auth status` and
`npm whoami` both pass first.

[Back to top](#)

---

## Tests

### Visual regression (Playwright)

```sh
npm run test:visual        # Run tests
npm run test:visual:update # Update visual snapshots
npm run test:visual:ui     # Show Playwright UI
```

Snapshots cover the _Elements_ gallery, layout width fixtures, and anchor
behavior.

### Response redirects (Hurl)

Install [Hurl](https://hurl.dev) locally, then execute:

```sh
npm run test:responses
```

The suite targets the production origin declared in `package.json#homepage` by
default. Override with `HURL_BASE_URL` (and optionally `HURL_USER_AGENT`) to
point to staging or preview deployments.

[Back to top](#)

---

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/amazing-feature`.
3. Make your changes.
4. Run `npm run build` and `npm test`.
5. Commit, push, and open a pull request.

Issues and ideas are welcome—please star the project if you enjoy it!

[Back to top](#)

---

## Licence

Licensed under the ISC licence. See `LICENSE.md`.

[Back to top](#)
