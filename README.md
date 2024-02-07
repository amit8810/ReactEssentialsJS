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