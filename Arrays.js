                       //   ARRAYS

const fruits = ["Apple", "Banana", "Mango", "Orange"];

console.table(fruits);

                      // CREATING AN ARRAY

                       // ARRAY LITERALS

let name = ["John", "Amara", "Evelyn"];

                    // ARRAY CONSTRUCTORS

const names = new Array (1,2,3,4,"Emma");

                       // EMPTY ARRAY

let colors = [];

            // ACCESSING THE ELEMENTS OF AN ARRAY

console.log(names[3]); 
// The output would be 4 because 4 has the index of 3 in the names array.

console.log(fruits[3]);
// The output would be orange because orange has the index of 3 in the fruits array.

console.log(name[2]);
// The output would be Evelyn because Evelyn has the index of 2 in the name array.


             // MODIFYING THE CONTENTS OF AN ARRAY

let cities = ["Abuja", "Lagos", "Enugu", "Ph"];

cities[2] = "Onitsha";

console.log(cities);
// The output would be ["Abuja", "Lagos", "Onitsha", "Ph"] because the index of 2 in the cities array has been modified from Enugu to Onitsha.


               // LENGTH PROPERTY OF AN ARRAY

console.log(names.length);
// The output would be 5 because the names array has 5 elements in it.

         // FINDING THE INDEX NUMBER OF AN ITEM IN AN ARRAY

console.log(fruits.indexOf("Orange"));
// The output would be 3 because Orange has the index of 3 in the fruits array.

  
           // ACCESSING THE LAST ELEMENT OF AN ARRAY

console.log(fruits[fruits.length - 1]);
// The output would be Orange because Orange is the last element in the fruits array.

                      // NESTED ARRAYS

const numbers = [
    [1,2,3,4,5],
    [6,7,8,9]
];

console.log(numbers[1] [2]);
// The output would be 8 because 8 is the element at index 2 in the second array of the numbers array.

const animals = [
    [
        ["Lion", "Tiger", "Leopadr"],
        ["Hippo", "Elephant", "Buffalo"],
    ],

    [
        ["Dog", "Cat", "Pig"],
        ["Goat", "Chicken", "Horse"],
    ]
];

console.log(animals[1][1][2]);
// The output would be Horse because Horse is the element at index 2 in the second array of the second array of the animals array.

                     // ARRAYS AND LOOPS

const gadgets = ["Phones", "Laptops", "Headsets", "Earpods", "Tablets"];
for (let i=0; i< gadgets.length; i++) {
console.log(gadgets[i]);
};
// This will log each element of the gadgets array to the console.

for ( const gadget of gadgets) {
    console.log(gadgets);
}
// This will log the entire gadgets array to the console for each element in the gadgets array.

                        // ARRAY METHODS

              // PUSH METHODS
// The push() method adds one or more elements to the end of an array and returns the new length of the array.

gadgets.push("PlayStation");

console.log(gadgets);

                  // POP () METHOD               //   
// The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

gadgets.pop();

console.log(gadgets);

                  // UNSHIFT METHOD
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

gadgets.unshift("Television");

console.log(gadgets);

                   // SHIFT() METHOD
// The shift() method removes the first element from an array and returns that element. This method changes the length of the array.

gadgets.shift();

console.log(gadgets);

            // concat () Method
// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

const combineArray = gadgets.concat(fruits);
console.log(combineArray);

                // JOIN () METHOD
// The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

const res = fruits.join("");

console.log(res);


                  // SPLICE METHOD
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

                 console.log("SPLICE METHOD");

const splicegadgets1 = gadgets.splice(1,3,);

console.log(splicegadgets1);
console.log(gadgets);



                    // forEach() Method


                   // The Map() Method
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

let number = [1,2,3,4,5,6];
let doubled = number.map(num => num * 2);

console.log(number);
// The output would be [1,2,3,4,5,6] because the number array has not been modified.

console.log(doubled);

// The output would be [2,4,6,8,10,12] because the doubled array has been created by multiplying each element in the number array by 2.

let freshFruits = [ "Apple", "Banana", "Mango", "Pawpaw"];
let upperFruits = freshFruits.map(freshFruits => freshFruits.toUpperCase());
console.log(upperFruits);

// The output would be ["APPLE", "BANANA", "MANGO", "PAWPAW"] because the upperFruits array has been created by converting each element in the freshFruits array to uppercase.


let pupils = [
{ name: "Fatima", grade: 90 },
{ name: "Aisha", grade: 100},
{ name: "Hawaa", grade: 99}
];

let namess = pupils.map( pupils => pupils.name);

console.log(pupils);
// The output would be [{ name: "Fatima", grade: 90 }, { name: "Aisha", grade: 100}, { name: "Hawaa", grade: 99}] because the pupils array has not been modified.

console.log(namess);
// The output would be ["Fatima", "Aisha", "Hawaa"] because the namess array has been created by extracting the name property from each object in the pupils array.


                 // The filter() Method
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

let numbers1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let evenNumbers = numbers1.filter(num => num % 2 === 0);

console.log(evenNumbers);

// The output would be [2,4,6,8,10,12,14,16,18,20] because the evenNumbers array has been created by filtering out all the even numbers from the numbers1 array.


let country = [ " Ghana", "Sudan", "Portugal", "England", "Nigeria", "Ivory Coast"];
let shortCountry = country.filter(country => country.length < 7);
console.log(shortCountry);
// The output would be ["Ghana", "Sudan", "England", "Nigeria"] because the shortCountry array has been created by filtering out all the countries with a length of less than 7 from the country array.

 let product2 = [
    {name:"Laptop", price: 10000, instore: true},
    {name: "Monitor", price: 200000, instore: false},
    {name: "iPhone", price: 450000, instore: true},
    {name: "Samsung", price: 5000, instore: false}
 ];

 let availableProduct = product2.filter( product2 => product2.instore );
 let cheapProduct = product2.filter(product2 => product2.price < 50000);

 console.log(availableProduct);

//  The output would be [{name:"Laptop", price: 10000, instore: true}, {name: "iPhone", price: 450000, instore: true}] because the availableProduct array has been created by filtering out all the products that are in store from the product2 array.


 console.log(cheapProduct);

//  The output would be [{name:"Laptop", price: 10000, instore: true}, {name: "Samsung", price: 5000, instore: false}] because the cheapProduct array has been created by filtering out all the products that are less than 50000 from the product2 array.

                //  The reduce() Method
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

let numbers2 = [1,2,3,4,5,6,7,8];
let sum = numbers2.reduce( (total, numbers) => total + numbers, 0);
console.log(sum);
// The output would be 36 because the sum variable has been created by adding all the elements in the numbers2 array.


let productPrices = [
    {item: "Shoes", prize:5000 },
    {item: "Plates", prize: 6000}
];

let sumOfPrices = productPrices.reduce((total, item) => total + item.prize, 0);

console.log(sumOfPrices);
// The output would be 11000 because the sumOfPrices variable has been created by adding all the prize properties in the productPrices array.

                    //  CHAINING ARRAY METHODS
// The chaining of array methods is a technique that allows you to call multiple array methods in a single line of code. This can make your code more concise and easier to read.

 let numbers3 = [1,2,3,4,5,6,7,8,9,10];

 let numbers4 = numbers3.filter(num => num % 2 === 0).map(num => num * num).reduce((total, num) => total + num, 0);

 console.log(numbers4);
// The output would be 220 because the numbers4 variable has been created by chaining the filter(), map(), and reduce() methods together.