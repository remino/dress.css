# CHANGELOG

<!-- mtoc-start -->

* [v4.4.1](#v441)
* [v4.4.0](#v440)
* [v4.3.2](#v432)
* [v4.3.1](#v431)
* [v4.3.0](#v430)
* [v4.2.0](#v420)
* [v4.1.1](#v411)
* [v4.1.0](#v410)
* [v4.0.1](#v401)
* [v4.0.0](#v400)
* [v3.6.0](#v360)
* [v3.5.1](#v351)
* [v3.5.0](#v350)
* [v3.4.1](#v341)
* [v3.4.0](#v340)
* [v3.3.0 / v3.3.1](#v330--v331)
* [v3.2.1](#v321)
* [v3.2.0](#v320)
* [v3.1.3](#v313)
* [v3.1.1 / v3.1.2](#v311--v312)
* [v3.0.0](#v300)
* [v2.0.0](#v200)
* [v1.2.4](#v124)
* [v1.2.3](#v123)
* [v1.2.2 / v1.2.1 / v1.2.0](#v122--v121--v120)
* [v1.1.0](#v110)
* [v1.0.0](#v100)
* [v0.10.x](#v010x)
* [v0.9.x](#v09x)
* [v0.8.0](#v080)
* [v0.7.0 – v0.6.0](#v070--v060)
* [v0.5.x](#v05x)
* [v0.4.0](#v040)
* [v0.3.x](#v03x)
* [v0.2.x](#v02x)
* [v0.1.x](#v01x)

<!-- mtoc-end -->

## v4.4.1

- Avoid hover state on links and buttons for mobile
- Add `--dress-bt-2-a` variable
- Set `max-width` on `<iframe>`

## v4.4.0

- Add style for `popover`, `<del>`, `<iframe>`, `<ins>`, `<q>`, `<samp>`
- Adjust padding of `<dialog>`
- Add shadow under `<dialog>` & `popover`
- Adjust style of `<mark>` in dark theme
- Have `<figure>` work with `<embed>` & `<picture>`
- Update logo

## v4.3.2

- Fix max width of `<dialog>`

## v4.3.1

- Fix styling in `<dialog><menu>`

## v4.3.0

- Rename `--dress-ac` variable to `--dress-ax`
- Fix block gap in in horizontal `<menu>`

## v4.2.0

- Add focus ring on `<img>` in links

## v4.1.1

- Added `--dress-mw-f` custom property (max-width fallback)
- Fixed `.cm-editor` max-width in Playground
- Animated Playground style changes
- Moved `body > main` from `_blocks` to `_sections`

## v4.1.0

- Adjusted `<body>` width and padding

  - Fixed "springing" issue on macOS Safari
  - Updated padding for consistency with inline elements

## v4.0.1

- Centered `<main>` in `vertical-rl` layout

## v4.0.0

- Added print borders on `<header>` and `<footer>`
- Removed backgrounds in print
- Increased contrast for print
- Added `--dress-mw-min` for minimum body width
- Moved `<select>` chevrons to right in RTL
- Updated skipnav
- Used `--dress-bg` for background
- Disabled transition
- Used `block` & `inline` props in `_forms` and `_links`

## v3.6.0

- Added `text-size-adjust`

## v3.5.1

- Increased contrast for `--dress-bg-3`
- Set `aria-hidden="true"` on heading anchor links

## v3.5.0

- Added heading anchor links on docs
- Subtle transitions (likely affects links, buttons)

## v3.4.1

- Added icon in CSS banner
- Added banner comment in `dress.css`

## v3.4.0

- New "Properties" section in Elements
- Moved attribute styles to `_props.sass`
- Added styles for `[inert]` and `<abbr>`
- Used `:focus-visible` to suppress focus ring for mouse users
- Added:
  - `--dress-so` (scroll offset)
  - `scroll-margin-block-start` on headings
  - `scroll-padding-top` → `scroll-padding-block-start`
- Style for `[hidden]`
- Style for `<dialog>`

## v3.3.0 / v3.3.1

- Adjusted print styles
- Improved font size var breakdown
- Styled `<a download>`, `<menu>` in `<form>`, `<fieldset>`
- Fixed `first-child` margin leak in header/footer

## v3.2.1

- Removed unused `--dress-border-bottom`

## v3.2.0

- Updated markup for skipnav
- Centered top page headings
- Full-height `<body>` layout with `<main>`

## v3.1.3

- Renamed animation: `sc-target-fade` → `dress-target-fade`

## v3.1.1 / v3.1.2

- Fixed missing variable
- Adjusted form layout spacing using `gap` vars
- Switched inline spacing units to `rem` from `rch`

## v3.0.0

- Switched to `rch`/`rlh` units for inline spacing
- Renamed margin vars to logical props:
  ```scss
  --dress-m-t → --dress-m-bs
  --dress-m-b → --dress-m-be
  --dress-m-v → --dress-m-b
  ```
- Renamed `--dc-*` vars (from `--sc-*`)

## v2.0.0

- Renamed package to `@remino/dress.css`
- Project renamed from `sem.css` to `dress.css`
- Renamed dist files, favicon, logo

## v1.2.4

- Added block margin to `<object>` and `<svg>`

## v1.2.3

- Merged playground previews
- Adjusted `<select>` padding
- Added copy buttons on code blocks

## v1.2.2 / v1.2.1 / v1.2.0

- Improved focus rings
- Styled labels with disabled inputs
- Styled checkboxes and radios

## v1.1.0

- Made default font size slightly flexible

## v1.0.0

- CSP-compatible external JS
- Disabled demo links

## v0.10.x

- Added `color-scheme: light dark` to `:root`
- Prevented font resizing in iOS Safari
- Used `vi` instead of `vw`
- Favoured inline/block sizes over width/height
- Full-width `<body>` with max constraint

## v0.9.x

- `<video>` support
- Styling for `<aside>` and `<figure>`
- Styled `<a download>`, adjusted `<pre>` line-height

## v0.8.0

- Styled multiple inputs in a single label
- Adjusted form control spacing

## v0.7.0 – v0.6.0

- Styled nested `<figure>` and `<aside>`

## v0.5.x

- Added smooth scrolling
- Styled `:target` on headings with fade effect
- Made tables scrollable
- Used variables to cancel margins

## v0.4.0

- Added syntax highlighting with Pastie theme

## v0.3.x

- Styled external links with icon
- Print tweaks for buttons, URLs

## v0.2.x

- Adjusted heading line-heights and metadata

## v0.1.x

- Initial project setup
- Styled basic elements (headings, links, forms)
- Added print styles, layout support
