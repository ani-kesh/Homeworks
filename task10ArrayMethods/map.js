"use strict";

let array = [1, 2, 3, 4, 5, 6, "g"];

function map(array) {
  let changedArray = [];

  for (let i = 0; i < array.length; i++) {
    changedArray.push(changeElement(array[i]));
  }

  return changedArray;
}

function changeElement(element) {
  if (!isNaN(element)) return element ** 2;
  else return element;
}

console.log(map(array));
