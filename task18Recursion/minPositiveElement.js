"use strict";

//2.Given an array of numbers. Write a recursive function to find its minimal positive
//element. (if such element does not exist, return -1).
function minPositiveElement(arr) {
  if (arr.length === 1) {
    if (arr[0] >= 0) return arr[0];
    else return -1;
  }

  if (arr[0] <= arr[1]) {
    arr.splice(1, 1);
    return minPositiveElement(arr);
  } else {
    if (arr[0] >= 0) {
      if (arr[1] < 0) arr.splice(1, 1);
      else arr.shift();
    } else arr.shift();
    return minPositiveElement(arr);
  }
}

console.log(minPositiveElement([-5, -9, -111, -1000, -7])); //
