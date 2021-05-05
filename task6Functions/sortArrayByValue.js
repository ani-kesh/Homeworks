"use strict";

/*
16.Output the books sorted by the percent in descending order which readStatus is true.
    [
    { book: "Catcher in the Rye", readStatus: true, percent: 40 },
    { book: "Animal Farm", readStatus: true, percent: 20 },
    { book: "Solaris", readStatus: false, percent: 90 },
    { book: "The Fall", readStatus: true, percent: 50 },
    { book: "White Nights", readStatus: false, percent: 60 },
    { book: "After Dark", readStatus: true, percent: 70 },
    ];
*/

function sortReaderListByPercent(array) {
  let readStatusTrue = [];
  array = array.sort((a, b) => {
    return b["percent"] - a["percent"];
  });
  for (let index in array) {
    let elementArrForSort = array[index];
    if (elementArrForSort["readStatus"]) {
      readStatusTrue.push(elementArrForSort["book"]);
    }
  }
  return readStatusTrue;
}

let arrayForSort = [
  { book: "Catcher in the Rye", readStatus: true, percent: 40 },
  { book: "Animal Farm", readStatus: true, percent: 20 },
  { book: "Solaris", readStatus: false, percent: 90 },
  { book: "The Fall", readStatus: true, percent: 50 },
  { book: "White Nights", readStatus: false, percent: 60 },
  { book: "After Dark", readStatus: true, percent: 70 },
];
let sortedValue = sortReaderListByPercent(arrayForSort);
console.log(sortedValue);
