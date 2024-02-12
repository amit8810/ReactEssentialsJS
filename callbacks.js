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

// Callbacks are used everywhere, not just in DOM events.
// One common example is by using timers:
setTimeout(() => {
    console.log(`Hello i'm executed with 2sec delay`);
}, 2000)

