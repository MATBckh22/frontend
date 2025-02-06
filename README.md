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

### Printing to Console

```js
console.log("hello world");
console.error("error");
console.warn("warning");
```

### Declaring and Initializing Variables

We use `let` and `const` to declare variables:
- `let`: allows changing values after initializtion
- `const`: doesn't allow variables to be reassigned, treat it as a constant

```js
// var (not recommended), let, const
let age = 30;
age = 31;
console.log(age);
```

### Primitives and `typeof`

```js
// String, Numbers, boolean, null, undefined, Symbol
const _name = "John"; // name as a global variable is deprecated, using it in functions is fine
const age2 = 30;
const isCool = false;
const rating = 4.5;
const x = null;
const y = undefined; // not initialized, only declared, same as let without assigning value

console.log(typeof _name, typeof rating);
console.log(typeof x);
```

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

### Basic String Operations

```js
// string operations
// concatenation
console.log("my name is " + _name);

// template strings (formatted)
const _string = `and my age is ${age}`;
console.log(`my name is ${_name}`, _string);

// string properties and methods
const s = "hello world";
console.log(s.length);
console.log(s.toUpperCase);
console.log(s.toUpperCase);
console.log(s.substring(0, 5));
console.log(s.split(' '));
```

### Arrays

```js
// arrays
const numbers = new Array(1,2,3,4,5);
console.log(numbers);
console.log(numbers[2]);

// we're using square brackets [] here instead of curly braces
// can put in multiple data types
const fruits = ['apples', 'oranges', 'pears'];

// merging arrays
const mixed = fruits.concat([10, 2.5, true]);
console.log(fruits);
console.log(mixed);

// array operations
fruits.push('grapes'); // push at the end of array
fruits.unshift('watermelons'); //push from the start of array
console.log(fruits);
fruits.pop(); // popping the top of the array
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('oranges'));
```

### Object Literals (Key-Value Pairs or Dictionaries)

```js
// object literals (key-value pairs or dictionaries)
person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'sports'],
    // allows nested object literals too
    address: {
        street: '25 main street',
        city: 'Kuala Lumpur',
        state: 'Selangor'
    }
}

console.log(person); // note that it prints properties in alphabetical order
console.log(person.lastName);
console.log(person.address.street);
console.log(person.hobbies[1]);
console.log(person.address.street.split(' '));

// directly adding properties into object literals
person.email = 'John@gmail.com';
```

### Destructuring

```js
// destructuring
const {firstName, lastName, address: { city }}  = person;
console.log(firstName);
```

### JavaScript Object Notation (JSON)

- lightweight data interchange format
    - language independent (text only format)
- *self-describing* and easy to understand

JSON is important for data transmission between server and client in web applications. Here's an example:

```js
const todos = [
    {
        id: 1,
        text: 'take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'dentist appointment',
        isCompleted: true
    }
];
```

We can use `JSON.stringify()` method to convert this to a JSON string:

```js
const todoJSON = JSON.stringify(todos); // converts to JSON string
console.log(todoJSON);
```

The output of this will be:

```json
[
   {
      "id": 1,
      "text": "take out trash",
      "isCompleted": true
   },
   {
      "id": 2,
      "text": "meeting with boss",
      "isCompleted": true
   },
   {
      "id": 3,
      "text": "dentist appointment",
      "isCompleted": true
   }
]
```

### For Loops and High Order Array Methods

Using our previous example of the `todos` object literal:

```js
// for loop
for (let i = 0; i < todos.length; i++){
    console.log(todos[i].text);
}

// for-of loop
for (let todo of todos){
    console.log(todo.text);
}

// high order array methods (recommended practice for iterating over arrays)
// forEach (takes in a function parameter)
todos.forEach(function(todo){
    console.log(todo.text);
});

// map
// returns a new array of text
const todoText = todos.map(function(todo){
    return todo.text;
});

console.log(todoText);

// filter
// returns a new array of text only when isCompleted is true
// really powerful method to essentially add a condition when grabbing text
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})

console.log(todoCompleted);
```

### Conditionals

We have to distinguish the difference between double equal sign `==` and triple equal sign `===`:
- `==`: only checks the value, ignore types
- `===`: checks both the type and value

```js
// conditionals
const x = '10';

// double equal sign checks the value
if (x == 10){
    console.log('x is 10');
}

// triple equal sign checks both the value and the data type
// mainly use this depending on preference
if (x === 10){
    console.log('x is 10');
}
else{
    console.log('x is not 10 or x is not of type number');
}
```

we can also use syntatic sugar through ternary operators:

```js
// conditionals using ternary operators (syntatic sugar)
const x = 11;
const color = x > 10 ? 'red' : 'blue';
console.log(color);
```

JS also supports switch cases:

```js
switch (color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
}
```

### Functions

```js
function addNums(num1, num2){
    console.log(num1 + num2);
}

function addNumsWithDefaultValues(num1 = 1, num2 = 1){
    return num1 + num2;
}

addNums(1, 2);
addNumsWithDefaultValues();
console.log(addNumsWithDefaultValues(3, 5)); // overrides the default parameters in the function
```

### Arrow Functions

Arrow functions are incredibly useful for functions that only have one line operations.

```js
// arrow functions
// declare using const and add equal sign = in between function name and parameters
// add fat arrow =>
const addNumsUsingArrowFunction = (num1, num2) => num1 + num2;
console.log(addNumsUsingArrowFunction(1, 1));
```

With this syntatic sugar, we can simplify high order array methods:

```js
// note that forEach is still just iterating over the array, we can't let it return something
const todoForEach = [];
todos.forEach((todo) => todoForEach.push(todo.text));
const todoTextMap = todos.map((todo) => todo.text);
const todoCompletedFilter = todos
  .filter(todo => todo.isCompleted)
  .map(todo => todo.text);

console.log(`${todoForEach}\n${todoTextMap}\n${todoCompletedFilter}`);
```

### Dates

**Date Formats**

We can create Data objects via the `Date()` constructor:

```js
// initializing a static Date object with Date() constructor
const dob = new Date('2018-5-25');
const now = new Date(); // leave this blank for current time
console.log(dob);
console.log(now);
```

JS outputs in this format on the console:

```
Fri May 25 2018 00:00:00 GMT+0800 (Malaysia Time)
Thu Jan 23 2025 23:50:33 GMT+0800 (Malaysia Time)
```

There are 9 ways to create a Date object:

```js
new Date()
new Date(date string)

new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)

new Date(milliseconds)
```

**Getter Setter Methods**

### Object Oriented Programming (OOP)

**Object Constructors**

Here is an example on how to construct an object (non-primitive) in JS:

```js
// constructor function
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
}

// Instantiate object
const person1 = new Person('John', 'Doe', '5-3-1980');
const person2 = new Person('Robert', 'Smith', '3-6-1970');

console.log(person1);
console.log(person2.firstName);
```

**Function Prototypes**

We can add object methods via function prototypes:

```js
// constructor function
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

// function prototypes
Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

// Instantiate object
const person1 = new Person('John', 'Doe', '5-3-1980');
const person2 = new Person('Robert', 'Smith', '3-6-1970');

console.log(person1);
console.log(person2.firstName);
console.log(person1.dob.getDay);
console.log(person1.getBirthYear());
console.log(person2.getFullName());
```

**Working with Classes**

ES6 introduced syntatic sugar that included classes to work with OOP in JS. With this we can simplify our `Person` example:

```js
class Person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}
```

### JavaScript DOM

**Getting Element(s)**

```js
// DOM
// single element
const form = document.getElementById('my-form');
console.log(document.querySelector('.container')); // classes come with a dot
console.log(document.querySelector('h1')); // works with tags as well

// multiple elements
const items = document.querySelectorAll('.item'); // returns a nodelist, able to use array methods on it

items.forEach(item => console.log(item));
```

**Removing and Modifying Elements from** `ul`

```js
const ul = document.querySelector('.items');
//ul.remove(); // remove all elements from ul
//ul.lastElementChild.remove(); // removes last element from ul
ul.firstElementChild.textContent = 'Hello'; // changes the content of the first element from ul
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>'; // adding HTML dynamically
```

**Modifying CSS Styles**

```js
const btn = document.querySelector('.btn');
btn.style.background = 'red'; // more dynamic than changing it in CSS
```

**Event Listeners**

`addEventListener()` creates an event listener with event and function (that takes the event parameter `e`) as parameters:

```js
const btn = document.querySelector('.btn');

/* create an event listener
event and function as parameters
the click output flashes quickly since the button is submit
when the submit button is clicked it submits the form to a file
we have to prevent the default behaviour on this particular button
*/

btn.addEventListener('click', (e) => {
    console.log('click');
});
```

Note that the click output flashes quickly since the button is `submit`. When the `submit` button is clicked it submits the form to a file. We have to fix this by preventing the default behaviour on this particular button:

```js
btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e);
    console.log(e.target);
});
```

**Modifying CSS Styles via Mouse Click**

```js
btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
});
```

```js
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

// remember that the function takes an event parameter
function onSubmit(e){
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000); // takes time in miliseconds
    }
    else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);

        // clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}
```