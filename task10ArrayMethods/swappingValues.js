"use strict";

/*
4.Swapping Values using the Destructuring Assignment

let a = 3;
let b = 6;
console.log(a); //6
console.log(b); //3
*/

let a = 3;
let b = 6;

function swappingValues(a, b) {
  [a, b] = [b, a];
  console.log(a);
  console.log(b);
}

swappingValues(a, b);
