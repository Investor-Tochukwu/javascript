// Generating Random Numbers in JavaScript

// Generating random number with the minimum included and the maximum excluded

{
let max = 999999;
let min = 100000;
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber);
}

{
let max = 9;
let min = 1;
let randomNumber = Math.floor(Math.random() * (max - min)) + min;
console.log(randomNumber);
}

