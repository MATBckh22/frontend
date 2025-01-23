console.log("hello world");
//console.error("error");
//console.warn("warning");

// var (not recommended), let, const
let age = 30;
age = 31;
console.log(age);

// String, Numbers, boolean, null, undefined, Symbol
const _name = "John"; // name as a global variable is deprecated, using it in functions is fine
const age2 = 30;
const isCool = false;
const rating = 4.5;
const x = null;
const y = undefined; // not initialized, only declared, same as let without assigning value

console.log(typeof _name, typeof rating);
console.log(typeof x);

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

// object literals (key-value paired dictionaries)
person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'sports'],
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

//destructuring
const {firstName, lastName, address: { city }}  = person;
console.log(firstName);