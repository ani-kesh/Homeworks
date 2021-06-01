"use strict";

//1.Write a recursive function to determine whether all digits of the number are odd or not.

function oddEven(number) {
  if (number < 10) {
    if (number % 2 === 0) return false;
    else return true;
  }

  let numb = number % 10;
  if (numb % 2 === 0) return false;
  let number1 = 0.1 * (number - numb);

  return oddEven(number1);
}

console.log(oddEven(77691));
