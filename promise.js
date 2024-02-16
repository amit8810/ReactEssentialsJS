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
    setTimeout(function () {
      const success = Math.random() < 0.8;

      if (success) {
        resolve("Operation completed successfully");
      } else {
        reject("Operation failed");
      }
    }, 1000);
  });
}

// Using the Promise
asyncOperation()
  .then(function (result) {
    console.log("Success: ", result);
  })
  .catch(function (error) {
    console.error("Error: ", error);
  });

// resolve - conected hai .then() se; jo resolve mein daalke bhejoge wo .then mein jayega
// reject - connected hai .catch() se; jo reject mein daalke bhejoge wo .catch mein jayega

// real-world example
function fetchDataFromApi(url) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            fetch(url)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        reject(new Error('Request failed'));
                    }
                })
                .then(data => resolve(data))
                .catch(error => reject(error));
        }, 2000);
    });
}

fetchDataFromApi('https://api.github.com/users/amit8810')
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log("Error", error);
    });