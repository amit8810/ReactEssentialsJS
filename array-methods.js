// In JavaScript, an array is a data structure that allows you to store and organize multiple values within a single variable. These values can be of any data type, such as numbers, strings, objects, or even other arrays

const numbers = [10, 20, 30, 40];
console.log(numbers.at(1)) // 20
console.log(numbers.includes(10)) // true

numbers.push(50);
console.log(numbers); // [ 10, 20, 30, 40, 50 ]

// TODO: Array => Map
const originalArray = [1, 2, 3, 4, 5];
let squaredNumbers = originalArray.map(number => number * number);
console.log(squaredNumbers); // [ 1, 4, 9, 16, 25 ]

// TODO: Array => Filter
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
    for(let i = 2; i<num; i++) {

        if(num % i === 0) return false;
    }

    return num > 1;
}
console.log(array.filter(isPrime)); // [ 2, 3, 5, 7, 11, 13 ]

const primeNumbers = array.filter(isPrime)
console.log(primeNumbers); // [ 2, 3, 5, 7, 11, 13 ]


const postiveInteger = array.filter(num => num >= 0)
console.log(postiveInteger); // [0,  1, 2, 3,  4,  5, 6,  7, 8, 9, 10, 11, 12, 13]

const negativeInterger = array.filter(num => num < 0)
console.log(negativeInterger); // [ -3, -2, -1 ]



// TODO: Array => Reduce
// SYNTAX: array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])

const arr = [1, 2, 3, 4, 5];

function findSum (arr) {
    let sum = 0;
    for(let i=0; i< arr.length; i++) {
        sum = sum + arr[i]
    }

    return sum;
}

const total = findSum(arr);
console.log(total); // 15

// find sum of array using reducer
const output = arr.reduce(function(acc, curr){
    acc = acc + curr;
    return acc;
}, 0)

console.log(output) // 15


function findMaxi (arr) {
    let maxi = 0;
    for(let i=0; i<arr.length; i++) {
        if(arr[i] > maxi) {
            maxi = arr[i]
        }
    }

    return maxi;
}

// find max number in the array using reduce function
const max = arr.reduce(function(acc, curr) {
    if(curr > acc) {
        acc = curr
    }

    return curr
}, 0)

console.log(max);

const users = [
    {firstName: "amit", lastname: "singh", age:20},
    {firstName: "jenny", lastname: "gomez", age:18},
    {firstName: "alexa", lastname: "bliss", age:21},
    {firstName: "john", lastname: "cena", age:30},
];

// list of full names

const fullNames = users.map(user => `${user.firstName} ${user.lastname}`);
console.log(fullNames); [ 'amit singh', 'jenny gomez', 'alexa bliss', 'john cena' ]

// list of user first name whose age is greater than 18
console.log(users.filter(user => user.age > 18).map(user => user.firstName));

const count = users.reduce(function(count, user) {
    if(user.age > 18){
        count++;
    }

    return count;
}, 0);

console.log(count) // 3 people whose age is greater than 18



