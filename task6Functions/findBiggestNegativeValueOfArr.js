"use strict";

/*
14.Write a function, which receives an array as an argument which elements arrays of numbers. Find
product of biggest negative number of each array. If there is not any negative number, ignore that array.
Check that items of the given array are arrays.
*/
function findBiggestNegativeValueOfArr(arr) {
  let negativeValues = [];
  let notArray = true;

  for (let index in arr) {
    let sortedArr = arr[index]; //.sort((a,b)=>{return a-b;});
    let maxMinus = -Infinity;
    if (sortedArr.length > 1) notArray = false;
    for (let index1 in sortedArr) {
      if (sortedArr[index1] < 0 && sortedArr[index1] > maxMinus)
        maxMinus = sortedArr[index1];
    }
    if (maxMinus != -Infinity) negativeValues.push(maxMinus);
  }

  let multiplication = 1;
  for (let index in negativeValues) {
    multiplication *= negativeValues[index];
  }

  if (notArray) {
    return "Invalid Argument";
  } else {
    if (negativeValues.length > 0) {
      return multiplication;
    } else {
      return "No negatives";
    }
  }
}

let numbers = findBiggestNegativeValueOfArr([1, 2, 3]);
console.log(numbers);
