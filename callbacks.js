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
// Callback are used in asynchronous operations


// Asynchronous operation with callback
function fetchData (url, callback) {

    setTimeout(() => {
        const data = `some data fetched from : ${url}`
        callback(null, data);

    }, 2000)

}

// Using the fetchData function with a callback
fetchData( "https://example.com/api/data", (err, result) =>{
    if(err){
        console.error(err);
    } else {
        console.log(result);
    }
})

