"use strict";

/*
9. Write a function which receives an array and a number as arguments and returns a new array from the
elements of the given array which are larger than the given number.
*/

function greaterThenGivenNumber(array, number) {
  let greaterThenGivenNumberArr = [];
  for (let index in array) {
    if (array[index] > number) greaterThenGivenNumberArr.push(array[index]);
  }
  if (greaterThenGivenNumberArr.length > 0) return greaterThenGivenNumberArr;
  else return "Such values do not exist.";
}

let greaterThenGivenNumberArr = greaterThenGivenNumber(
  [1, 1, 2, -3, 0, 8, 4, 0],
  9
);
console.log(greaterThenGivenNumberArr);
