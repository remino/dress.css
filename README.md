![](dress.svg)

# dress.css

The little black dress of CSS.

[Site](https://remino.net/dress.css/)
| [Code Repo](https://github.com/remino/dress.css)
| [NPM Package](https://www.npmjs.com/package/@remino/dress.css)

By Rémino Rem <https://remino.net/>

- [Minimal style for semantic HTML](#minimal-style-for-semantic-html)
- [Features](#features)
- [Installation](#installation)
	- [HTML](#html)
	- [NPM](#npm)
	- [Download](#download)
- [Usage](#usage)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)

---

## Minimal style for semantic HTML

Introducing **<mark>dress.css</mark>**, a minimalist class-less stylesheet that makes your pages look good only by writing HTML.

This simple stylesheet was born from three things:

- How the rendering of HTML without CSS hasn't changed much since the first Web browser in 1991.
- How common readers in some browsers (like the one in Safari) simplifies the styling the pages to focus on legibility.
- How writing CSS for simple pages is painful or at least time-consuming.

Much of this stylesheet was inspired from [_new.css_](https://newcss.net/), with a few changes to vertical rhythm and markup for button links, and no external fonts.

This stylesheet was formerly known as **sem.css** in version 1.2.4, and renamed as **dress.css** in version 2.0.0.

[Back to top](#)

---

## Features

- **Small**: Around 3 KiB, gzipped.
- **Class-less**: No need to add classes to your HTML elements.
- **Modern**: Uses CSS variables, viewport sizes, and flexbox.
- **Readable**: Focus on the content, not the style.
- **Responsive**: Uses relative units, works well on all screen sizes.
- **Accessible**: Uses semantic HTML elements and ARIA roles.
- **Printable**: Looks good on paper. Shows external link URLs.
- **Localizable**: Works both with left-to-right and right-to-left languages.
- **Customizable**: Add your own styles on top of it, or add a theme by changing variables.

[Back to top](#)

---

## Installation

There are many ways to include this stylesheet in your code. Here are a few examples:

### HTML

Add the stylesheet to your HTML and write your content:

```html
<link rel="stylesheet" href="https://unpkg.com/@remino/dress.css/dist/dress.css">
```

### NPM

Install the package from NPM:

```bash
npm install dress.css
```

Then the stylesheet file should be available at `node_modules/dress.css/dist/dress.css`.

Use the file in your Sass files, or include it in your CSS, etc.

### Download

Download the `dress.css` file from the [GitHub releases](https://github.com/remino/dress.css/releases).

---

## Usage

To know which HTML tags are handled by this stylesheet with some suggested markup, see _[Elements](https://remino.net/dress.css/elements/)_.

[Back to top](#)

---

## Browser Support

The **<mark>dress.css</mark>** stylesheet was checked with [`doiuse`](https://www.npmjs.com/package/doiuse):

```
❯ doiuse -b 'defaults' -v dist/dress.css
[doiuse] Browsers: Firefox 129, Firefox 128, Chrome for Android 127, Firefox for Android 127, Android Browser 127, Chrome 127, Edge 127, Firefox 127, Chrome 126, Edge 126, Chrome 125, Firefox 115, Opera 111, Opera 110, Chrome 109, Opera Mobile 80, Samsung Internet 25, Samsung Internet 24, Safari on iOS 17, Safari on iOS 17, Safari 17, Safari 17, Safari on iOS 16, UC Browser for Android 15, Safari on iOS 15, QQ Browser 14, KaiOS Browser 3, KaiOS Browser 2, Opera Mini NaN
```

While **<mark>dress.css</mark>** should work in the latest version of major browsers, it seems to have issues in some less-popular mobile versions, like Opera Mini. This stylesheet is not meant for legacy support.

[Back to top](#)

---

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a pull request

[Back to top](#)

---

## License

Distributed under the ISC License. See _[License](https://remino.net/dress.css/license/)_.

[Back to top](#)

