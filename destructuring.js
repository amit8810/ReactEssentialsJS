//TODO: Destructure Objects
const person = {
    fname: "Amit",
    lname: "Singh",
    age: 20
}

// way 1
const {fname, lname, age} = person;
console.log(`Name : ${fname} ${lname} and Age : ${age}`); // Name : Amit Singh and Age : 20


const car = {
    company: "Tesla",
    model : "X",
    topSpeed: "300 Kmph",
    autoPilot: true,
    chargingTime: "5h"
}

// destructure using rest operator
const {...carDetails} = car;
console.log(carDetails)
/*
{
  company: 'Tesla',
  model: 'X',
  topSpeed: '300 Kmph',
  autoPilot: true,
  chargingTime: '5h'
}
*/
console.log(carDetails.company); // Tesla

//--------------------------------------------------------------------------------------------
//TODO: Destructuring Array
const heroes = ["superman", "batman", "spiderman", "thor"];

const [first, second] = heroes;
console.log(first); // superman
console.log(second); // batman

const [hero1, , hero3] = heroes
console.log(hero1); // superman
console.log(hero3); // spiderman

const [firstHero, ...othersHeroes] = heroes;
console.log(firstHero); // superman
console.log(othersHeroes); // [ 'batman', 'spiderman', 'thor' ]

