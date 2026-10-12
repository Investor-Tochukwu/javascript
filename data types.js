// PRIMITIVE DATA TYPES: STRING, NUMBER, BOOLEAN, NULL, UNDEFINED, SYMBOL

// STRING 

let name = "John";
const template = `My name is ${name}`;
console.log(template);

// NUMBER
let age = 20;

// BOOLEAN
let isAdult = true;
let isChild = false;
console.log(isAdult);

console.log( 5 > 10);


// NON-PRIMITIVE DATA TYPES: OBJECT, ARRAY, FUNCTION

// OBJECT

let person = {
    firstName: "Edeh",
    lastName: "Tochukwu",
    age: 20,
    occupation: "Student"
};

console.log(person);

console.log(person.age);

//  ARRAY

const fruits = [ "APPLE", "MANGO", "ORANGE", "PINEAPPLE"];
console.log(fruits);

console.log(fruits[3]);
console.log(fruits.length);
console.log(fruits[fruits.length - 1]);
console.log(fruits[fruits.length - 2]);