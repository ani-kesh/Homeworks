"use strict";

/*
7.Given an array. Determine whether it consists only from uniques or not.
*/

function isUniqueArray(array) {
  let isUnique = "Unique";

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        isUnique = "Not unique";
        break;
      }
    }
  }
  return isUnique;
}

console.log(isUniqueArray(["kia", "mercedes", "bmw", "jj", "ll"]));
