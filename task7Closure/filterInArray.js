"use strict";

/*
 5.Write a function that implements filtering in array

filterFalsyValues(values); // [true, {}, { name: "Elon" }];
filterFalsyValues(["hello", 1233, []]); // ['hello', 1233, []]
*/

const values = ["hello", 1233, []];

function filterFalsyValues(values) {
  let trueValues = [];
  for (let value of values) {
    if (value) trueValues.push(value);
  }
  return trueValues;
}

console.log(filterFalsyValues(values));
