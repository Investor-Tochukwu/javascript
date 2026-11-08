               // CREATING OBJECTS
// OBJECTS LITERALS

let student = {
    name: "John",
    age: 30,
    grade: "A",
    isEnrolled: true
};

// OBJECT CONTRUCTORS
const person = new Object ();
person.name = "John Okafor";
person.age = 50;
person.grade = "A";
person.about = function() {
    return `${this.name} is an ${this.grade} student`;

};




// EMPTY OBJECT

let emptyObject = {};

// ACCESSING THE PROPERTIES OF AN OBJECT

                  // DOT NOTATION
// The dot notation is a way to access the properties of an object using a dot (.) followed by the property name.

console.log(person.name);
// The output would be John Okafor because the name property of the person object has been accessed using the dot notation.

               // SQUARE BRACKET
// The square bracket notation is a way to access the properties of an object using square brackets ([]) followed by the property name.

console.log(person["age"]);
// The output would be 50 because the age property of the person object has been accessed using the square bracket notation.


                // MODIFYING AN OBJECT
// The modify an object is a way to change the value of an existing property in an object.

person.grade = "B";

console.log(person.grade);
// The output would be B because the grade property of the person object has been modified from A to B.


          // ADDING A NEW PROPRTY
// The adding a new property is a way to add a new property to an existing object.

person.city = "Abuja";

console.log(person);
// The output would be { name: "John Okafor", age: 50, grade: "B", about: [Function], city: "Abuja"} because the city property has been added to the person object.

          // DELETING A PROPERTY IN AN OBJECT

// The deleting a property in an object is a way to remove an existing property from an object.

delete person.grade;

console.log(person);
// The output would be { name: "John Okafor", age: 50, about: [Function], city: "Abuja"} because the grade property has been deleted from the person object.

                // NESTED OBJECT
// A nested object is an object that is contained within another object. This allows you to create complex data structures that can represent real-world entities.

const student1 =  {
    name: "Ebuka",
    age: 30,
    hobby:"Reading",
    address: {
        street: "Byazhin",
        zipcode: 10001,
        city: "Abuja"
    }
}

           // ACCESSING A NESTED OBJECT

console.log(student1.address.city);
// The output would be Abuja because the city property of the address object has been accessed using the dot notation.


            // MODIDFYING A NESTED OBJECT

student1.hobby = "Football";

console.log(student1);
// The output would be { name: "Ebuka", age: 30, hobby: "Football", address: { street: "Byazhin", zipcode: 10001, city: "Abuja"}} because the hobby property of the student1 object has been modified from Reading to Football.


            // ADDING A NEW PROPERTY TO A NESTED OBJECT
// The adding a new property to a nested object is a way to add a new property to an existing nested object.

 student1.address["house number"] = 10;

console.log(student1);

// The output would be { name: "Ebuka", age: 30, hobby: "Football", address: { street: "Byazhin", zipcode: 10001, city: "Abuja", "house number": 10}} because the house number property has been added to the address object.


                    // OBJECTS WITH METHODS
// An object method is a function that is associated with an object. It can be used to perform actions on the object or to retrieve information from the object.

let calculator = {
    add: function(a,b){
        return a + b;
    },
    subtract: function(a,b){
        return a - b;
    },
     
    // SHORTHAND METHOD
    multiply(a,b){
        return a * b;
    }
};

console.log(calculator.add(10,5));
// The output would be 15 because the add method of the calculator object has been called with the arguments 10 and 5, and it returns the sum of the two numbers.

console.log(calculator.subtract(10,5));
// The output would be 5 because the subtract method of the calculator object has been called with the arguments 10 and 5, and it returns the difference of the two numbers.

console.log(calculator.multiply(10,5));
// The output would be 50 because the multiply method of the calculator object has been called with the arguments 10 and 5, and it returns the product of the two numbers.


                 // THIS KEYWORD
// The this keyword is a reference to the current object. It can be used to access the properties and methods of the current object.

let person1 = {
    firstName : "Edeh",
    lastName : "Tochukw",
    fullName : function () {
        return this.firstName + " " + this.lastName;
    },
    greet() {
        return "Hello, my name is " + this.lastName;
    }
};

console.log(person1.fullName());
// The output would be Edeh Tochukw because the fullName method of the person1 object has been called, and it returns the concatenation of the firstName and lastName properties of the person1 object.

console.log(person1.greet());
// The output would be Hello, my name is Tochukw because the greet method of the person1 object has been called, and it returns a greeting message that includes the lastName property of the person1 object.

                    //    OBJECTS METHODS
                    
                        //  OBJECT.KEYS()
// The Object.keys() method is a built-in method in JavaScript that returns an array of a given object's own enumerable property names, in the same order as we get with a normal loop.

let person2 = {
    name : "Amaka",
    age: 30,
    city: "Lagos"
};
let keys = Object.keys(person2);
console.log(keys);
// The output would be ["name", "age", "city"] because the Object.keys() method has been called on the person2 object, and it returns an array of the object's own enumerable property names.


Object.keys(person2).forEach(key =>{
    console.log(key + ": " + person2[key]);
});

// The output would be name: Amaka, age: 30, city: Lagos because the Object.keys() method has been called on the person2 object, and it returns an array of the object's own enumerable property names. The forEach() method is then used to iterate over the array of keys, and for each key, the corresponding value is accessed using bracket notation and logged to the console.


                            // OBJECT.VALUES()
// The Object.values() method is a built-in method in JavaScript that returns an array of a given object's own enumerable property values, in the same order as we get with a normal loop.

let values = Object.values(person2);
console.log(values);
// The output would be ["Amaka", 30, "Lagos"] because the Object.values() method has been called on the person2 object, and it returns an array of the object's own enumerable property values.

let scores = {
    math: 90,
    english: 80,
    science: 70
};

let totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);
console.log(totalScore);
// The output would be 240 because the Object.values() method has been called on the scores object, and it returns an array of the object's own enumerable property values. The reduce() method is then used to calculate the total score by adding all the values in the array.


                            // OBJECT.ENTRIES()
// The Object.entries() method is a built-in method in JavaScript that returns an array of a given object's own enumerable property [key, value] pairs, in the same order as we get with a normal loop.

let entries = Object.entries(person2);
console.log(entries);
// The output would be [["name", "Amaka"], ["age", 30], ["city", "Lagos"]] because the Object.entries() method has been called on the person2 object, and it returns an array of the object's own enumerable property [key, value] pairs.

for (let [key, value] of Object.entries(person2)) {
    console.log(`${key}: ${value}`);
};

// The output would be name: Amaka, age: 30, city: Lagos because the Object.entries() method has been called on the person2 object, and it returns an array of the object's own enumerable property [key, value] pairs. The for...of loop is then used to iterate over the array of entries, and for each entry, the key and value are destructured and logged to the console.

        //   OBJECT.ASSIGN()
// The Object.assign() method is a built-in method in JavaScript that copies the values of all enumerable own properties from one or more source objects to a target object. It returns the target object.

let target = { a: 1, b: 2 };
let source = { b: 4, c: 5 };
Object.assign(target, source);
console.log(target);
// The output would be { a: 1, b: 4, c: 5 } because the Object.assign() method has been called with the target object as the first argument and the source object as the second argument. The method copies the values of all enumerable own properties from the source object to the target object and returns the target object.  
Object.assign(source, target);
console.log(source);
// The output would be { b: 4, c: 5, a: 1 } because the Object.assign() method has been called with the source object as the first argument and the target object as the second argument. The method copies the values of all enumerable own properties from the target object to the source object and returns the source object.

let person3 = {name: "Isaac"};
let person4 = {age: 30, city: "Abuja"};
Object.assign(person3, person4);
console.log(person3);
// The output would be { name: "Isaac", age: 30, city: "Abuja" } because the Object.assign() method has been called with the person3 object as the first argument and the person4 object as the second argument. The method copies the values of all enumerable own properties from the person4 object to the person3 object and returns the person3 object.

let combined = Object.assign({}, person3, person4);
console.log(combined);
// The output would be { name: "Isaac", age: 30, city: "Abuja" } because the Object.assign() method has been called with an empty object as the first argument, the person3 object as the second argument, and the person4 object as the third argument. The method copies the values of all enumerable own properties from the person3 and person4 objects to the empty object and returns the new combined object.