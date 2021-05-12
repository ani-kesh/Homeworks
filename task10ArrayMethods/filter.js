"use strict";

let array = [1, 2, 3, 4, 5, 6, "g",false];

function filter(array) {
  let changedArray = [];

  for (let i = 0; i < array.length; i++) {
    let isValue = changeElement(array[i]);
    if (isValue) changedArray.push(isValue);
  }
  return changedArray;
}

function changeElement(element) {
  if (element % 2 === 0) return element;
  return false;
}

console.log(filter(array));
