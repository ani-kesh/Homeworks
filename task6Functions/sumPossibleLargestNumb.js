"use strict";

/*
5. Write a function, which receives a string, finds possible largest numbers in the string and returns their
sum.
*/

function sumPossibleLargestNumber(word) {
  word = word.split("");
  let numbers = [];

  for (let i = 0; i < word.length; i++) {
    if (!isNaN(word[i])) {
      let wordWithNMB = word.slice(i, word.length).join("");
      let numbersVal = parseInt(wordWithNMB);

      if (i !== 0 && word[i - 1] === "-") numbers.push(-numbersVal);
      else numbers.push(numbersVal);
      let numberLength = String(numbersVal).length;
      if (numberLength > 1) i += numberLength;
    }
  }

  var sum = numbers.reduce(function (a, b) {
    return a + b;
  }, 0);
  return sum;
}

let sumOfLargestNumber = sumPossibleLargestNumber("Wert12lop-12");
console.log(sumOfLargestNumber);
