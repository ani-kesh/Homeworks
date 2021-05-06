"use strict";

/*
9.Given an array of numbers. Find the sum of numbersʼ quadratic which are even.
*/

function sumOfQuadraticEvenElement(array) {
  let sum = 0;
  for (let value of array) {
    if (value % 2 === 0) {
      sum += Math.pow(value, 2);
    }
  }
  return sum;
}

console.log(sumOfQuadraticEvenElement([2, 4, 5, 1, 0, 3, 4]));
