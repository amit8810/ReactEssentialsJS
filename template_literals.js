// 1. Basic usage
const fname = 'amit';
const greeting = `hello ${fname}`
console.log(greeting); // hello amit

// 2. Multiline string
let str = `this is a
multiline
string`;
console.log(str);
/*
this is a
multiline
string
*/

// 3. expression interpolation
const a = 5;
const b = 10;
console.log(`The sum of ${a} + ${b} is : ${a + b}`) // The sum of 5 + 10 is : 15

// 4. Tagged Template
function tag(strings, ...values) {
    console.log(strings); // Array of string literals
    console.log(values);  // Array of interpolated values
    return 'Processed string';
}

const x = 10;
const y = 5;
const processed = tag`The sum of ${x} and ${y} is ${x + y}`;
console.log(processed); // Output: Processed string

/*
[ 'The sum of ', ' and ', ' is ', '' ] // strings
[ 10, 5, 15 ] // values
Processed string
*/


