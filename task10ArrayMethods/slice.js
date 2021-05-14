"use strict";

let array = [1, 2, 1, 6, 1];

function slice(array, start, end) {
  if (start === undefined) start = 0;
  if (end === undefined || end > array.length) end = array.length;

  let slicedArray = [];
  for (let i = start; i < end; i++) {
    slicedArray.push(array[i]);
  }
  return slicedArray;
}

console.log(slice(array));
