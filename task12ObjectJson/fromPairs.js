"use strict";

// 1.Write function that will do reverse operation for Object.entries

// fromPairs([
// ["a", 1],
// ["b", 2],
// ]);
//  => { 'a': 1, 'b': 2 }

function fromPairs(arr) {
  let obj = arr.reduce((acc, [key, value]) => {
    return { ...acc, [key]: value };
  }, {});
  return obj;
}

console.log(
  fromPairs([
    ["a", 1],
    ["b", 2],
  ])
);


