"use strict";

let array = [1, 2, 3, 4, 5, 6, 4];

function findIndex(array, action) {
  for (let i = 0; i < array.length; i++) {
    let index = action(array[i], i);
    if (index >= 0) return index;
  }
  return -1;
}
let action = function (element, index) {
  if (element === 3) return index;
  return -1;
};
console.log(findIndex(array, action));
