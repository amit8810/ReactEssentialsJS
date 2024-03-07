
let a = 10;
let b = 20;

let result = a + b;

async function getData() {
    try {
        let response = await fetch("https://api.github.com/users/amit8810");
        let dataFromServer = await response.json();     
        console.log(dataFromServer);
    } catch (error) {
        console.error(error);
    }
}

getData();

console.log("The sum is :", result)