// Promise in javascript are object that represent the eventual completion or failure of an asynchronous operation.
/**
 * !!!!!!!!!!!! A promise has one of these state !!!!!!!!!!!!!
 * * Pending : initial state, promise is neither fullfilled or rejected.
 * * Fullfilled: operation was completed successfully, and promise and resulted value.
 * * Rejected: operation was failed, and promise has a resaon for failure.
 */


// Function to simulate an asynchronous operation
function asyncOperation() {

    return new Promise(function (resolve, reject) {
        // Simulating an asynchronous task (e.g., API call)
        setTimeout(function() {
            const success = Math.random() < 0.8;

            if(success) {
                resolve("Operation completed successfully");
            } else {
                reject("Operation failed");
            }
        }, 1000);
    });
}

// Using the Promise
asyncOperation()
 .then(function(result) {
    console.log("Success: ", result);
 })
 .catch(function(error) {
    console.error("Error: ", error);
 });


// real-world example
function fetchDataFromApi(url) {
    
    return new Promise(() => {

    })
}


