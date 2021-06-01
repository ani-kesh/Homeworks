"use strict";

// 7.Given a number. Write a function that calculates its sum of the digits and if that sum has
// more than 1 digit find the sum of digits of that number. Repeat that process if needed
// and return the result.

function sumOfDigits(number, sum = 0) {
  if (number < 10) {
    if (sum < 10 && number + sum < 10) return number + sum;
    else return sumOfDigits(number + sum, 0);
  }

  let symbol = number % 10;
  sum += symbol;
  number = 0.1 * (number - symbol);

  return sumOfDigits(number, sum);
}

console.log(sumOfDigits(14));
