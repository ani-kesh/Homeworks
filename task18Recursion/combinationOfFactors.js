"use strict";

function subFactor(number, first = 2, eachProd = 1, dividers = []) {
  if (first > number || eachProd > number) return;
  if (eachProd === number) return console.log(...dividers);
  
  for (let i = first; i < number; i++) {
    if (number % i === 0) {
      dividers.push(i);
      subFactor(number, i, eachProd * i, dividers);
      dividers.pop();
    }
  }
}

subFactor(16);
