"use strict";

let array = [1, 2, 1, 6, 1];

function splice(array, start) {
  let args = Array.from(arguments);
  if (args.length > 3) {
    let elements = [];
    for (let i = 3; i < args.length; i++) {
      elements.push(args[i]);
    }
    spliceAdd(array, start, elements);
  } else {
    spliceRemove(array, start);
  }
}

function spliceAdd(array, start, elements) {
  console.log(elements);

  let indexEl = 0;

  for (let i = start; i < array.length + elements.length; i++) {}

  return array;
}

function spliceRemove(array, start) {
  let splicedArray = [];
  if (elements === undefined || start + elements > array.length)
    elements = array.length - start;

  for (let i = start; i < start + elements; i++) {
    splicedArray.push(array[i]);
  }
  return splicedArray;
}

console.log(splice(array, 2, 0, "a", "b"));
