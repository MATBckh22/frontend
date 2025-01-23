// constructor function
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

// Instantiate object
const person1 = new Person('John', 'Doe', '5-3-1980');
const person2 = new Person('Robert', 'Smith', '3-6-1970');

console.log(person1);
console.log(person2.firstName);
