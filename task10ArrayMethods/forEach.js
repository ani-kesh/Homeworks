"use strict";

let array = [1, 2, 1, 6, 1];
function forEach(array, functionName) {
  for (let i = 0; i < array.length; i++) {
    functionName(array[i]);
  }
}

let sum = 0;
function sumElements(element) {
  sum += element;
}
let k = forEach(array, sumElements);
console.log(sum);
