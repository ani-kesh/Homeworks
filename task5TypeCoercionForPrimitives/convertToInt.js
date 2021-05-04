"use strict";

function convertToInt(stringForConvert) {
  stringForConvert = String(stringForConvert);

  stringForConvert = stringForConvert.trim();

  console.log("JS parseInt is equal " + parseInt(stringForConvert));

  let result = "";

  let isMinus = false;

  if (stringForConvert[0] === "-") {
    isMinus = true;

    stringForConvert = stringForConvert.slice(1, stringForConvert.length);
  }

  if (stringForConvert.length === 0) {
    result = NaN;
  } else {
    if (stringForConvert.length === 1 && !isNaN(stringForConvert)) {
      result = stringForConvert;
    } else {
      if (Number(stringForConvert[0]) === 0) {
        if (
          stringForConvert[1] === "x" &&
          stringForConvert.length > 2 && // not 0x
          (stringForConvert[2] === "0" ||
            stringForConvert[2] === "1" ||
            stringForConvert[2] === "2" ||
            stringForConvert[2] === "3" ||
            stringForConvert[2] === "4" ||
            stringForConvert[2] === "5" ||
            stringForConvert[2] === "6" ||
            stringForConvert[2] === "7" ||
            stringForConvert[2] === "8" ||
            stringForConvert[2] === "9" ||
            stringForConvert[2] === "a" ||
            stringForConvert[2] === "b" ||
            stringForConvert[2] === "c" ||
            stringForConvert[2] === "d" ||
            stringForConvert[2] === "e" ||
            stringForConvert[2] === "f")
        ) {
          result = "16system";
        } else {
          if (
            (stringForConvert[1] === "." ||
              stringForConvert[1] === " " ||
              isNaN(stringForConvert[1])) &&
            stringForConvert[1] !== "x"
          ) {
            result = "0";
          } else {
            result = NaN;
          }
        }
      } else {
        for (let index in stringForConvert) {
          if (!isNaN(stringForConvert[index])) {
            result += stringForConvert[index];
          } else {
            if (Number(index) === 0) {
              result = NaN;
            }

            break;
          }
        }
      }
    }
  }

  if (result === "16system") {
    let number16System = stringForConvert.slice(2, stringForConvert.length);

    let converted = 0;

    for (let i = number16System.length - 1; i >= 0; i--) {
      let numb16In10 = number16System[i];

      if (
        stringForConvert[2] === "0" ||
        stringForConvert[2] === "1" ||
        stringForConvert[2] === "2" ||
        stringForConvert[2] === "3" ||
        stringForConvert[2] === "4" ||
        stringForConvert[2] === "5" ||
        stringForConvert[2] === "6" ||
        stringForConvert[2] === "7" ||
        stringForConvert[2] === "8" ||
        stringForConvert[2] === "9" ||
        stringForConvert[2] === "a" ||
        stringForConvert[2] === "b" ||
        stringForConvert[2] === "c" ||
        stringForConvert[2] === "d" ||
        stringForConvert[2] === "e" ||
        stringForConvert[2] === "f"
      ) {
        if (number16System[i] === "a") numb16In10 = 10;
        else if (number16System[i] === "b") numb16In10 = 11;
        else if (number16System[i] === "c") numb16In10 = 12;
        else if (number16System[i] === "d") numb16In10 = 13;
        else if (number16System[i] === "e") numb16In10 = 14;
        else if (number16System[i] === "f") numb16In10 = 15;

        converted += numb16In10 * Math.pow(16, number16System.length - 1 - i);
      }
    }

    result = converted;
  }

  if (!isNaN(result) && isMinus && Number(result) !== 0) result = "-" + result;

  return result;
}

let convertedValue = convertToInt("0 10");
console.log("My parseInt is equal " + convertedValue);
