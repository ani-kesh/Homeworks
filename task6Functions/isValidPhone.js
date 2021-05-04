"use strict";

/*
3.Given a phone number. Write a function to clean it up, so it is valid. The rules are as follows:
    If the phone numberis less than 10 digits assume that it is a bad number
    If the phone numberis longerthan 10, then it is a bad number
    If the phone numberis 10 digits assume that it is good
    If the phone number consists of 11 symbols and the first one is + and others are numbers, then trim +
    and return remaining 10 digits.
    If the phone number contains + symbol more than one, considerit as a bad number.
    If the phone number contains + symbol not as the first character, considerit as a badnumber.
*/

function isValidPhoneNumber(number) {
  let isValid = number;
  number = number.split(" ");

  let numberSTR = "";
  for (let index in number) {
    if (number[index] !== "") {
      numberSTR += number[index];
      if (number[index] !== "+" && isNaN(number[index])) {
        isValid = "Not valid!";
      }
    }
  }

  if (isValid !== "Not valid!") {
    number = numberSTR;
    isValid = numberSTR;
    if (number.length !== 10) {
      if (number.length === 11 && number[0] === "+") {
        number = number.slice(1, number.length);
      } else {
        isValid = "Not valid!";
      }
    } else {
      if (number[0] === "+") {
        isValid = "Not valid!";
      } else {
        let countPlus = 0;
        let plusIsNotFirst = 0;
        for (let i = 0; i < number.length; i++) {
          if (number[i] === "+") {
            countPlus++;
            if (i !== 0) plusIsNotFirst++;
          }
        }
        if (countPlus > 1 || plusIsNotFirst > 0) {
          isValid = "Not valid!";
        }
      }
    }
  }
  return isValid;
}

let isValidPhone = isValidPhoneNumber("1231121114");
console.log(isValidPhone);
