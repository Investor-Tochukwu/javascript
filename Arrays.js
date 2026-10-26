//   ARRAYS

const fruits = ["Apple", "Banana", "Mango", "Orange"];

console.table(fruits);

// ARRAY CONSTRUCTORS

const names = new Array (1,2,3,4,"Emma");

// ACCESSING THE ELEMENTS OF AN ARRAY

console.log(names[3]);
console.log(fruits[3]);

// EMPTY ARRAY

const empty = [];

// MODIFYING THE CONTENTS OF AN ARRAY
fruits[2] = "Pawpaw";

console.log(fruits);

// LENGTH PROPERTY OF AN ARRAY

console.log(names.length);

// FINDING THE INDEX NUMBER OF AN ITEM IN AN ARRAY

console.log(fruits.indexOf("Orange"));

// Accessing the last element of an Array

console.log(fruits[fruits.length - 1]);

