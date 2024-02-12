/*
In JavaScript, call, apply, and bind are methods that allow you to manipulate how a function is executed and what the value of this refers to within that function.
*/

// call method
// SYNTAX: `function.call(thisArg, arg1, arg2, ...)`
// EXample:
function sayHello (greeting) {
    console.log(`${greeting}, ${this.name}!`);
}

const person = { name : "Amit"}
sayHello.call(person, 'Good morning'); // Good morning, Amit!


// apply method
// SYNTAX: `function.apply(thisArg, [argsArray])`
// Example
sayHello.apply(person, ['Hola']) // Hola, Amit

/*
- `call` is used to invoke a function with a specified `this` value and individual arguments.
- `apply` is similar to `call`, but it takes an array of arguments.
*/


// bind method
// SYNTAX: `function.bind(thisArg[, arg1[, arg2[, ...]]])`
const greetPerson = sayHello.bind(person, "Bonjour");
greetPerson(); // Bonjour, Amit
//* `bind` creates new function with a fixed `this` value and partially applied arguments.


