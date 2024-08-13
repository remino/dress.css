# sem.css: Semantic Style

**Minimal class-less CSS for semantic HTML.**

[Site](https://remino.net/semcss/)
| [Code Repo](https://github.com/remino/semcss)
| [NPM Package](https://www.npmjs.com/package/semcss)

By Rémino Rem <https://remino.net/>

- [Just write HTML and make it look good](#just-write-html-and-make-it-look-good)
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

## Just write HTML and make it look good

Introducing **<mark>sem.css</mark>**, a minimalist class-less stylesheet that makes your pages look good only by writing HTML.

This simple stylesheet was born from three things:

- How the rendering of HTML without CSS hasn't changed much since the first Web browser in 1991.
- How common readers in some browsers (like the one in Safari) simplifies the styling the pages to focus on legibility.
- How writing CSS for simple pages is painful or at least time-consuming.

Much of this stylesheet was inspired from [_new.css_](https://newcss.net/), with a few changes to vertical rhythm and markup for button links, and no external fonts.

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
<link rel="stylesheet" href="https://unpkg.com/semcss/dist/sem.css">
```

### NPM

Install the package from NPM:

```bash
npm install semcss
```

Then the stylesheet file should be available at `node_modules/semcss/dist/sem.css`.

Use the file in your Sass files, or include it in your CSS, etc.

### Download

Download the `sem.css` file from the [GitHub releases](https://github.com/remino/semcss/releases).

---

## Usage

To know which HTML tags are handled by this stylesheet with some suggested markup, see _[Elements](https://remino.net/semcss/elements/)_.

[Back to top](#)

---

## Browser Support

The **<mark>sem.css</mark>** stylesheet was checked with [`doiuse`](https://www.npmjs.com/package/doiuse):

```
❯ doiuse -b 'defaults' -v dist/sem.css
[doiuse] Browsers: Firefox 129, Firefox 128, Chrome for Android 127, Firefox for Android 127, Android Browser 127, Chrome 127, Edge 127, Firefox 127, Chrome 126, Edge 126, Chrome 125, Firefox 115, Opera 111, Opera 110, Chrome 109, Opera Mobile 80, Samsung Internet 25, Samsung Internet 24, Safari on iOS 17, Safari on iOS 17, Safari 17, Safari 17, Safari on iOS 16, UC Browser for Android 15, Safari on iOS 15, QQ Browser 14, KaiOS Browser 3, KaiOS Browser 2, Opera Mini NaN
```

While **<mark>sem.css</mark>** should work in the latest version of major browsers, it seems to have issues in some less-popular mobile versions, like Opera Mini.

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

Distributed under the ISC License. See _[License](https://remino.net/semcss/license/)_.

[Back to top](#)

