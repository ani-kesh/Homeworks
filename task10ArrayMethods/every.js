"use strict";
let array = [2, 4, 6, 7];

function every(array) {
  let countTrue = 0;

  for (let i = 0; i < array.length; i++) {
    let isValue = checkElement(array[i]);

    if (isValue) {
      countTrue++;
    }
  }
  if (countTrue === array.length) return true;

  return false;
}

function checkElement(element) {
  if (element % 2 === 0) return true;

  return false;
}

console.log(every(array));
