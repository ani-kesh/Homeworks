"use strict";

/*
6.Write a function which remove elements with length <= 3

filterByLength(["kia", "tesla", "bmw", "mercedes"]); // ['tesla',
'mercedes']
*/

function filterByLength(array) {
  let filteredArray = [];
  for (let value of array) {
    let lengthValue = String(value).length;
    if (lengthValue > 3) filteredArray.push(value);
  }
  return filteredArray;
}

console.log(filterByLength(["kia", "tesla", "bmw", "mercedes"]));
