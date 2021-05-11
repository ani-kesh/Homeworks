"use strict";

/*
12.Given an array, return the sum of numbers that are 18 or over.
``` javascript
const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43]
// 22 + 55 + 166 + 366 + 205 + 333 + 95 + 62 + 43 = 1347

*/
const array = [1, 22, 55, 166, 5, 366, 11, 205, 333, 95, 62, 10, 43];
function sum(array) {
  let sum = array.reduce(
    (acc, element) => (element > 18 ? acc + element : acc),
    0
  );
  return sum;
}

console.log(sum(array));
