"use strict";
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

/*12. Write a function, which will receive a number between 0 to 999,999 and spell out that number in English.*/
let numberInEnglish1 = numberInEnglish(99999);
console.log(numberInEnglish1);

function numberInEnglish(number) {
  let inEnglish = "";
  if (number < 10) {
    inEnglish = ones[number];
  } else if (number < 100) {
    inEnglish = returnTens(number);
  } else if (number < 1000) {
    inEnglish = returnHundreds(number);
  } else if (number < 1000000) {
    inEnglish = returnThousands(number);
  }
  return inEnglish;
}

function returnTens(number) {
  let inEnglish = "";
  if (number < 20) {
    number < 10 ? (inEnglish = ones[number]) : (inEnglish = teens[number - 10]);
  } else {
    let onesNumber = number % 10;
    let indexTeens = parseInt(number / 10);
    if (onesNumber === 0) {
      inEnglish = tens[indexTeens - 1];
    } else {
      inEnglish = tens[indexTeens - 1] + " " + ones[onesNumber];
    }
  }
  return inEnglish;
}

function returnHundreds(number) {
  let inEnglish = "";
  if (number < 10) {
    inEnglish = ones[number];
  } else if (number < 100) {
    inEnglish = returnTens(number);
  } else {
    if (number % 100 === 0) {
      inEnglish = ones[number / 100] + " hundred";
    } else {
      inEnglish =
        ones[parseInt(number / 100)] + " hundred " + returnTens(number % 100);
    }
  }

  return inEnglish;
}

function returnThousands(number) {
  let inEnglish = "";
  let thousands = parseInt(number / 1000);
  let hundreds = number % 1000;

  if (thousands < 10) {
    inEnglish = ones[thousands];
  } else if (thousands < 100) {
    inEnglish = returnTens(thousands);
  } else {
    inEnglish = returnHundreds(thousands);
  }
  inEnglish += " thousand ";
  if (number % 1000 !== 0 && number % 10000 !== 0 && number % 100000 !== 0) {
    inEnglish += returnHundreds(hundreds);
  }

  return inEnglish;
}
