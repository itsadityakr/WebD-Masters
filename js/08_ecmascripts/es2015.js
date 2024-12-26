//* ======================================
//* Modern JavaScript - ECMAScript 2015+
//* =====================================

//* LET AND CONST - ECMAScript 2015
//* =====================================

//? Syntax:
//? let variableName = initialValue; // Block-scoped, mutable
//? const variableName = initialValue; // Block-scoped, immutable

let programmingLanguage = "JavaScript"; // Block-scoped variable
programmingLanguage = "TypeScript"; // Reassignment is allowed with `let`
console.log(programmingLanguage); // Output: TypeScript

const pi = 3.14159; // Block-scoped constant
// pi = 3.14; // Error: Assignment to constant variable
console.log(pi); // Output: 3.14159

//? `let` and `const` variables are not added to the `window` object, unlike `var`.
var globalVar = "I'm a var"; 
let globalLet = "I'm a let";
console.log(window.globalVar); // Output: I'm a var
console.log(window.globalLet); // Output: undefined

//? Syntax for Hoisting with `var`, `let`, and `const`
console.log(hoistedVar); // Output: undefined
var hoistedVar = "I am hoisted";

// console.log(hoistedLet); // Error: Cannot access 'hoistedLet' before initialization
let hoistedLet = "I am declared after usage";

//* TEMPLATE STRINGS - ECMAScript 2015
//* =====================================

//? Syntax:
//? `Backticks` are used for multi-line strings and interpolation.
//? `${expression}` is used for embedding variables or expressions.

const user = "Alice";
const message = `Hello, ${user}! Welcome to Modern JavaScript.`;
console.log(message); // Output: Hello, Alice! Welcome to Modern JavaScript.

//* Default Parameters
//* =====================================

//? Syntax:
//? function functionName(param1 = defaultValue, param2 = defaultValue) {
//?   // Function body
//? }

function greetUser(name = "Guest", language = "JavaScript") {
  return `Hello, ${name}! Welcome to ${language} programming.`;
}
console.log(greetUser()); // Output: Hello, Guest! Welcome to JavaScript programming.
console.log(greetUser("John", "Python")); // Output: Hello, John! Welcome to Python programming.

//* FAT ARROW FUNCTIONS (Arrow Functions)
//* =====================================

//? Syntax:
//? const functionName = (param1, param2, ...) => {
//?   // Function body
//?   return result; // Optional if single expression
//? };

const multiply = (a, b) => a * b;
console.log(`The product of 3 and 4 is ${multiply(3, 4)}`); // Output: The product of 3 and 4 is 12

//* ==========================================
//* OBJECT AND ARRAY DESTRUCTURING
//* ==========================================

//? Destructuring allows unpacking values from arrays or objects into distinct variables.
//? Syntax for Arrays: const [var1, var2, ...] = array;
//? Syntax for Objects: const {prop1, prop2, ...} = object;

const [x, y, z] = [1, 2, 3];
console.log(x, y, z); // Output: 1 2 3

const person = { name: "Alice", age: 30 };
const { name, age } = person;
console.log(name, age); // Output: Alice 30

//? Destructuring with Default Values
const [a = 5, b = 10] = [];
console.log(a, b); // Output: 5 10

//* SPREAD AND REST OPERATORS
//* ==========================================

//? Spread Syntax: Allows an iterable (e.g., array or string) to be expanded into individual elements.
//? Syntax: [...iterable]

const nums = [1, 2, 3];
const extendedNums = [...nums, 4, 5];
console.log(extendedNums); // Output: [1, 2, 3, 4, 5]

//? Rest Syntax: Collects all remaining elements into an array.
//? Syntax: (...rest)

const [first, ...rest] = [1, 2, 3, 4];
console.log(first); // Output: 1
console.log(rest); // Output: [2, 3, 4]

//* CLASSES AND INHERITANCE - ECMAScript 2015
//* ==========================================

//? Syntax:
//? class ClassName {
//?   constructor(parameters) {
//?     this.property = value;
//?   }
//?   method() {
//?     // Function body
//?   }
//? }

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Rex");
dog.speak(); // Output: Rex barks.

//* PROMISES
//* ==========================================

//? Syntax:
//? new Promise((resolve, reject) => {
//?   // Async operation
//? });

const fetchData = new Promise((resolve, reject) => {
  let success = true; // Simulate success or failure
  setTimeout(() => {
    success ? resolve("Data fetched!") : reject("Error fetching data.");
  }, 1000);
});

fetchData
  .then((data) => console.log(data)) // Output: Data fetched!
  .catch((error) => console.error(error));

//* MODULES - ECMAScript 2015
//* ==========================================

//? Importing and Exporting Code
//? Syntax for Exporting: export const variable = value;
//? Syntax for Importing: import { variable } from './module.js';

//* ==========================================
//* ADDITIONAL ES6 FEATURES
//* ==========================================

//? `for...of` Loop: Iterates over iterable objects like arrays, strings, etc.
const array = [10, 20, 30];
for (const value of array) {
  console.log(value); // Output: 10 20 30
}

//? `Map` and `Set` Collections:
const map = new Map();
map.set("name", "Alice");
console.log(map.get("name")); // Output: Alice

const set = new Set([1, 2, 2, 3]);
console.log(set); // Output: Set(3) {1, 2, 3}

//? `Symbol`: A unique and immutable data type.
const sym = Symbol("unique");
console.log(sym); // Output: Symbol(unique)

//* Summary of Key ES6 Syntax:
// 1. Use `let` and `const` for variable declarations.
// 2. Use template literals for dynamic and multi-line strings.
// 3. Default parameters simplify function calls with optional arguments.
// 4. Arrow functions make function syntax concise.
// 5. Destructuring extracts values directly from objects and arrays.
// 6. Spread/rest operators simplify array and object manipulation.
// 7. Classes provide a cleaner syntax for object-oriented programming.
// 8. Promises improve asynchronous programming.

