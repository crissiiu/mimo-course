// ===============================
// DOM
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.container'));
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));

// const ul = document.querySelector('.items');
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>My name is Sieu</h1>';

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
// });

// ===============================
// Class
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
    
//     greet() {
//         return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }
// }

// const person1 = new Person('Sieu', 30);
// console.log(person1.greet());

// ===============================
// Function declaration
// function greet(name) {
//     return `Hello, ${name}!`;
// }

// console.log(greet('Sieu'));

// Function expression
// const greet = function(name) {
//     return `Hello, ${name}!`;
// }

// console.log(greet('Sieu'));

// Arrow function (ES6)
// const greet = (name) => {
//     return `Hello, ${name}!`;
// }

// console.log(greet('Sieu'));

// Shorter arrow function (ES6)
// const greet = name => `Hello, ${name}!`;
// console.log(greet('Sieu'));  

// Immediately Invoked Function Expression (IIFE)
// (function() {
//     console.log('IIFE Ran...');
// })();    

// ===============================
// Condition
// const x = 10;
// if(x > 5) {
//     console.log('x is greater than 5');
// } else if(x === 5) {
//     console.log('x is equal to 5');
// } else {
//     console.log('x is less than 5');
// }

// const color = x > 10 ? 'red' : 'blue'; // Ternary operator
// console.log(color);

// switch(color) {
//     case 'red':
//         console.log('Color is red');
//         break;
//     case 'blue':
//         console.log('Color is blue');
//         break;
//     default:
//         console.log('Color is not red or blue');
//         break;
// }

// ===============================
// For
// for(let i = 0; i < 10; i++) {    
//     console.log(`For Loop Number: ${i}`);
// }

// While
// let i = 0;
// while(i < 10) {
//     console.log(`While Loop Number: ${i}`);
//     i++;
// }

// Do While
// let i = 0;
// do {
//     console.log(`Do While Loop Number: ${i}`);
//     i++;
// } while(i < 10);

// Foreach - for arrays
// const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];
// cars.forEach(function(car, index) {
//     console.log(`${index}: ${car}`);
// });

//map - for arrays              
// const users = [
//     { id: 1, name: 'John' },
//     { id: 2, name: 'Jane' },
//     { id: 3, name: 'Bob' }
// ];

// const userNames = users.map(function(user) {
//     return user.name;
// });
// console.log(userNames);

//Filter - for arrays
// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.filter(function(number) {
//     return number % 2 === 0;
// });
// console.log(evenNumbers);
// ===============================
//Objects literal
// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'sports'],
//     address: {
//         street: '123 Main St',
//         city: 'Anytown',
//         state: 'CA'
//     }
// }

// console.log(person.firstName);
// const { firstName, lastName } = person; // Object destructuring
// console.log(firstName, lastName);
// const { address: { city } } = person; // Nested object destructuring
// console.log(city);
// person.email = 'john.doe@example.com';
// console.log(person);

// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Dentist appointment',
//         isCompleted: false
//     }
// ]

// console.log(todos);
// console.log(todos[1].text); // Accessing the text of the second todo item
// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);
// ===========================================
//Arrays - variable that hold multiple values

// const numbers = new Array(1, 2, 3, 4, 5);
// console.log(numbers);

// const fruits = ['Apple', 'Banana', 'Orange'];
// console.log(fruits);
// console.log(fruits[1]); // Accessing the second element (Banana)
// fruits.push('Grapes'); // Adding a new element to the end of the array
// console.log(fruits);
// fruits.unshift('Strawberry');   // Adding a new element to the beginning of the array
// console.log(fruits);
// fruits.pop(); // Removing the last element from the array
// console.log(fruits);
// fruits.shift(); // Removing the first element from the array
// console.log(fruits);
// console.log(Array.isArray(fruits)); // Checking if 'fruits' is an array
// console.log(fruits.indexOf('Banana')); // Finding the index of 'Banana' in the array
//==============================
// //String
// const s = 'Hello World';
// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.substring(0, 5));
// console.log(s.split(''));

//==============================
//Data types
// let name = "John"; //string
// let age = 30; //number
// const isCool = true; //boolean
// const rating = 4.5; //number
// const x = null; //null
// let y; //undefined
// const z = Symbol(); //symbol

// console.log(typeof name); // string
// console.log(typeof age); // number
// console.log(typeof isCool); // boolean
// console.log(typeof rating); // number
// console.log(typeof x); // object (this is a quirk in JavaScript)
// console.log(typeof y); // undefined
// console.log(typeof z); // symbol

/** Concatenation */
// const name = 'Sieu';
// const age = 30;

// // Using concatenation
// console.log('My name is ' + name + ' and I am ' + age + ' years old.');

// // Using template literals (ES6)
// console.log(`My name is ${name} and I am ${age} years old.`);

//==============================
//var, let, const
// let age = 30;
// console.log(age); // 30
// age = 31;
// console.log(age); // 31

// const name = "John";
// console.log(name); // John
// name = "Jane";
// console.log(name); // This will cause an error because 'name' is a constant

//=============================
// console.error("This is an error message.");
// console.warn("This is an warning message.");
// console.log("Hello, world!");

// alert("Hello, world!");