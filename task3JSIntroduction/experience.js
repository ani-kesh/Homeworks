"use strict";

//start Chapter Task 1
let nameVal = "Ani";

console.log(`hello ${1}`); // hello 1, because it number
console.log(`hello ${"name"}`); // hello name, because it string
console.log(`hello ${nameVal}`); // hello Ani, because it variable and variable equal Ani

//end Chapter Task 1

//start Chapter Task 2

console.log("\nTask2\n");

console.log(5 > 4); //true, because 5 and 4 numbers
console.log("apple" > "pineapple"); //false, in string a is less than p
console.log("2" > "12"); //true, here 2 and 12 is strings, and 0 element 2 is greater than 1
console.log(undefined == null); //true, == not check the types
console.log(undefined === null); //false,because === check types too
console.log(null == "\n0\n"); //false, because 0 != null
console.log(null === +"\n0\n"); //false, because 0 not equal null and types is different too

//end Chapter Task 2

//start Chapter Task 3

console.log("\nTask3\n");

//alert(null || 2 || undefined); alert 2, because null is false and first true is 2

//alert(alert(1) || 2 || alert(3));  alert 1, because alert(1) is true

//alert(1 && null && 2); alert null, because first false is null

//alert(alert(1) && alert(2));  alert 1, after alert undefined. alert 1, because it's first false,  because press button returned undefined

//alert(null || (2 && 3) || 4); alert 3, because null || 2 is 2, 2 && 3 is 3, because i is last operand, 3 || 4  is 3, because 3 is first operand

//start Check the range between 14 and 90

let age;

age = 15;

if (age >= 14 && age <= 90) {
  console.log(true);
} else {
  console.log(false);
}

//end the range between 14 and 90

//start Check the range outside 14 and 90
//1 version

if (age < 14 && age > 90) {
  console.log(true);
} else {
  console.log(false);
}
//2 version
if (!(age >= 14 && age <= 90)) {
  console.log(true);
} else {
  console.log(false);
}
//end Check the range outside 14 and 90

//prompt
let login = prompt("Login");
if (login !== null) {
  if (login === "Admin") {
    let password = prompt("Password");
    if (password !== null) {
      if (password === "TheMaster") {
        alert("Welcome!");
      } else {
        alert("Wrong password");
      }
    }
  } else {
    alert("I don't know.");
  }
}

//end Chapter Task 3

//start Chapter Task 4

//end Chapter Task 4
