"use strict";

// 4.Given an array. Write a recursive function that removes the first element and returns the
// given array. (without using arr.shift())

function removeArrFirstEl(arr) {
  if (arr.length === 0 || arr.length === 1) return [];

  function pushArr(arr, acc, index) {
    if (index !== 0) {
      acc.unshift(arr[index]);
      index--;
      return pushArr(arr, acc, index);
    } else return acc;
  }
  return pushArr(arr, [], arr.length - 1);
}

console.log(removeArrFirstEl([6, 78, "n", 0, 1]));
