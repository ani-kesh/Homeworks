"use strict";

/*
15.Given an object. Invert it (keys become values and values become keys). If there is more than key forthat
given value create an array.
*/

function invertObjectKeyToValue(object) {
  let newObject = {};
  for (let index in object) {
    if (typeof newObject[object[index]] !== "undefined") {
      let keyFind = [];
      let currentValue = newObject[object[index]];
      for (let i = 0; i < currentValue.length; i++) {
        keyFind.push(currentValue[i]);
      }
      keyFind.push(index);
      newObject[object[index]] = keyFind;
    } else newObject[object[index]] = index;
  }
  return newObject;
}

let invertedObject = invertObjectKeyToValue({ a: "1", b: "2", c: "2", d: "1" });
console.log(invertedObject);
