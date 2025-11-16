---
layout: ../../layouts/PageLayout.astro
title: Variables
description: Reference for customizing dress.css with CSS variables.
---

# Variables

Every design token is exposed by **<mark>dress.css</mark>** as a CSS variable
so you can adapt the palette, spacing, and motion without editing the library
itself. Override them globally in your own stylesheet:

```css
:root {
	--dress-bg: #f5f5f5;
	--dress-lk: rebeccapurple;
	--dress-mw: 64rem;
}
```

Variables fall into two groups: **primary tokens** (raw values such as colours
or spacing constants) and **derived tokens** that are calculated from them.
Whenever possible, override the primary value and let the derived siblings
update automatically.

⚠️ Note some variable names have changed from v4.

---

## Contents

---

## Palette

### Surface

| Variable       | Description                                       |
| -------------- | ------------------------------------------------- |
| `--dress-bg`   | Base page background colour                       |
| `--dress-fg`   | Default body text colour                          |
| `--dress-bg-2` | Raised block background derived from `--dress-bg` |
| `--dress-dt`   | Border/detail colour used for strokes             |

### Links

| Variable        | Description                                 |
| --------------- | ------------------------------------------- |
| `--dress-lk`    | Default link colour                         |
| `--dress-lk-h`  | Hover/focus link colour                     |
| `--dress-lk-a`  | Active link colour                          |
| `--dress-lk-v`  | Visited link colour                         |
| `--dress-lk-tx` | Text colour when links sit on solid accents |

### Buttons

| Variable          | Description                               |
| ----------------- | ----------------------------------------- |
| `--dress-bt-1`    | Primary button background (default)       |
| `--dress-bt-1-h`  | Primary button background (hover/focus)   |
| `--dress-bt-1-a`  | Primary button background (active)        |
| `--dress-bt-1-tx` | Primary button text colour                |
| `--dress-bt-2`    | Secondary button background (default)     |
| `--dress-bt-2-h`  | Secondary button background (hover/focus) |
| `--dress-bt-2-a`  | Secondary button background (active)      |
| `--dress-bt-2-tx` | Secondary button text colour              |

### Semantic Accents

| Variable         | Description                             |
| ---------------- | --------------------------------------- |
| `--dress-sec`    | Secondary highlight colour              |
| `--dress-sec-tx` | Secondary highlight text colour         |
| `--dress-mk`     | Mark/highlight background               |
| `--dress-mk-tx`  | Mark/highlight text colour              |
| `--dress-neg`    | Base red tone for destructive states    |
| `--dress-pos`    | Base green tone for constructive states |
| `--dress-del`    | Soft delete background                  |
| `--dress-ins`    | Soft insert background                  |
| `--dress-low`    | Meter colour for low values             |
| `--dress-mid`    | Meter colour for mid-range values       |
| `--dress-hi`     | Meter colour for high values            |
| `--dress-sh`     | Soft drop shadow colour                 |

![Back to top](#)

## Layout & Spacing

### Metrics

| Variable         | Description                                      |
| ---------------- | ------------------------------------------------ |
| `--dress-br`     | Default border radius                            |
| `--dress-bs`     | Default border thickness                         |
| `--dress-lh`     | Base line-height multiplier                      |
| `--dress-mw`     | Preferred main width for `<body>`                |
| `--dress-mw-f`   | Fallback main width for `<body>` (`max-content`) |
| `--dress-mw-min` | Minimum main width for `<body>`                  |
| `--dress-s-i`    | Base inline spacing unit                         |

✅ All derived spacing tokens respond automatically when you change `--dress-mw`
or the other primary metrics, so you rarely need to override them individually.

### Spacing Helpers

| Variable       | Description                                    |
| -------------- | ---------------------------------------------- |
| `--dress-gap`  | Default gap between stacked elements           |
| `--dress-m-b`  | Base block margin                              |
| `--dress-m-be` | Block margin end override                      |
| `--dress-m-bs` | Block margin start override                    |
| `--dress-m-i`  | Default inline margin                          |
| `--dress-mp`   | Consistent spacing inside interactive controls |
| `--dress-p-b`  | Block padding derived from `--dress-s-b`       |
| `--dress-p-i`  | Inline padding derived from `--dress-s-i`      |
| `--dress-s-b`  | Base block spacing unit (`--dress-lh * 1rem`)  |
| `--dress-so`   | Scroll offset applied to anchored headings     |

![Back to top](#)

## Typography & Motion

### Typography

| Variable           | Description                                   |
| ------------------ | --------------------------------------------- |
| `--dress-ff-sans`  | Sans-serif font stack                         |
| `--dress-ff-serif` | Serif font stack                              |
| `--dress-ff`       | Default font family (points to sans stack)    |
| `--dress-ff-h`     | Heading font family (points to sans stack)    |
| `--dress-ff-mono`  | Monospace font stack                          |
| `--dress-fs-min`   | Lower bound for `clamp()`                     |
| `--dress-fs-max`   | Upper bound for `clamp()`                     |
| `--dress-fs-var`   | Viewport-driven value for `clamp()`           |
| `--dress-fs`       | Resulting clamp value applied to `<html>`     |
| `--dress-cs`       | Scale multiplier for inline/preformatted code |
| `--dress-ts`       | `tab-size` used in `<pre>` and `<code>`       |

### Motion

| Variable       | Description                                  |
| -------------- | -------------------------------------------- |
| `--dress-ad`   | Default animation/transition duration        |
| `--dress-ad-h` | Hover/active duration (half of `--dress-ad`) |
| `--dress-at`   | Animation timing function                    |

![Back to top](#)

## Icons & Data URIs

| Variable          | Description                     |
| ----------------- | ------------------------------- |
| `--dress-i-cb`    | Checkbox glyph (data URI)       |
| `--dress-i-rb`    | Radio glyph (data URI)          |
| `--dress-i-dl`    | Download icon (data URI)        |
| `--dress-i-xln`   | External-link icon (data URI)   |
| `--dress-i-sel-d` | Select chevron for light inputs |
| `--dress-i-sel-l` | Select chevron for dark inputs  |

Vector assets use inline SVG data URIs so you can replace them with your own
brand system.

![Back to top](#)

## Tips

- Prefer overriding high-level tokens (`--dress-bg`, `--dress-sec`, `--dress-mw`)
  so the rest of the system stays in sync.
- Use media queries to provide light/dark variants, mirroring how **<mark>dress.css</mark>**
  overrides the same tokens inside `@media (prefers-color-scheme: dark)`.
- All values are plain CSS, so you can reference your own variables or use functions
  like `color-mix()` and `clamp()` when extending the design system.

![Back to top](#)

## Source

Browse the upstream variables file on GitHub:
<https://github.com/remino/dress.css/blob/main/src/styles/dress/variables.css>

![Back to top](#)
