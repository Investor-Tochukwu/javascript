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
console.log(fruits[3]);
console.log(name[2]);


// MODIFYING THE CONTENTS OF AN ARRAY

let cities = ["Abuja", "Lagos", "Enugu", "Ph"];

cities[2] = "Onitsha";

console.log(cities);

// LENGTH PROPERTY OF AN ARRAY

console.log(names.length);

// FINDING THE INDEX NUMBER OF AN ITEM IN AN ARRAY

console.log(fruits.indexOf("Orange"));

// Accessing the last element of an Array

console.log(fruits[fruits.length - 1]);

// NESTED ARRAYS

const numbers = [
    [1,2,3,4,5],
    [6,7,8,9]
];

console.log(numbers[1] [2]);

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

// ARRAYS AND LOOPS

const gadgets = ["Phones", "Laptops", "Headsets", "Earpods", "Tablets"];
for (let i=0; i< gadgets.length; i++) {
console.log(gadgets[i]);
};

for ( const gadget of gadgets) {
    console.log(gadgets);
}

                        // ARRAY METHODS

// PUSH METHODS

gadgets.push("PlayStation");

console.log(gadgets);

// POP () METHODS

gadgets.pop();

console.log(gadgets);

// UNSHIFT METHOD

gadgets.unshift("Television");

console.log(gadgets);

// SHIFT() METHOD

gadgets.shift();

console.log(gadgets);

// concat () Method

const combineArray = gadgets.concat(fruits);
console.log(combineArray);

// JOIN () METHOD

const res = fruits.join("");

console.log(res);


// SPLICE METHOD

const splicegadgets1 = gadgets.splice(1,3,);

console.log(splicegadgets1);
console.log(gadgets);



