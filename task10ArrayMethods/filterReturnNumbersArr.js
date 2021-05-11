"use strict";

/*
9.Given an array, return a new array that only includes the numbers.

``` javascript
const arr = [1, 2, 'a', true, {}, undefined, 55, false, 'hi', null,
166, NaN]
// [1, 2, 55, 166]
```
*/
const array = [1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, NaN];
function returnNumberFromArray(array) {
  let filteredArray = array.filter((element) => element === Number(element));
  return filteredArray;
}

console.log(returnNumberFromArray(array));
