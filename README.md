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

We define headings through `<h1>` to `<h6> depending on the importance. Browsers automatically add some white space (a margin) before and after a heading.

- search engines use headings to index the structure and content of web pages
- often skim a page by its headings to show the document structure like how we do in markdown
- use HTML headings for headings only, do not use them solely for the purpose of making text bold or big

To override heading sizes, we can do:

```html
<h1 style="font-size:60px;">Heading 1</h1>
```

### Paragraphs - Display, Breakage and Rules

### Formatting Elements

- <b> - Bold text
- <strong> - Important text
- <i> - Italic text
- <em> - Emphasized text
- <mark> - Marked text
- <small> - Smaller text
- <del> - Deleted text
- <ins> - Inserted text
- <sub> - Subscript text
- <sup> - Superscript text

### Lists