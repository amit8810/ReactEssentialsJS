// TODO: `map()` Exercise Questions:

/*
Given an array of temperatures in Celsius, create a new array that converts each temperature to Fahrenheit using the formula: F = C * (9/5) + 32.
 Example array of temperatures in Celsius
 let temperaturesInCelsius = [0, 10, 20, 30];

 Your task: Use map() to convert the temperatures to Fahrenheit and store them in a new array.
 Output should be: [32, 50, 68, 86]
*/
let temperatureInCelsius = [0, 10, 20, 30]
function celsiusToFahrenheit(temp) {
    return temp * (9/5) + 32;
}
let temperatureInFahrenheit = temperatureInCelsius.map(celsiusToFahrenheit);
console.log(temperatureInFahrenheit); // [ 32, 50, 68, 86 ]


//Q: Given an array of numbers, use map() to create a new array where each element is squared.
let integers = [1, 2, 3, 4, 5];
let squaredNumbers = integers.map(num => num * num);
console.log(squaredNumbers); // [1, 4, 9, 16, 25]

//Q: Given an array of strings, use map() to create a new array where each string is capitalized.
let  words = ["hello", "world", "js"];
let capitalized = words.map(word => word.toUpperCase());
console.log(capitalized); // [ 'HELLO', 'WORLD', 'JS' ]

//Q: Given an array of names, use map() to create a new array where each name is preceded by "Mr. ".
let names = [ "Alice", "Bob", "Charlie" ];
let precededByMr = names.map(name => `Mr.${name}`)
console.log(precededByMr); // [ 'Mr.Alice', 'Mr.Bob', 'Mr.Charlie' ]

//Given an array of prices in dollars, use map() to convert each price to euros using an exchange rate of 0.93.
let pricesInDollar = ["$10","$20","$5"]
let pricesInDollarNumber = pricesInDollar.map(str => parseInt(str.replace("$","")));
let pricesInEuros = pricesInDollarNumber.map(dollar => dollar * 0.93);
console.log(pricesInEuros); // [ 9.3, 18.6, 4.65 ]

