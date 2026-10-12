//  SLICE METHOD

 const message = "Hello, I am new to Javascript!";
 console.log( message.slice(7,15));

//  charAt Method
const message2 = "How are you doing?";

console.log(message2.charAt(15));

// LENGTH METHOD

console.log(message2.length);

// toUpperCase Method and toLowerCase Method
console.log(message.toUpperCase());
console.log(message.toLowerCase());

// indexOf Method
console.log(message2.indexOf("are"));

// lastIndexOf Method
console.log(message2.lastIndexOf("o"));

// Includes Method
console.log(message2.includes("you"));

// Replace Method
console.log(message2.replace("doing", "feeling"));

// Concat Method
const message3 = " I am learning";
const message4 = " Javascript";
console.log(message3.concat ( " ", message4));


// I want to make the first letter of the message to be capitalized and the rest to be in lower case. I will use charAt, slice, toUpperCase and toLowerCase methods.

const myName = "tochukwu";
let firstLetter = myName.charAt(0).toUpperCase();
let restOfName = myName.slice(1).toLowerCase();
console.log(firstLetter + restOfName);
