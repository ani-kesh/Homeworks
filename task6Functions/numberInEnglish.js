"use strict";

/*12. Write a function, which will receive a number between 0 to 999,999 and spell out that number in English.*/
let numberInEnglish1 = numberInEnglish(12347);
console.log(numberInEnglish1);

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
  } else if (String(number % 10000).length >= 4) {
    inEnglish = returnThousands(number);
  }
  return inEnglish;
}

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

  let inEnglish = "";

  let thousands = parseInt(number / 1000);
  inEnglish +=
    String(thousands).length === 1
      ? ones[thousands]
      : String(thousands).length === 2
      ? returnTens(thousands)
      : returnHundreds(thousands);
  let hundreds = " thousands " + returnHundreds(number % 1000);

  return inEnglish + hundreds;
}
