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
          is16SystemSymbol(stringForConvert[2])
        ) {
          //16 system
          let number16System = stringForConvert.slice(2);

          let converted = 0;

          for (let i = number16System.length - 1; i >= 0; i--) {
            let numb16In10 = number16System[i];

            if (is16SystemSymbol(stringForConvert[2])) {
              numb16In10 = numberIn16System(stringForConvert[2]);
              converted +=
                numb16In10 * Math.pow(16, number16System.length - 1 - i);
            }
          }
          result = converted;
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

  if (!isNaN(result) && isMinus && Number(result) !== 0) result = "-" + result;

  return result;
}

function is16SystemSymbol(symbol) {
  let arr16System = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  if (arr16System.indexOf(symbol) >= 0) return true;
  return false;
}

function numberIn16System(value) {
  let arr16System = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  return arr16System.indexOf(value);
}
let convertedValue = convertToInt("456");
console.log("My parseInt is equal " + convertedValue);
