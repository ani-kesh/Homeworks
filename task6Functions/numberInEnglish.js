"use strict";

/*12. Write a function, which will receive a number between 0 to 999,999 and spell out that number in English.*/

let numberInEnglish1 = numberInEnglish(1245);

function numberInEnglish(number) {
  let ones = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let teens = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  let tens = [
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  let inEnglish = "";
  if (number % 10 === number) {
    inEnglish = ones[number];
  } else if (number % 100 === number) {
    inEnglish = returnTens(number);
  } else if (number % 1000 === number) {
    inEnglish = returnHundreds(number);
  } else if (number % 10000 === number) {
    //inEnglish = returnThousands(number);
  }
  return inEnglish;
}

console.log(numberInEnglish1);

function returnTens(number) {
  let ones = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let teens = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  let tens = [
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  let inEnglish = "";
  if (number < 20) {
    inEnglish = teens[number - 10];
  } else {
    let onesNumber = number % 10;
    let indexTeens = parseInt(number / 10);
    if (onesNumber === 0) {
      inEnglish = teens[indexTeens];
    } else {
      inEnglish = tens[indexTeens - 1] + " " + ones[onesNumber];
    }
  }

  return inEnglish;
}

function returnHundreds(number) {
  let ones = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let teens = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  let tens = [
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  let inEnglish = "";
  if (number % 100 === 0) {
    inEnglish = ones[number / 100] + " hundred";
  } else {
    inEnglish =
      ones[parseInt(number / 100)] + " hundred " + returnTens(number % 100);
  }
  return inEnglish;
}

function returnThousands(number) {
  let ones = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let teens = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  let tens = [
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  let inEnglish = "";

  if (number % 1000 === 0) {
    inEnglish =
      ones[parseInt(number / 1000)] +
      " thousands" +
      returnHundreds(number % 1000);
  }
  return inEnglish;
}
