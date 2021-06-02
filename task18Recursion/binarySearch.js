"use strict";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const findByVal = (arr, value) => {
  if (arr.length === 0 || arr[0] > value || arr[arr.length - 1] < value)
    return -1;

  let index = Math.floor(arr.length - 1 / 2);
  if (value === arr[index]) return index;

  if (value > arr[index]) {
    return findByVal(arr.slice(index), value);
  } else {
    return findByVal(arr.slice(0, index), value);
  }
};

console.log(findByVal(numbers, 22));
