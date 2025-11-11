---
layout: ../../layouts/PageLayout.astro
title: Elements
description: Examples of HTML elements styled by dress.css.
---

# Elements

Below are all the tags style by **<mark>dress.css</mark>** along with markup samples.

For legibility, the docs site highlights code blocks with Prism using bespoke light (Pastie) and dark (Dracula) themes. This syntax highlighting is limited to the documentation and is not bundled with `dress.css`.

## Table of Contents

## Text {#text}

### Headings `<h1>…<h6>` {#headings}

<blockquote>
<h1>Heading 1 <code>&lt;h1&gt;</code></h1>
<h2>Heading 2 <code>&lt;h2&gt;</code></h2>
<h3>Heading 3 <code>&lt;h3&gt;</code></h3>
<h4>Heading 4 <code>&lt;h4&gt;</code></h4>
<h5>Heading 5 <code>&lt;h5&gt;</code></h5>
<h6>Heading 6 <code>&lt;h6&gt;</code></h6>
</blockquote>

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

### Abbreviation `<abbr>` {#abbr}

<abbr title="little black dress">LBD</abbr>

```html
<abbr title="little black dress">LBD</abbr>
```

### Mark Text (Highlighted Text) `<mark>` {#mark}

<mark>highlighted text</mark>
<mark><a href="#" data-disabled>highlighted text with link</a></mark>

```html
<mark>highlighted text</mark>
<mark><a href="#main">highlighted text with link</a></mark>
```

### Inserted & Deleted Text `<ins>` `<del>` {#insdel}

<p>
  Our sale ends <del>Sunday</del> <ins>Monday</ins>.
</p>

```html
Our sale ends <del>Sunday</del> <ins>Monday</ins>.
```

<p><a href="#">Back to top</a></p>

---

## Links {#links}

### Hyperlink `<a>` {#hyperlink}

<a href="#disabled" data-disabled>Click me</a>

```html
<a href="https://example.com/">Click me</a>
```

### Button Link `<a role="button">` {#buttonlink}

<a role="button" href="#disabled" data-disabled>Sign Up</a>

```html
<a role="button" href="https://example.com/signup">Sign Up</a>
```

### Download Link `<a download>` {#download}

<a role="button" href="#disabled" download data-disabled>Download PDF</a>  
<a href="#disabled" download data-disabled>Save source</a>

```html
<a role="button" href="doc.pdf" download>Download PDF</a>
<a href="doc.md" download>Save source</a>
```

### New Window Link `<a target="_blank">` {#newwindow}

<a role="button" href="#disabled" data-disabled target="_blank">Shop Now</a>  
<a href="#disabled" data-disabled target="_blank">Submit Review</a>

```html
<a role="button" href="https://example.com/shop/" target="_blank">Shop Now</a>
<a href="https://example.com/review/" target="_blank">Submit Review</a>
```

**In links wrapping images** in a <code>&lt;figure&gt;</code>, the icon will not show.

🖨️ **In print,** the URL of the link will be displayed instead of the icon:

<blockquote>
Shop Now <small>&lt;https://example.com/shop/&gt;</small>
</blockquote>

### Skip Navigation ("skipnav") `<body><a href="#…">` {#skipnav}

For the accessibility of screen reader users, it's common to add a link at the very beginning of the page to skip the header and its menu, and go straight to the main content. It remains hidden until the user tabs to it, yet it is always visible to the screen reader.

When a link is the first child element of <code>&lt;body&gt;</code> and points to a section to the page other than <code>#</code>, it will be treated and rendered as such "skipnav" link.

<blockquote>
<a href="#main" data-disabled>Skip to main content</a>
</blockquote>

```html
<body>
	<!-- Skipnav link: first child of <body> and points to section on page. -->
	<a href="#main">Skip to main navigation</a>

	<header>
		<!-- Header & menu -->
	</header>
	<main id="main">
		<!-- Main content -->
	</main>
</body>
```

<p><a href="#">Back to top</a></p>

---

## Lists {#lists}

### Unordered List `<ul>` {#ul}

- Unordered list item 1
  - Nested unordered list item 1
  - Nested unordered list item 2
- Unordered list item 2
- Unordered list item 3

```html
<ul>
	<li>
		Unordered list item 1
		<ul>
			<li>Nested unordered list item 1</li>
			<li>Nested unordered list item 2</li>
		</ul>
	</li>
	<li>Unordered list item 2</li>
	<li>Unordered list item 3</li>
</ul>
```

### Ordered List `<ol>` {#ol}

1. Ordered list item 1
   1. Nested ordered list item 1
   2. Nested ordered list item 2
2. Ordered list item 2
3. Ordered list item 3

```html
<ol>
	<li>
		Ordered list item 1
		<ol>
			<li>Nested ordered list item 1</li>
			<li>Nested ordered list item 2</li>
		</ol>
	</li>
	<li>Ordered list item 2</li>
	<li>Ordered list item 3</li>
</ol>
```

### Menu List `<menu>` {#menu}

<menu>
	<li>Menu list item 1
		<ul>
			<li>Nested menu list item 1</li>
			<li>Nested menu list item 2</li>
		</ul>
	</li>
	<li>Menu list item 2</li>
	<li>Menu list item 3</li>
</menu>

```html
<menu>
	<li>
		Menu list item 1
		<ul>
			<li>Nested menu list item 1</li>
			<li>Nested menu list item 2</li>
		</ul>
	</li>
	<li>Menu list item 2</li>
	<li>Menu list item 3</li>
</menu>
```

### Description List `<dl>` {#dl}

Term 1
: Definition 1

Term 2
: Definition 2

Term 3
: Definition 3

```html
<dl>
	<dt>Term 1</dt>
	<dd>Definition 1</dd>
	<dt>Term 2</dt>
	<dd>Definition 2</dd>
	<dt>Term 3</dt>
	<dd>Definition 3</dd>
</dl>
```

<p><a href="#">Back to top</a></p>

---

## Quotes

### Inline Quotation `<q>` {#q}

<q>Tech is fine, but I’d rather talk about fashion.</q>

```html
<q>Tech is fine, but I’d rather talk about fashion.</q>
```

### Block Quotation `<blockquote>` {#blockquote}

<blockquote>
	“Simplicity is the keynote of all true elegance.”<br>
	&mdash; Coco Chanel
</blockquote>

```html
<blockquote>
	“Simplicity is the keynote of all true elegance.”<br>
	&mdash; Coco Chanel
</blockquote>
```

<p><a href="#">Back to top</a></p>

---

## Code {#code}

### Preformatted Text `<pre>` {#pre}

<pre>
C U B I C
U \     U \
B   C U B I C
I   U   I   U
C U B I C   B
  \ I     \ I
    C U B I C
</pre>

```html
<pre>
C U B I C
U \     U \
B   C U B I C
I   U   I   U
C U B I C   B
  \ I     \ I
    C U B I C
</pre>
```

### Code Block `<pre><code>` {#precode}

Many libraries, including code highlighters, use the <code>&lt;code&gt;</code> tag nested in a <code>&lt;pre&gt;</code> tag to display code blocks.

```html
alert('Hello World!');
```

```html
<pre><code>
alert('Hello World!');
</code></pre>
```

### Inline Code `<code>` {#inlinecode}

<code>echo hello</code>

```html
<code>echo hello</code>
```

### Keyboard Input `<kbd>` {#kbd}

<kbd>Ctrl+C</kbd>

```html
<kbd>Ctrl+C</kbd>
```

### Sample Output `<samp>` {#samp}

<samp>Press F1 to continue</samp>

```html
<samp>Press F1 to continue</samp>
```

<p><a href="#">Back to top</a></p>

---

## Embeds (Media) {#embeds}

### Single Figure `<figure>` {#figure}

A <code>&lt;figure&gt;</code> will display embedded content, including <code>&lt;img&gt;</code>, <code>&lt;picture&gt;</code>, <code>&lt;svg&gt;</code>, <code>&lt;video&gt;</code>, <code>&lt;object&gt;</code>, and <code>&lt;embed&gt;</code> as a block.

Those elements are not shown as blocks outside of a <code>&lt;figure&gt;</code>, as there are cases when embedded content is meant to be inlined.

<figure>
<a href="https://en.wikipedia.org/wiki/Triangle" target="_blank"><img src="/dress.css/triangles.svg" alt="Triangles illustration" /></a>
<figcaption>A display of colourful triangles. (Click for more about triangles.)</figcaption>
</figure>

```html
<figure>
	<a href="https://en.wikipedia.org/wiki/Triangle" target="_blank">
		<img src="triangles.svg">
	</a>
	<figcaption>
		A display of colourful triangles. (Click for more about triangles.)
	</figcaption>
</figure>
```

### Nested Figures `<figure><figure>` {#nestedfigures}

Ideal for displaying multiple images side by side, or to enlarge a single figure. Collapsed into a single column on narrow displays. Formatted automatically when a single set of figures are nested into another. When only one figure is nested, it will be displayed wider than a normal figure.

<figure>
<figure>
<img src="data:image/svg+xml;charset=utf-8,<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 600 200&quot;><rect x=&quot;0&quot; y=&quot;0&quot; width=&quot;600&quot; height=&quot;200&quot; fill=&quot;hsl(300 100.0% 50.0%)&quot;/></svg>" alt="Wide Fuschia" />
<figcaption>Wide Fuschia</figcaption>
</figure>
</figure>

<figure>
<figure>
<img src="data:image/svg+xml;charset=utf-8,<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 100 50&quot;><rect x=&quot;0&quot; y=&quot;0&quot; width=&quot;100&quot; height=&quot;50&quot; fill=&quot;hsl(212 100% 44%)&quot;/></svg>" alt="Blue" />
<figcaption>Blue</figcaption>
</figure>
<figure>
<img src="data:image/svg+xml;charset=utf-8,<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 100 50&quot;><rect x=&quot;0&quot; y=&quot;0&quot; width=&quot;100&quot; height=&quot;50&quot; fill=&quot;hsl(320 100% 64%)&quot;/></svg>" alt="Pink" />
<figcaption>Pink</figcaption>
</figure>
<figure>
<img src="data:image/svg+xml;charset=utf-8,<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 100 50&quot;><rect x=&quot;0&quot; y=&quot;0&quot; width=&quot;100&quot; height=&quot;50&quot; fill=&quot;hsl(270 100% 64%)&quot;/></svg>" alt="Purple" />
<figcaption>Purple</figcaption>
</figure>
<figcaption>A set of electric colours.</figcaption>
</figure>

```html
<figure>
	<figure>
		<img src="fuchsia.svg">
		<figcaption>Wide Fuchsia</figcaption>
	</figure>
</figure>

<figure>
	<figure>
		<img src="blue.svg">
		<figcaption>Blue</figcaption>
	</figure>
	<figure>
		<img src="pink.svg">
		<figcaption>Pink</figcaption>
	</figure>
	<figure>
		<img src="purple.svg">
		<figcaption>Purple</figcaption>
	</figure>
	<figcaption>A set of electric colours.</figcaption>
</figure>
```

### Video `<video>` {#video}

Videos may be embedded on their own, or in a <code>&lt;figure&gt;</code>.

<video controls src="/bits/retrosurfing/browsing.hevc.mp4" poster="/bits/retrosurfing/browsing.avif">
<source src="/bits/retrosurfing/browsing.hevc.mp4" type="video/mp4; codecs=hvc1">
<source src="/bits/retrosurfing/browsing.h264.mp4" type="video/mp4">
</video>

```html
<video controls src="video.mp4"></video>
```

Video above is from [_Retrosurfing_](https://remino.net/bits/retrosurfing/).

### Inline Frame `<iframe>` {#iframe}

Unless the <code>width</code> is set on an <code>&lt;iframe&gt;</code>, it will default to take the whole width of the <code>&lt;body&gt;</code>.

<iframe
  srcdoc="
    <style>
      body {
        align-items: center;
        background: pink;
        display: flex;
        font-size: 5rem;
        height: 100vh;
        justify-content: center;
        margin: 0;
      }
    </style>
    👗
  "
  height="200"
	width="400"
></iframe>

```html
<iframe src="dress.html" height="200" width="400">Dress</iframe>
```

<p><a href="#">Back to top</a></p>

---

## Blocks

### Thematic Break (Horizontal Rule) `<hr>` {#hr}

<figure>
<hr>
</figure>

```html
<hr>
```

### Table `<table>` {#table}

<table>
	<caption>Table Caption</caption>
	<thead>
		<tr>
			<th>Header 1</th>
			<th>Header 2</th>
			<th>Header 3</th>
			<th>Header 4</th>
		</tr>
	</thead>
	<tfoot>
		<tr>
			<th>Footer 1</th>
			<th>Footer 2</th>
			<th>Footer 3</th>
			<th>Footer 4</th>
		</tr>
	</tfoot>
	<tbody>
		<tr>
			<td>Data 1</td>
			<td>Data 2</td>
			<td>Data 3</td>
			<td>Data 4</td>
		</tr>
		<tr>
			<td>Data 5</td>
			<td>Data 6</td>
			<td>Data 7</td>
			<td>Data 8</td>
		</tr>
		<tr>
			<td>Data 9</td>
			<td>Data 10</td>
			<td>Data 11</td>
			<td>Data 12</td>
		</tr>
	</tbody>
</table>

```html
<table>
	<caption>
		Table Caption
	</caption>
	<thead>
		<tr>
			<th>Header 1</th>
			<th>Header 2</th>
			<th>Header 3</th>
			<th>Header 4</th>
		</tr>
	</thead>
	<tfoot>
		<tr>
			<th>Footer 1</th>
			<th>Footer 2</th>
			<th>Footer 3</th>
			<th>Footer 4</th>
		</tr>
	</tfoot>
	<tbody>
		<tr>
			<td>Data 1</td>
			<td>Data 2</td>
			<td>Data 3</td>
			<td>Data 4</td>
		</tr>
		<tr>
			<td>Data 5</td>
			<td>Data 6</td>
			<td>Data 7</td>
			<td>Data 8</td>
		</tr>
		<tr>
			<td>Data 9</td>
			<td>Data 10</td>
			<td>Data 11</td>
			<td>Data 12</td>
		</tr>
	</tbody>
</table>
```

### Details Disclosure `<details>` {#details}

<details>
	<summary>Click to show details</summary>
	<p>Here are all the details!</p>
</details>

```html
<details>
	<summary>Click to show details</summary>
	<p>Here are all the details!</p>
</details>
```

<p><a href="#">Back to top</a></p>

---

## Popups {#popups}

### Dialog `<dialog>` {#dialog}

Styling is applied to the <code>&lt;dialog&gt;</code> and its backdrop.

Additionally, formatting is applied to a <code>&lt;menu&gt;</code> of actions in a <code>&lt;form&gt;</code> when formatted as the code sample below.

<button id="dialogOpen">Open Dialog</button>

<dialog id="dialogExample">
	<form method="dialog">
		<p><strong>Hello!</strong> This is a native dialog.</p>
		<menu>
			<li><button value="cancel" autofocus>Cancel</button></li>
			<li><button type="submit" value="ok">OK</button></li>
		</menu>
	</form>
</dialog>

```html
<button onclick="document.getElementById('dialogExample').showModal()">
	Open Dialog
</button>

<dialog id="dialogExample">
	<form method="dialog">
		<p><strong>Hello!</strong> This is a native dialog.</p>
		<menu>
			<li><button value="cancel" autofocus>Cancel</button></li>
			<li><button type="submit" value="ok">OK</button></li>
		</menu>
	</form>
</dialog>
```

### Popover `popover` {#popover}

<button popovertarget="detailsPopover">Show Popover</button>

<div popover id="detailsPopover">
  <p><strong>Hello!</strong> This is a popover.</p>
</div>

```html
<button popovertarget="detailsPopover">Show Popover</button>

<div popover id="detailsPopover">
	<p><strong>Hello!</strong> This is a popover.</p>
</div>
```

<p><a href="#">Back to top</a></p>

---

## Page Sections {#sections}

In **<mark>dress.css</mark>**, some special formatting is used in the header and the footer of the page to ease navigation and readability. Menus (<code>&lt;menu&gt;</code>) as well as unordered lists (<code>&lt;ul&gt;</code>) in navigation (<code>&lt;nav&gt;</code>) are rendered horizontally.

### Header `<header>`

Some special styling is applied to the <code>&lt;header&gt;</code> tag. That can be seen at the [top of this page](#) and can be replicated with the sample below:

```html
<header>
	<h1>Header</h1>
	<nav>
		<ul>
			<li><a href="#header">Header</a></li>
			<li><a href="#footer">Footer</a></li>
		</ul>
	</nav>
	<menu>
		<li>
			<button onclick="document.documentElement.classList.toggle('dark')">
				Toggle theme
			</button>
		</li>
		<li>
			<button onclick="document.getElementById('settings').openModal()">
				Settings
			</button>
		</li>
	</menu>
</header>
```

### Footer `<footer>`

Like the <code>&lt;header&gt;</code> tag, some special formatting is applied to <code>&lt;footer&gt;</code>. That can also been seen at the [bottom of this page](#end) and can be replicated with the sample below:

```html
<footer>
	<p>&copy; 2024</p>
	<nav>
		<ul>
			<li><a href="#terms">Terms of Use</a></li>
			<li><a href="#privacy">Privacy Policy</a></li>
		</ul>
	</nav>
	<menu>
		<li><button onclick="window.print()">Print</button></li>
		<li><button onclick="prompt('Copy URL:', location.href)">Share</button></li>
	</menu>
</footer>
```

### Aside `<aside>` {#aside}

<aside>
<h4>Side Notes</h4>
<p>This information is related to the main content, but not essential.</p>
</aside>

```html
<aside>
	<h4>Side Notes</h4>
	<p>This information is related to the main content, but not essential.</p>
</aside>
```

**Note:** Heading hierarchy isn't meant to be reset in sectioning elements such as <code>&lt;aside&gt;</code> and <code>&lt;section&gt;</code>. Doing so is considered non-comforing. See [_HTML Living Standard_ §4.3.11](https://html.spec.whatwg.org/multipage/sections.html#headings-and-outlines).

### Navigation Section `<nav>` {#nav}

There is no styling on screen applied on <code>&lt;nav&gt;</code>.

```html
<nav>
	<a href="#">Back to top</a>
</nav>
```

🖨️ **In print**, however, some style is applied to reduce clutter on the page:

- When used in <code>&lt;header&gt;</code> or <code>&lt;footer&gt;</code>, their <code>&lt;menu&gt;</code> is invisible.
- They are invisible when they only contain a link to a page's anchor.

```html
<header>
	<nav>
		<!--
			This <menu> will be invisible in print
			because it is in a <nav> in a header or footer.
		-->
		<menu>
			<li><a href="/">Home</a></li>
		</menu>
	</nav>
</header>

<!--
	This <nav> will be invisible in print
	because it only has an anchor link.
-->
<nav>
	<a href="#example">Example section</a>
</nav>
```

### Main `<main>` {#main-section}

There is no visual styling applied on <code>&lt;main&gt;</code> itself.

However, when <code>&lt;body&gt;</code> has a <code>&lt;main&gt;</code>, the body of the page will be rendered using a flex layout and expand to take the whole height of the viewport. This sets the header at the top of the page, the footer at the bottom, and centres <code>&lt;main&gt;</code> and its content, when the content of the body is shorter than the viewport of the browser.

This is ideal for pages with little content that needs to fill up the whole height of the browser's window.

```html
<body>
	<header><!-- ... --></header>
	<main><!-- ... --></main>
	<footer><!-- ... --></footer>
</aside>
```

🖨️ **In print,** the layout of <code>&lt;body&gt;</code> remains unaffected.

<p><a href="#">Back to top</a></p>

---

## Form `<form>` {#form}

There is some styling for forms in **<mark>dress.css</mark>** for the most common controls. It works best with the suggested markup below, wrapping every input field into a <code>&lt;label&gt;</code> for better usability. However, forms are notorious for how finicky they are with styling, accessibility, and inconsistencies between browsers. For anything more complex, as this stylesheet is basic, you may need to look for a different styling system better suited for your needs.

### Text Input `<input>` {#input}

Works with basic “textual” input fields including the following:

- <code>text</code> (the default type)
- <code>email</code>
- <code>number</code>
- <code>password</code>
- <code>search</code>
- <code>tel</code>
- <code>url</code>

<nav>
	<form data-nosubmit method="post">
		<label>
			<span>Search</span>
			<input type="search">
		</label>
	</form>
</nav>
<form data-nosubmit method="post">
	<label>
		<span>Username</span>
		<input>
		<small>Can also be your email address or phone number.</small>
	</label>
	<label>
		<span>Password</span>
		<input type="password">
	</label>
</form>

```html
<nav>
	<form method="post">
		<label>
			<span>Search</span>
			<input type="search">
		</label>
	</form>
</nav>
<form method="post">
	<label>
		<span>Username</span>
		<input>
		<small>Can also be your email address or phone number.</small>
	</label>
	<label>
		<span>Password</span>
		<input type="password">
	</label>
</form>
```

### Date & Time Input {#datetime}

Basic styling is applied to date and time inputs for consistency.

<form data-nosubmit method="post">
<label><span><code>time</code></span><input type="time"></label>
<label><span><code>date</code></span><input type="date"></label>
<label><span><code>datetime-local</code></span><input type="datetime-local"></label>
<label><span><code>month</code></span><input type="month"></label>
<label><span><code>week</code></span><input type="week"></label>
</form>

```html
<label>
	<span><code>time</code></span>
	<input type="time">
</label>
<label>
	<span><code>date</code></span>
	<input type="date">
</label>
<label>
	<span><code>datetime-local</code></span>
	<input type="datetime-local">
</label>
<label>
	<span><code>month</code></span>
	<input type="month">
</label>
<label>
	<span><code>week</code></span>
	<input type="week">
</label>
```

### Textarea `<textarea>` {#textarea}

<form data-nosubmit method="post">
	<label>
		<span>Message</span>
		<textarea rows="4"></textarea>
	</label>
</form>

```html
<label>
	<span>Message</span>
	<textarea rows="4"></textarea>
</label>
```

### Select `<select>` {#select}

<form data-nosubmit method="post">
	<label>
		<span>Choose one</span>
		<select>
			<option>Option A</option>
			<option>Option B</option>
		</select>
	</label>
</form>

```html
<label>
	<span>Choose one</span>
	<select>
		<option>Option A</option>
		<option>Option B</option>
	</select>
</label>
```

### Checkbox `<input type="checkbox">` {#checkbox}

<form data-nosubmit method="post">
	<label>
		<input type="checkbox" name="agree" value="1">
		<span>I agree</span>
	</label>
</form>

```html
<label>
	<input type="checkbox" name="agree" value="1">
	<span>I agree</span>
</label>
```

### Radio `<input type="radio">` {#radio}

<form data-nosubmit method="post">
	<label>
		<input type="radio" name="be" value="1">
		<span>To be</span>
	</label>
	<label>
		<input type="radio" name="be" value="0">
		<span>Not to be</span>
	</label>
</form>

```html
<label>
	<input type="radio" name="be" value="1">
	<span>To be</span>
</label>
<label>
	<input type="radio" name="be" value="0">
	<span>Not to be</span>
</label>
```

### File Selection `<input type="file">` {#file}

<form data-nosubmit method="post">
	<label>
		<span>Select profile avatar</span>
		<input type="file" name="avatar" />
	</label>
</form>

```html
<label>
	<span>Select profile avatar</span>
	<input type="file" name="avatar">
</label>
```

### Colour `<input type="color">` {#color}

<form data-nosubmit method="post">
	<label>
		<span>Favourite colour</span>
		<input type="color" name="color" value="#d53bb8" />
	</label>
</form>

```html
<label>
	<span>Favourite colour</span>
	<input type="color" name="color" value="#d53bb8">
</label>
```

### Range `<input type="range">` {#range}

<form data-nosubmit method="post">
	<label>
		<span>Volume</span>
		<input type="range" name="volume" min="0" max="11" step="1" value="9" />
	</label>
</form>

```html
<label>
	<span>Volume</span>
	<input type="range" name="volume" min="0" max="11" step="1" value="9">
</label>
```

### Composite Inputs {#composite}

Labels may also contain multiple fields. Clicking on the label will focus on its first input field. However, note this is not valid HTML5 and may present accessibility issues. Use with caution. You may consider using multiple fields in a <code>&lt;fieldset&gt;</code> instead.

<form data-nosubmit method="post">
	<label>
		<span>Full Name</span>
		<input placeholder="Given Name">
		<input placeholder="Family Name">
	</label>
</form>

```html
<label>
	<span>Full Name</span>
	<input placeholder="Given Name">
	<input placeholder="Family Name">
</label>
```

### Field Set `<fieldset>` {#fieldset}

<form data-nosubmit method="post">
	<fieldset>
		<legend>Skills</legend>
		<label>
			<input type="checkbox" name="skills" value="html">
			<span>HTML</span>
		</label>
		<label>
			<input type="checkbox" name="skills" value="css">
			<span>CSS</span>
		</label>
	</fieldset>
</form>

```html
<fieldset>
	<legend>Skills</legend>
	<label>
		<input type="checkbox" name="skills" value="html">
		<span>HTML</span>
	</label>
	<label>
		<input type="checkbox" name="skills" value="css">
		<span>CSS</span>
	</label>
</fieldset>
```

### Output `<output>` {#output}

Styling on <code>&lt;output&gt;</code> is made to match the same height than an usual <code>&lt;input&gt;</code> field for consistency.

<blockquote>
	<output>42</output>
</blockquote>

```html
<output>42</output>
```

### Progress Indicator `<progress>` {#progress}

<form data-nosubmit method="post">
	<label>
		<span>Uploading…</span>
		<progress max="100" value="75"></progress>
	</label>
</form>

```html
<label>
	<span>Uploading…</span>
	<progress max="100" value="75"></progress>
</label>
```

### Meter `<meter>` {#meter}

The <code>&lt;meter&gt;</code> value switches between the semantic palette using <code>--dress-low</code>, <code>--dress-mid</code>, and <code>--dress-hi</code> depending on the value.

<meter min="0" max="100" low="20" high="60" optimum="80" value="0">0%</meter>
<meter min="0" max="100" low="20" high="60" optimum="80" value="10">10%</meter>
<meter min="0" max="100" low="20" high="60" optimum="80" value="30">30%</meter>
<meter min="0" max="100" low="20" high="60" optimum="80" value="70">70%</meter>
<meter min="0" max="100" low="20" high="60" optimum="80" value="90">90%</meter>
<meter min="0" max="100" low="20" high="60" optimum="80" value="100">100%</meter>

<!-- prettier-ignore -->
```html
<meter min="0" max="100" low="20" high="60" optimum="80" value="0">0%</meter>
<meter min="0" max="100" low="20" high="60" optimum="80" value="10">10%</meter>
<meter min="0" max="100" low="20" high="60" optimum="80" value="30">30%</meter>
<meter min="0" max="100" low="20" high="60" optimum="80" value="70">70%</meter>
<meter min="0" max="100" low="20" high="60" optimum="80" value="90">90%</meter>
<meter min="0" max="100" low="20" high="60" optimum="80" value="100">100%</meter>
```

### Buttons {#buttons}

Including <code>&lt;button&gt;</code> as well as <code>&lt;input&gt;</code> with <code>type=&quot;button&quot;</code>, <code>type=&quot;reset&quot;</code>, and <code>type=&quot;submit&quot;</code>.

<form data-nosubmit method="post">
	<input type="reset" value="Reset">
	<button disabled>Disabled</button>
	<button type="submit">Submit</button>
</form>

```html
<input type="reset" value="Reset">
<button disabled>Disabled</button>
<button type="submit">Submit</button>
```

### Button Set `<menu><button>` {#buttonset}

Using <code>&lt;menu&gt;</code> as a direct descendant of a <code>&lt;form&gt;</code> or <code>&lt;fieldset&gt;</code> is assumed to be meant for a toolbar with a set of action buttons and is formatted as such.

<form data-nosubmit method="post">
	<menu>
		<li><button>Preview</button></li>
		<li><button type="submit">Save</button></li>
	</menu>
</form>

```html
<form>
	<menu>
		<li><button>Preview</button></li>
		<li><button type="submit">Save</button></li>
	</menu>
</form>
```

<p><a href="#">Back to top</a></p>

---

## Properties {#properties}

### Inert `inert` {#inert}

Any element with the <code>inert</code> Boolean attribute will have its content appear faded.

<nav inert><a href="javascript:history.go(-1)">Go Back</a></nav>

```html
<nav inert><a href="javascript:history.go(-1)">Go Back</a></nav>
```

<p><a href="#">Back to top</a></p>

### Hidden `hidden` {#hidden}

Hide any element by adding a <code>hidden</code> Boolean attribute.

This is standard in modern HTML. However, for consistency across browsers, this stylesheet is also handling the attribute on its own.

```html
<p hidden>You can't see me!</p>
```

<p><a href="#">Back to top</a></p>
