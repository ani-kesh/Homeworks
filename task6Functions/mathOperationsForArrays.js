"use strict";
/*
2.Write a function that calculates sum, difference, multiplication and division between given array elements
depending on passed operation symbol. Write appropriate function for each operation.
*/

function mathOperations(operation, array) {
  let value;
  switch (operation) {
    case "+":
      value = sumOfArrayElements(array);
      break;
    case "-":
      value = differenceOfArrayElements(array);
      break;
    case "*":
      value = multiplicationOfArrayElements(array);
      break;
    case "/":
      value = divisionOfArrayElements(array);
      break;
    default:
      value = 0;
  }
  return value;
}

function sumOfArrayElements(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function differenceOfArrayElements(array) {
  let difference = array[0];
  for (let i = 1; i < array.length; i++) {
    difference -= array[i];
  }
  return difference;
}

function multiplicationOfArrayElements(array) {
  let multiplication = 1;
  for (let i = 0; i < array.length; i++) {
    multiplication *= array[i];
  }
  return multiplication;
}

function divisionOfArrayElements(array) {
  let division = array[0];
  for (let i = 1; i < array.length; i++) {
    division /= array[i];
  }
  return division;
}

let sum = sumOfArrayElements([45, 12, 3, 6, 17, 0]);
console.log(sum);

let difference = differenceOfArrayElements([45, 12, 3, 6, 17, 0]);
console.log(difference);

let multiplication = multiplicationOfArrayElements([45, 12, 3, 6, 17, 0]);
console.log(multiplication);

let division = divisionOfArrayElements([45, 12, 3, 6, 17, 0]);
console.log(division);

let viaOperation = mathOperations("+", [45, 12, 3, 6, 17, 0]);
console.log(viaOperation);
