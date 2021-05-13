"use strict";

let arr = [4, 5, 6, 5, 5, 4, 4, 4, 3];

function sortProduct(arr) {
  let arrSort = arr.sort((a, b) => a - b);

  let repeats = [];
  for (let value of arrSort) {
    let countRepeat = 0;
    for (let value1 of arrSort) {
      if (value === value1) countRepeat++;
    }
    repeats.push(countRepeat);
  }
  let sortByRepeats = [];
  for (let i = 0; i < repeats.length; i++) {
    for (let j = 0; j < repeats.length; j++) {
      if (i === repeats[j]) {
        sortByRepeats.push(arrSort[j]);
      }
    }
  }
  return sortByRepeats;
}

console.log(sortProduct(arr));
