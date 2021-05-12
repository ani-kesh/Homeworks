"use strict";

let array = [1, 2, 1, 6, 1];

function splice(...args) {
  let [start, elements, ...valueForPush] = args;

  if (valueForPush.length > 0 && elements === 0) {
    return spliceAdd(start, valueForPush);
  } else return spliceRemove(start, elements);
}

function spliceAdd(start, valueForPush) {
  let arrayStart = array.filter((element, index) => index < start);
  let arrayEnd = array.filter((element, index) => index >= start);
  array = [...arrayStart, ...valueForPush, ...arrayEnd];
  return array;
}

function spliceRemove(start, elements) {
  if (elements !== 0) {
    let splicedArray = [];
    if (elements === undefined || start + elements > array.length)
      elements = array.length - start;

    for (let i = start; i < start + elements; i++) {
      splicedArray.push(array[i]);
    }
    array = splicedArray;
  }

  return array;
}

console.log(splice(2, 0, "a", "b"));
