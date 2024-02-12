/*
* A module is a JavaScript file that exports one or more values (objects, functions or variables), using the export  keyword. For example, this module exports a function that returns a string uppercase:
*/

const uppercase = (str) => {
    return str.toUpperCase()
}

module.exports = uppercase;