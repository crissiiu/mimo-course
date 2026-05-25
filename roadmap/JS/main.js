//Arrays - variable that hold multiple values

const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

const fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits);
console.log(fruits[1]); // Accessing the second element (Banana)
fruits.push('Grapes'); // Adding a new element to the end of the array
console.log(fruits);
fruits.unshift('Strawberry');   // Adding a new element to the beginning of the array
console.log(fruits);
fruits.pop(); // Removing the last element from the array
console.log(fruits);
fruits.shift(); // Removing the first element from the array
console.log(fruits);
console.log(Array.isArray(fruits)); // Checking if 'fruits' is an array
console.log(fruits.indexOf('Banana')); // Finding the index of 'Banana' in the array
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