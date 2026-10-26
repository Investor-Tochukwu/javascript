// CHATGPT PRACTICALS

// FUNCTIONS SYNTAX AND DECLERATION


function add(a,b,c) {
    return a + b + c
}

const total = add(5,9,3);

console.log(total);

function addTax(price) {
    return price + price * 0.1
}

const tax = addTax(12);

console.log(tax);

console.log(addTax(25));

// Functions with multiple parameters

function greet(name) {
    console.log("Hello " + name + "!")
    console.log(`Hello ${name}!`)
}

greet("Susan");

// PROVIDING DEFUALT ARGUMENT WHEN ARGUMENT IS NOT PROVIDED

function greeting(name = "Tochukwu") {
    console.log("How are you doing " + name);
}

greeting("Ani");
greeting();

// Functions with if statement

function isAdult(age) {
    if (age >= 18){
        return true;
    }
    return false;
}

console.log(isAdult(200));
console.log(isAdult(2));

// COMMOMN PRACTICAL USE OF FUNCTION

// CONVERT TEMPERATURE

function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5+ 32;
}

console.log(celsiusToFahrenheit(5));

// CALCULATE SHOPPING TOTAL

function calculateTotal(price,quantity) {
    return price * quantity;
}

console.log(calculateTotal(4,6));

// Format a user’s name

function makeDisplayName(firstName, lastName) {
  return firstName + " " + lastName;
}

console.log(makeDisplayName("Ada", "Lovelace"));

// Check whether a number is even

function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(8));

// Function expression
// functions can be stored in a variable

const myName = function(name) {
    return "My name is " + name;
}

console.log(myName("Tochukwu"));

// Arrow function

const test = (testing) => {
    return "What's up " + testing;
}
console.log(test("Micheal"));

         // CALLBACK FUNCTION

         console.log("CALLBACK FUNCTION");

 function sayHi(name){
    console.log("Hi, " + name);

 }
 sayHi("Amara");

 function sayMe(callback){
    callback("Joy");
 }

 sayMe(sayHi);
 

  const names = ["Ada", "Sam", "Mina"];

     names.forEach((name) => {
  console.log("Hello, " + name);
   });
   


// CLASS WORK

 function subtract(a,b) {
    return a - b;
 }
 console.log(subtract(20,3));

 function isPositiveNumber(number) {
    return number > 0;
 }

 console.log(isPositiveNumber(2));

 function greetings(id) {
    console.log("Welcome " + id )
 }

 greetings("Ola");

 function getDiscountedPrice(price,discount) {
    return price - discount;
 }

 console.log(getDiscountedPrice(200,20));