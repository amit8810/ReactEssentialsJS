# Javascript you need to know to use React

## variables
- Variable is a container for a value.
- In Javascript, you can define variable with `let`, `const`, `var` keywords.
1. **var** : traditionally used to declare the variable.
```javascript
var a = 10; // variable defined with `var` can be accessed and used globally.
```
2. **let and const**: introduced in ES6 (ECMAScript 2015), let and const are block scoped which means they only exist within the block.
```javascript
// they are only accessible with in the block(enclosed by curly braces).
let b = 10; 
const c = 20;
// `const` are used to declared `constants`, whose value cannot be `re-assigned`.
```

## Arrow Functions
- Arrow functions were introduced in ES6 / ECMAScript 2015, and since their introduction they changed forever how JavaScript code looks (and works).

Visually, it’s a simple and welcome change, which allows you to write functions with a shorter syntax, from:

```javascript
const myFunction = function(){
    //...
}

// to

const myFunction = () => {
    //...
}
```

```javascript
//If the function body contains just a single statement, you can omit the brackets and write all on a single line:
const myFunction = () => doSomething()
```

```javascript
//Parameters are passed in the parentheses:
const myFunction = (param1, param2) => doSomething(param1, param2)
```

```javascript
//If you have one (and just one) parameter, you could omit the parentheses completely:
const myFunction = param => doSomething(param)
```

## Work with objects and arrays using Rest and Spread
> Learn two modern techniques to work with arrays and objects in JavaScript
- You can expand an array, an object or a string using the `spread operator ....`
- It is commonly used to:

> **Copy an array**.
```javascript
// Copying an array
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); // Output: [1, 2, 3]
```

> **Concatenate arrays.**
```javascript
// Concatenating arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatenatedArray = [...array1, ...array2];
console.log(concatenatedArray); // Output: [1, 2, 3, 4, 5, 6]
```
> **Pass elements of an array as function arguments.**
```javascript
// Passing elements of an array as function arguments
function sum(a, b, c) {
    return a + b + c;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // Output: 6
```
> **Create shallow copies of objects.**
```javascript
// Creating shallow copies of objects
const originalObject = { name: "John", age: 30 };
const copiedObject = { ...originalObject };
console.log(copiedObject); // Output: { name: "John", age: 30 }
```

#### ***Rest Parameter (...)***:
The rest parameter allows a function to accept an **indefinite number** of arguments as an array. It collects all the remaining arguments into an array.
- Here's an example demonstrating the rest parameter:
```javascript
function sum(...numbers) {
    return numbers.reduce((acc, val) => acc + val, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
```

## Objects and Array Destructuring

```javascript
//TODO: Destructure Objects
const person = {
    fname: "Amit",
    lname: "Singh",
    age: 20
}

// way 1
const {fname, lname, age} = person;
console.log(`Name : ${fname} ${lname} and Age : ${age}`); // Name : Amit Singh and Age : 20


const car = {
    company: "Tesla",
    model : "X",
    topSpeed: "300 Kmph",
    autoPilot: true,
    chargingTime: "5h"
}

// destructure using rest operator
const {...carDetails} = car;
console.log(carDetails)
/*
{
  company: 'Tesla',
  model: 'X',
  topSpeed: '300 Kmph',
  autoPilot: true,
  chargingTime: '5h'
}
*/
console.log(carDetails.company); // Tesla

//--------------------------------------------------------------------------------------------
//TODO: Destructuring Array
const heroes = ["superman", "batman", "spiderman", "thor"];

// SYNTAX 1
const [first, second] = heroes;
console.log(first); // superman
console.log(second); // batman

// SYNTAX 2
const [hero1, , hero3] = heroes
console.log(hero1); // superman
console.log(hero3); // spiderman

// SYNTAX 3 (using rest operator)
const [firstHero, ...othersHeroes] = heroes;
console.log(firstHero); // superman
console.log(othersHeroes); // [ 'batman', 'spiderman', 'thor' ]
```

## Template Literals In JS
JavaScript template literals provide a more flexible and readable way to create strings.
They are enclosed within backticks (` `) instead of single or double quotes.

1. > Basic Usage
```javascript
const fname = 'amit';
const greeting = `hello ${fname}`
console.log(greeting); // hello amit
```
2. > Multiline String
```javascript
let str = `this is a
multiline
string`;
console.log(str);
/*
this is a
multiline
string
*/
```
3. > Expression Interpolation
```javascript
const a = 10;
const b = 5;
const result = `The sum of ${a} and ${b} is ${a + b}`;
console.log(result); // Output: The sum of 10 and 5 is 15
```
4. > Tagged Templates
```javascript
function tag(strings, ...values) {
    console.log(strings); // Array of string literals
    console.log(values);  // Array of interpolated values
    return 'Processed string';
}

const a = 10;
const b = 5;
const processed = tag`The sum of ${a} and ${b} is ${a + b}`;
console.log(processed); // Output: Processed string
```

## JavaScript Asynchronous Programming and Callbacks [🔗](https://flaviocopes.com/javascript-callbacks/)
JavaScript is synchronous by default, and is single threaded. This means that code cannot create new threads and run in parallel.
> In simple terms, JavaScript follows a "**one thing at a time**" approach and can only do **one task at a time**. It doesn't have the ability to create multiple threads or do things simultaneously. So, if there's a piece of code running, everything else has to wait until it's finished before running.
* Lines of code are executed in series, one after another, for example:
```javascript
const a = 1
const b = 2
const c = a * b
console.log(c)
doSomething()
```
But JavaScript was born inside the browser, its main job, in the beginning, was to respond to user actions, like `onClick`, `onMouseOver`, `onChange`, `onSubmit` and so on. How could it do this with a synchronous programming model?
The answer was in its environment. The browser provides a way to do it by providing a set of APIs that can handle this kind of functionality.

#### Callbacks
You can’t know when a user is going to click a button, so what you do is, you define an event handler for the click event. This event handler accepts a function, which will be called when the event is triggered:
```javascript
document.getElementById('button').addEventListener('click', () => {
  //item clicked
})
```
This is the so-called `callback`.
```javascript
/**
 * A callback is a function that will be executed after another function gets executed. In javascript, functions are treated as first-class citizens, they can be used as an argument of another function, can be returned by another function, and can be used as a property of an object.

 ** Functions that are used as an argument to another function are called callback functions. Example:
*/

function multiplyBy2(number){
    return number * 2;
}

function divideBy2(number){
    return number / 2;
}

function sumOfTwoNumbers(x, y, operation){
    const result = x + y;
    return operation(result); // Here we call the callback function with "operation" being a parameter of sumOfTwoNumbers
}

console.log(sumOfTwoNumbers(10, 20, multiplyBy2)); // 60
console.log(sumOfTwoNumbers(10, 20, divideBy2)); // 15
```
##### **Alternatives to callbacks**
Starting with ES6, JavaScript introduced several features that help us with asynchronous code that do not involve using callbacks:
* [Promises](https://flaviocopes.com/javascript-promises/) (ES2015)
* [Async/Await](https://flaviocopes.com/javascript-async-await/) (ES2017)

## ES Modules [🔗](https://flaviocopes.com/es-modules/)
The syntax to import a module is:
```javascript
import package from 'module-name'
```
while CommonJS uses
```javascript
const package = require('module-name')
```
> A module is a JavaScript file that exports one or more values (objects, functions or variables), using the export keyword. For example, this module exports a function that returns a string uppercase:
```javascript
// uppercase.js
export default str => str.toUpperCase()
```