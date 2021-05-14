"use strict";

// 3.Write function that will zip arrays into object

// zipObject(["a", "b", "c"], [1, 2]);
// // => { 'a': 1, 'b': 2, c: null }

function zipObject(arr, arr1) {
  let entries = arr.map((element, index) => {
    return [element, arr1[index] === undefined ? null : arr1[index]];
  });

  let obj = entries.reduce((acc, [key, value]) => {
    return { ...acc, [key]: value };
  }, {});
  return obj;
}

console.log(zipObject(["a", "b", "c"], [1, 2]));
