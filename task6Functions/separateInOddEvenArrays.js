"use strict";

function separateInOddEvenArrays(array) {
  let evenArray = [];
  let oddArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenArray.push(array[i]);
    } else {
      oddArray.push(array[i]);
    }
  }
  return [oddArray, evenArray];
}

let separatedArray = separateInOddEvenArrays([45, 12, 3, 6, 17, 0]);
console.log(separatedArray);
