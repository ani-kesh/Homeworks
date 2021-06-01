"use strict";

// Write a recursive function
// to find the sum of a given array.
// to find the factorial of a given natural N.

function sumArr(arr, sum = 0, ind = 0) {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr[0];

  if (arr.length - 1 === ind) return sum + arr[arr.length - 1];

  sum += arr[ind];
  return sumArr(arr, sum, ++ind);
}

console.log(sumArr([1, 3, 2, 3, 10]));

function factorial(numb, fact = 1) {
  if (numb === 0 || numb === 1) return 1;

  if (numb === 2) return fact * numb;

  fact *= numb;
  return factorial(--numb, fact);
}

console.log(factorial(4));
