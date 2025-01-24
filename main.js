console.log(window); // top level

// DOM
// single element
const form = document.getElementById('my-form');
console.log(document.querySelector('.container')); // classes come with a dot
console.log(document.querySelector('h1')); // works with tags as well

// multiple elements
const items = document.querySelectorAll('.item'); // returns a nodelist, able to use array methods on it

items.forEach(item => console.log(item));

const ul = document.querySelector('.items');
//ul.remove(); // remove all elements from ul
//ul.lastElementChild.remove(); // removes last element from ul
ul.firstElementChild.textContent = 'Hello'; // changes the content of the first element from ul
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>'; // adding HTML dynamically

const btn = document.querySelector('.btn');
btn.style.background = 'red'; // more dynamic than changing it in CSS