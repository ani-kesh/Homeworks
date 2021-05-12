"use strict";
let array = [2, 4, 6, 7];

function some(array) {
  for (let i = 0; i < array.length; i++) {
    let isValue = checkElement(array[i]);

    if (isValue) {
      return true;
    }
  }

  return false;
}

function checkElement(element) {
  if (element % 7 === 0) return true;

  return false;
}

console.log(some(array));
