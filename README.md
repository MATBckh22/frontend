# frontend

## HTML

- Hyper Text Markup Language (HTML)
- series of elements to form the basic structure of a web page
    - elements tell the browser how to display content

```html
The <!DOCTYPE html> declaration defines that this document is an HTML5 document
The <html> element is the root element of an HTML page
The <head> element contains meta information about the HTML page
The <title> element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)
The <body> element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.
The <h1> element defines a large heading
The <p> element defines a paragraph
```

### Elements with Attributes

- all html elements can have attributes
    - provide additional info about elements
- always specified in the start tag
- usually come in name/value pairs like `name=value`

**The href Attribute**

```html
<a href="link.com">hyperlink text</a>
```

**The src Attribute**

```html
<img src="something.jpg">
```

For links in `src`, we can have:
- absolute URL
    - links to an image that are hosted on another website
- relative URL
    - links to an image that is hosted within the website (URL doesn't contain the domain name)
    - begins with a slash: `"src=/images/something.jpg"`
    - recommended to use since we cannot control external images, they may be changed or removed

**Width and Height Attributes**

`<img>` tag should also contain `height` and `width` attributes:

```html
<img src="something.jpg" width="500" height="600">
```

**The alt Attribute**

`alt` specifies an alternate text for the image if the image cannot be displayed due to some error

```html
<img src="something.jpg" alt="some problem with the rendering of the image">
```

### Block and Inline Tags

- Inline elements
    - doesn't start on new line
    - take only the necessary width
    - `<span>`, `<img>`, `<a>`
- Block elements
    - start on a new line
    - take the full width available
    - `<div>`, `<h1>` - `<h6>`, `<p>`, `<form>`

### About Headings

We define headings through `<h1>` to `<h6>` depending on the importance. Browsers automatically add some white space (a margin) before and after a heading.

- search engines use headings to index the structure and content of web pages
- often skim a page by its headings to show the document structure like how we do in markdown
- use HTML headings for headings only, do not use them solely for the purpose of making text bold or big

To override heading sizes, we can do:

```html
<h1 style="font-size:60px;">Heading 1</h1>
```

### Paragraphs - Display, Breakage and Rules

### Formatting Elements

```html
<b> - Bold text
<strong> - Important text
<i> - Italic text
<em> - Emphasized text
<mark> - Marked text
<small> - Smaller text
<del> - Deleted text
<ins> - Inserted text
<sub> - Subscript text
<sup> - Superscript text
```

### Semantic Tags

![semantic tags](https://www.w3schools.com/html/img_sem_elements.gif)

### `id` vs `class`

A general practice for `id` and `class` are:

- `id`
    - use for unique elements, set only one styling for one id
- `class`
    - can reuse classes to achieve consistent styling
    - particularly useful on `<div>`
    - recommended

## CSS

- Cascading Style Sheets (CSS)
- describes how HTML elements are to be displayed
- controls layout of multiple web pages all at once

3 Ways to add CSS:
- inline CSS
    - directly in the HTML elements
    - not recommended
    - not scalable
- internal CSS
    - using `<style>` tags within a single document
    - not recommended
    - limited to one html file
- external CSS
    - linking an external `.css` file
    - recommended approach

### CSS Box Model

![CSS Box Model](https://www.simplilearn.com/ice9/free_resources_article_thumb/CSS-Box-Model.png)

- padding (inner spacing)
    - spacing between content and border
- border
    - set width
- margin (outer spacing)
    - spacing outside from the border

### Positioning in CSS

- static
    - default
    - renders in order of the document flow
- relative
    - element positioned relative to it's normal position
    - falls naturally but can add properties
    - modifiable
- absolute
    - targets positioning inside of a relative element
- fixed
    - always be in the same position
- initial
    - sets the property to the default value
- inherit
    - inherit whatever property of it's parent element

## Flexbox CSS

CSS3 layout mode that is easy and clean to arrange items within a container

- no floats
- responsive and mobile friendly
- easy to position child elements
- flex container's margins do not collapse with the margins of its contents
- order of elements can easily be changed without editing the source HTML

### Flexible Box Model Concept

- ability to alter item width and height to best fit in its containers
- direction-agnostic
    - works well for both horizontal and vertical bias
- built for small-scale layouts
    - grids for more large scale

![css flexbox](https://miro.medium.com/v2/resize:fit:1400/0*YeaUsQyhXSL1TCTH.png)


### CSS Grid

compared to CSS flexbox's column alignments, CSS grid aligns both rows and columns.

## Javascript

- high-level, interpreted
- conforms to ECMAScript specification
- multi-paradigm
- runs on client / browser as well as on the server (Node.js)
- **not statically typed**

[JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript)

### Globally Using `name` is Deprecated

[reference](https://stackoverflow.com/questions/65379554/why-does-my-name-variable-show-its-deprecated)

For browsers, global `name` variable has a special meaning. It is fine to use it in a function, but avoid declaring or using it globally.

```js
(function()){
    let name = 'Mark';
    name = 5; // this is fine
    console.log(name); 
}

let name = 'Mark';
name = 5;
console.log(name);
```

### JS `typeof null` Returns `object`

[reference](https://stackoverflow.com/questions/18808226/why-is-typeof-null-object)

[explanation from MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null)

```js
const x = null;
console.log(typeof x)
typeof null === 'object';
```

When JS is first implemented, values had a type tag and value representation. Objects had a type tag of 0. `null` also had 0 as its type tag, which explains why it returns `object`.