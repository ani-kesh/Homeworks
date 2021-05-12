"use strict";

let array = [1, 2, 3, 4, 5, 6, 4];

function find(array, fn) {
  for (let i = 0; i < array.length; i++) {
    let el = fn(array[i]);
    if (el) return el;
  }
}
function action(element) {
  if (element === 4) return element;
  return false;
}
console.log(find(array, action));
