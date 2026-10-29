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

console.log(person.name);

// SQUARE BRACKET

console.log(person["age"]);


// MODIFYING AN OBJECT
person.grade = "B";

console.log(person.grade);

// ADDING A NEW PROPRTY

person.city = "Abuja";

console.log(person);

// DELETING A PROPERTY IN AN OBJECT
delete person.grade;

console.log(person);

// NESTED OBJECT

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

// MODIDFYING A NESTED OBJECT

student1.hobby = "Football";

console.log(student1);

// ADDING A NEW PROPERTY TO A NESTED OBJECT

student1.address["house number"] = 10;

console.log(student1);

// OBJECTS WITH METHODS

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
console.log(calculator.subtract(10,5));
console.log(calculator.multiply(10,5));

// THIS KEYWORD

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
console.log(person1.greet());
