"use strict";

// 6.Given an array and a number N. Write a recursive function that rotates an array N
// places to the left. (Hint: to add element to the beginning use arr.unshift())

function rotateNArray(arr, numb) {
  if (numb >= 0) {
    function newArr(arr, numb, index) {
      if (index < numb) {
        let [head, ...tail] = arr;
        arr = [...tail, head];
        return newArr(arr, numb, ++index);
      }
      return arr;
    }
    return newArr(arr, numb, 0);
  } else {
    function newArr(arr, numb, index) {
      if (index < arr.length - 1) {
        let lastEl = arr.pop();
        arr.unshift(lastEl);
        return newArr(arr, numb, ++index);
      }
      return arr;
    }
    return newArr(arr, numb, arr.length - 1 + numb);
  }
}

console.log(rotateNArray(["a", "b", "c", "d", "e", "f", "g", "h"], 3));
console.log(rotateNArray(["a", "b", "c", "d", "e", "f", "g", "h"], -2));
