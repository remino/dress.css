![](public/dress.css/dress.svg)

# dress.css

## v5.0.0

The little dress of CSS.

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

## Features

- **Small** – roughly 5 KiB gzipped.
- **Class-less** – semantic HTML gets styled automatically.
- **Modern** – built with native CSS nesting, custom properties, and flexbox.
- **Readable** – carefully tuned typography and spacing.
- **Responsive** – relative units everywhere, zero media-query fuss.
- **Accessible** – friendly focus states and thoughtful defaults.
- **Printable** – attractive print layout with external URLs revealed.
- **Customizable** – override the CSS variables to theme it your way.

---

## Installation

### HTML (CDN)

<!-- prettier-ignore -->
```html
<link rel="stylesheet" href="https://unpkg.com/@remino/dress.css/dist/dress.css">
```

Mirrors:

- https://unpkg.com/@remino/dress.css/dist/dress.css
- https://cdn.jsdelivr.net/npm/@remino/dress.css/dist/dress.css

### npm

Install the package first:

```sh
npm install @remino/dress.css
```

Then, in your app, import its CSS file:

```js
import '@remino/dress.css'
```

### Direct download

Grab the latest `dress.css` from the
[GitHub Releases](https://github.com/remino/dress.css/releases/latest/download/dress.css).

---

## Usage

Reference the [_Elements_](https://remino.net/dress.css/elements/) page for
tag-by-tag examples that demonstrate the provided defaults.

---

## Browser support

Designed for evergreen browsers (current Chrome, Edge, Firefox, Safari, and
their mobile counterparts). Compatibility is periodically checked with
[`doiuse`](https://www.npmjs.com/package/doiuse); older engines such as IE are
not supported.

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

---

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/amazing-feature`.
3. Make your changes.
4. Run `npm run build` and `npm test`.
5. Commit, push, and open a pull request.

Issues and ideas are welcome—please star the project if you enjoy it!

---

## Licence

Licensed under the ISC licence. See `LICENSE.md`.
