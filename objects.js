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
                    