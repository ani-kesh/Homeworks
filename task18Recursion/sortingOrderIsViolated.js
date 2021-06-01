"use strict";

// 3.Given an array of numbers which is almost sorted in ascending order. Find the index
// where sorting order is violated.

function sortingOrderIsViolated(arr, index = 0) {
  if (arr.length === 1) return -1;
  if (arr.length === 2) {
    if (arr[0] <= arr[1]) return -1;
    else return 1;
  }

  if (arr[0] <= arr[1]) {
    arr.shift();
    index++;
    return sortingOrderIsViolated(arr, index);
  } else return ++index;
}

console.log(sortingOrderIsViolated([-9, -4, -4, 3, 12, 4, 5]));
