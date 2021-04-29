"use strict";

/*
What is this code going to show?

*/

let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;
shoppingCart.push("Banana");

console.log(fruits.length); // 4, because arrays length was 3, then pushed 4th element

/*
Let’s try 5 array operations.

Create an array styles with items “Jazz” and “Blues”.
Append “Rock-n-Roll” to the end.
Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
Strip off the first value of the array and show it.
Prepend Rap and Reggae to the array.
*/

let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");

console.log(styles);

if (styles.length % 2 === 1) {
  styles[Math.floor(styles.length / 2)] = "Classics";
}

console.log(styles);

let firstValue = styles.shift();

console.log(firstValue);
console.log(styles);

styles.unshift("Rap", "Reggae");
console.log(styles);

/*
What is the result? Why?

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // ?

returned 
a,b,let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); 

because pushed function in array , called 2th element , and this here is arr
*/

/*
Write the function sumInput() that:

Asks the user for values using prompt and stores the values in the array.
Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
Calculates and returns the sum of array items.
P.S. A zero 0 is a valid number, please don’t stop the input on zero.
*/

function sumInput() {
  let inputNumbers = [];
  let first = false;

  do {
    let inputs = prompt("Input number");

    if (inputs !== null && parseInt(inputs).toString() !== "NaN") {
      inputNumbers.push(inputs);
    } else {
      first = true;
    }
  } while (!first);

  let sum = 0;

  for (let i = 0; i < inputNumbers.length; i++) {
    sum += Number(inputNumbers[i]);
  }
  return sum;
}

//sumInput();
