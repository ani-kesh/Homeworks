"use strict";
/*
13.Write a JavaScript function to get all possible subsets of length 3 of the given array. Assume that all
elements in the array are unique.
[[5, 9, 23], [5, 9, 0], [5, 9, -2], [5, 9, -1], [5, 23, 0], [5, 3, -2], [5, 23, -1], [5, 0, -2], [5, 0, -1],[5, -2,
-1], [9, 23, 0], [9, 23, -2], [9, 23, -1], [9, 0, -2], [9, 0, -1], [9, -2, -1], [23, 0, -2], [23, 0, -1], [23, -2,
-1], [0, -2,-1]]
*/

function getArrayPossibleSubsets(array) {
  let arrays = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      for (let k = j + 1; k < array.length; k++) {
        let arrayElements = [];
        arrayElements.push(array[i]);
        arrayElements.push(array[j]);
        arrayElements.push(array[k]);
        arrays.push(arrayElements);
      }
    }
  }
  return arrays;
}
let arrays = getArrayPossibleSubsets([5, 9, 23, 0, -2, -1]);
console.log(arrays);
