"use strict";

/*
11.Given an array of integers, find the pair of adjacent elements that has the largest product and return that
product.
*/

function product(array) {
  let maxProduct = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] * array[i - 1] > maxProduct)
      maxProduct = array[i] * array[i - 1];
  }
  return maxProduct;
}

console.log(product([1, 22, 3, 1, 7, 4]));
