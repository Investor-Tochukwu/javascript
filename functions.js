const person = {
    name: "Emma",
    age: 50,
    getBirthYear() {
        return new Date().getFullYear() - this.age;
    }
};

console.log(person);
console.log(person.getBirthYear());

               // FUNCTIONS SYNTAX
               console.log("INTRODUCTIONS TO FUNCTION / FUNCTIONS SYNTAX");

 function greet() {
    console.log("Hello Dear");
 }
 greet();

 function sayHello() {
    console.log("Hello!!");
 }
  sayHello();

  function introduction() {
    console.log("My name is Tochukwu");
    console.log("I am learning fullstack web development");
    console.log("I still a beginner");
 }
 introduction();


 function calculateSquare(number) {
    return number * number;
 }
 console.log(calculateSquare(10));


        // FUNCTIONS WITH RETURN STATEMENTS
        console.log("FUNCTIONS WITH RETURN STATEMENT");


  function addTwoNumbers(a,b){
    return a + b;}

 console.log(addTwoNumbers(10,5));


function getWelcomeMessage() {
    return "Welcome to my website";
}

let message = getWelcomeMessage();
console.log(message);

console.log(getWelcomeMessage());


                  // FUNCTIONS FOR CALCULATIONS
                console.log("FUNCTIONS FOR CALCULATIONS");

 function calculateSquare() {
    let number = 5;
    let square = number * number;
    return square;
}
console.log(calculateSquare());

let result = calculateSquare();
console.log( "The Square of the number is " + result);

                // Do Exponent

function doExponent(a,b){
    return Math.pow(a,b)
}

console.log( `The result of the Exponent is ${doExponent(2,4)}`);

function doExponet2(){
    const base = 2;
    const power = 3;
    return Math.pow(base,power);
}

console.log(doExponet2());

                    // FUNCTIONS WITH PARAMETERS
                console.log("FUNCTIONS WITH PARAMETERS")

                // SINGLE PARAMETER

function greetUser(name) {
    console.log("Hello " + name);
    console.log(`My name is ${name}`);
}

greetUser("Tobi");
greetUser("Susan");

// MULTIPLE PARAMETERS

function introduce(age,city){
    console.log("My name is Susan " + age);
    console.log("I am living in " + city);
}

introduce(25,"Abuja");


            // ANONYMOUS FUNCTION STATEMENTS
            console.log("ANONYMOUS FUNCTIONS / FUNCTION EXPRESSION");




            // ARROW FUNCTIONS
            console.log("ARROW FUNCTIONS");

const mySelf = ()=>{
 console.log("I am a guy");
}
mySelf();


                            // CALLBACK FUNCTIONS

 function calculateTotalPrice(price, taxRate) {
 return price + (price * taxRate);
}

 function processOrder(cb, itemName, price, sayHello) {
    const totalAmountPaid = cb(price, 0.1);

    console.log("Receipt of Payment");
    console.log(`Item: ${itemName}`);
    console.log(`Total Price: ${totalAmountPaid}`);
    sayHello();
 }
 processOrder(calculateTotalPrice, "Laptop", 10000, sayHello);


   function getDiscount(price, discountRate) {
    return price - (price * discountRate);
   }

   function handleOrder(cb,price,discountRate,itemsNames){
    const totalAmount = cb(price, discountRate);


   console.log("Black Friday sales");
   console.log(`Discount Amount: ${totalAmount}`);
   console.log(`items: ${itemsNames}`);

   }

   handleOrder(getDiscount, 50000, 0.2, "Car");

   



                // CLASS ACTIVITIES
                console.log("CLASS ACTIVITIES");

// write a function called getEvenNumbers that prints even numbers between 1 to 20.

 function getEvenNumbers() {
  for (let number = 1; number <= 20; number++) {
    if (number % 2 === 0) {
      console.log(number);
    }
  }
}

getEvenNumbers();

function getOddNumbers(){
    for (let number= 1; number <= 50; number++) {
        if (number % 2 !== 0) {
            console.log(number);
        }
    }
}
 getOddNumbers();

 function calculateTotal(item1,item2,item3) {
    return item1 + item2 + item3;

     console.log("The Total Price is " + calculateTotal);

    const freeDelivery = calculateTotal >= 10000 ? "Eligible for free delivery" : "Delivery fee Applies"
 }

 calculateTotal(2000,40000,50000);


 const calculateBMI = function(Weight, Height){
    return Weight / (Height ** 2);
 }

 const resultBMI = calculateBMI(100,10);
 console.log("The BMI weight is " + resultBMI + "KG/m^2");  



 