"use strict"

// this in global scope
console.log(this); //* represent (global object - window, {})
//!-----------------------------------------------------------------------------------------------------

// this inside a function
function x() {
    // the value depends on strict / non strict mode
    console.log(this);
}
x()
//!-----------------------------------------------------------------------------------------------------

// this in strict mode - (this substitution)
// ? if the value of "this" keyword is 'undefined' or 'null' , this keyword will be replaced with 'global-Object' only in 'non-strict' mode
//!-----------------------------------------------------------------------------------------------------

// this keyword value depends on how - we call the function and not where it is defined
// Note - 'In strict mode' 
function y() {
    console.log(this);
}

y() // undefined
window.y() // global-object (window-object)
//! -----------------------------------------------------------------------------------------------------

// this inside a object's method
const obj = {
    a : 10,
    x: function () {
        console.log(this);
    }
}

obj.x() // object = obj

const obj2 = {
    a : 10,
    x : function () {
        console.log(this.a);
    }
}

obj2.x() // 10
//! -----------------------------------------------------------------------------------------------------

// call, apply, bind methods (sharing method)
const student = {
    name : "Amit" ,
    greet : function () {
        console.log( `Hello ${this.name}` );
    }
}

student.greet() // Hello Amit

const student2 = {
    name : "James"
}

student.greet.call(student2) // Hello James
//! -----------------------------------------------------------------------------------------------------

// this inside arrow function
const car = {
    a : 10,

    x : () => {
        console.log(this);
    },
}

car.x() // window object [learn about enclosing lexical context], where is the func lexically enclosed
//! -----------------------------------------------------------------------------------------------------

// this inside nested arrow function
const person = {
    a : 10,
    x : function () {
        // console.log(this);
        // enclosing lexical context
        const y = () => {
            console.log(this);
        }
        y();
    } 
}

person.x() // object = person
//! -----------------------------------------------------------------------------------------------------

// this inside DOM element => reference to the HTML element




