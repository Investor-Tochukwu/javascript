// FOR LOOPS
for ( let i = 1; i <= 20; i++) {
    console.log(i +" Tochukwu");
}

let sum = 0;
for (let i =1; i<= 100; i++) {
    sum += i;
}
console.log(sum);
console.log("The sum of numbers from 1 to 100 is : " + sum);

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

// WHILE LOOPS

let count = 10;
while(count >0) {
    console.log(count);
    count--;
}

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

// DO WHILE LOOPS
let number = 100;

do {
    console.log("The number is: " + number);
    number++;
} while (number >= 200);