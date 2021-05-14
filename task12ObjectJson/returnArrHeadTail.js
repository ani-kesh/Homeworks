"use strict";

// 2.Write functions that will return head and tail of Array

// getHead([1, 2, 3]);
// // => [1]
// getTail([1, 2, 3]);
// // => [2, 3]

let arr = [1, 2, 3];
function getHead(arr) {
  let [head] = arr;
  return [head];
}

function getTail(arr) {
  let [, ...tail] = arr;
  return tail;
}
console.log(getHead(arr));
console.log(getTail(arr));
