"use strict";

/*
11.Write a function, which receives two numbers as arguments and finds all numbers between them such
that each digit of the number is even. The numbers obtained should be printed in a comma-separated
sequence on a single line.
*/

function findEvenNumbersForInterval(firstNumber, lastNumber) {
  let numbers = "";
  for (let i = firstNumber; i <= lastNumber; i++) {
    if (i % 2 === 0) {
      let numberChar = String(i).split("");
      let isEven = true;
      for (let index in numberChar) {
        if (numberChar[index] % 2 !== 0) isEven = false;
      }
      if (isEven) numbers += i + ",";
    }
  }
  if (numbers.length > 0) {
    if (numbers[numbers.length - 1] === ",")
      numbers = numbers.slice(0, numbers.length - 1);
  } else {
    numbers = "Such numbers does not exist.";
  }

  return numbers;
}

let numbers = findEvenNumbersForInterval(99, 199);
console.log(numbers);
