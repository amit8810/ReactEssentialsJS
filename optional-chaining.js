/*
Optional chaining is a feature that helps you navigate through object properties or access nested properties without worrying if some of them might be undefined or null. It's a way to gracefully handle situations where a property may not exist in a nested structure.
*/

const person = {
    name : "Amit",
    address: {
        city: "Noida",
        zipCode : "201301",
    },
}

// Now, if you want to access the zip code of the person's address, you could do it like this:
const zipCode = person.address.zipCode;
console.log(zipCode); // OUTPUT : 201301

// But what if the address itself is undefined or null? You would get an error:
// const zipCode = person.address.zipCode; // Uncaught TypeError: Cannot read property 'zipCode' of undefined


// This is where optional chaining comes in handy. You can use the ?. operator to handle this situation more gracefully:
const city = person.address?.city;
console.log(city); // OUTPUT : Noida
