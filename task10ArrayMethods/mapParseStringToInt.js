"use strict";

/*
8.- Write a function which parses string integers. If it's not possible to
parse, then add null

``` javascript
arseInteger(["1", "2", "34"]); // [1, 2, 34];
parseInteger(["1", "px", "2323"]); // [1, null, 2323];

*/

let array = ["1", "px", "2323"];

function parseInteger(array) {
  let parsedArray = array.map((element) =>
    isNaN(element) ? null : parseInt(element)
  );
  return parsedArray;
}

console.log(parseInteger(array));
