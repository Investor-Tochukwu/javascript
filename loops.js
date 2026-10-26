// FOR LOOPS

for ( let i = 1; i <= 20; i++) {
    console.log(i +" Tochukwu");
}

for ( let i=0; i <= 10; i++ ) {
    console.log(i);
}

let sum = 0;
for (let i =1; i<= 100; i++) {
    sum += i;
}
console.log(sum);
console.log("The sum of numbers from 1 to 100 is " + sum);

 for ( let i = 20; i >= 1; i--) {
    console.log("Bomb countdown: " + i);
 }

//  for (let i = 2; i <= 48; i += 2) {
//     console.log(i);
//  }

 for (let i = 0; i <= 50; i += 2) if (i % 2 === 0) {

    console.log(i);
 }


 for (let i = 7; i <= 84; i += 7) {
    console.log("7 times table:" + i);
 }

 for (let i = 1; i <= 12; i++){
    console.log(`12 * ${i} = ${12 * i}`);
 }

  const fruits = ["Pawpaw", "Mango", "Banana", "Orange"];
  console.log(fruits.length);
  console.log(fruits[1]);

  for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
  };

// WHILE LOOPS

console.log("WHILE LOOPS");

let count = 10;
while(count >0) {
    console.log(count);
    count--;
}

let calculation = 1;
while(calculation <= 10) {
    console.log(calculation)
    calculation++;
};

let password = "";
let attempts = 3;
while(password !== "secretly123" && attempts <= 3) {
    console.log("attempts" + (attempts));

    password = "secretly123";
    attempts++;
}

if (password === "secretly123") {
 console.log("Access granted");
} else {
    console.log("Too many attempts!");
}

let me =1;
while(me <= 5) {
    console.log("Tochukwu");
    me++;
}

// // DO WHILE LOOPS

let number = 100;

do {
    console.log("The number is: " + number);
    number++;
} while (number >= 200);

