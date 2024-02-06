//TODO: Spread Operator

// Copying an array
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); // Output: [1, 2, 3]

// Concatenating arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatenatedArray = [...array1, ...array2];
console.log(concatenatedArray); // Output: [1, 2, 3, 4, 5, 6]

// Passing elements of an array as function arguments
function sum(a, b, c) {
    return a + b + c;
}
const numbers = [1, 2, 3];
console.log("sum is ", sum(...numbers)); // Output: 6

// Creating shallow copies of objects
const originalObject = { name: "John", age: 30 };
const copiedObject = { ...originalObject };
console.log(copiedObject); // Output: { name: "John", age: 30 }


//TODO: Rest Operator
// rest also used for destructuring
function sum(...numbers) {
    return numbers.reduce((acc, val) => acc + val, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(1, 2, 3, 4, 5)); // Output: 15


const items = { first, second, ...others } = {
    first: 1,
    second: 2,
    third: 3,
    fourth: 4,
    fifth: 5
}

/*
first // 1
second // 2

others // { third: 3, fourth: 4, fifth: 5 }

*/

console.log(items); // { first: 1, second: 2, third: 3, fourth: 4, fifth: 5 }