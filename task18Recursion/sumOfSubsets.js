"use strict";

function sumOfSubsets(arr) {
  function calcSubsets(arr, arr1 = [0, ...arr], index = 0, index1 = 1) {
    if (2 ** arr.length - 1 === arr1.length) {
      let sumAllElements = arr.reduce((acc, el) => (acc += el));
      arr1.push(sumAllElements);
      return arr1;
    }
    if (index === arr.length - 1) {
      let sumAllElements = arr.reduce((acc, el) => (acc += el));
      arr1.push(sumAllElements);
      return arr1;
    }

    if (index1 === arr.length && index !== arr.length)
      return calcSubsets(arr, arr1, index + 1, index + 2);

    let sumElements = arr[index] + arr[index1];
    arr1.push(sumElements);
    return calcSubsets(arr, arr1, index, ++index1);
  }

  return calcSubsets(arr, [0, ...arr]);
}

console.log(sumOfSubsets([2, 4, 5]));
