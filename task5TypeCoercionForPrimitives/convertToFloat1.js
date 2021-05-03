"use strict";

function convertToFloat1(stringForConvert) {
  stringForConvert = String(stringForConvert);

  let result = "";
  let isMinus = false;

  console.log("JS parseFloat is equal " + parseFloat(stringForConvert));

  if (stringForConvert.indexOf("Infinity") >= 0) {
    result == "Infinity";
  } else if (stringForConvert.indexOf("-Infinity") >= 0) {
    result == "-Infinity";
  } else {
    if (stringForConvert[0] === "-") {
      isMinus = true;
      stringForConvert = stringForConvert.slice(1, stringForConvert.length);
    }

    let indexOfPoint = stringForConvert.indexOf(".");

    if (indexOfPoint === 0) {
      if (
        stringForConvert.length === 1 ||
        (typeof stringForConvert[1] !== "undefined" &&
          isNaN(stringForConvert[1]))
      ) {
        result = NaN;
      } else {
        let indexOfNaN = 0;
        for (let index in stringForConvert) {
          if (Number(index) > indexOfPoint && isNaN(stringForConvert[index])) {
            indexOfNaN = Number(index);
            break;
          }
        }
        if (indexOfNaN > 0) {
          result = "0" + stringForConvert.slice(0, indexOfNaN);
        }
      }
    } else if (indexOfPoint < 0) {
      result = convertToInt(stringForConvert);
    } else {
      let stringBeforePoint = stringForConvert.slice(0, indexOfPoint);
      let stringAfterPoint = stringForConvert.slice(
        indexOfPoint + 1,
        stringForConvert.length
      );

      let resultBeforePoint = convertToInt(stringBeforePoint);
      console.log(stringBeforePoint);
      if (!isNaN(resultBeforePoint)) {
        let resultAfterPoint = convertToInt(stringAfterPoint);
        if (!isNaN(resultAfterPoint)) {
          result = resultBeforePoint + "." + resultAfterPoint;
        }
      } else {
        result = resultBeforePoint;
      }

      /*


      should be code

     */
    }
  }
  console.log(result);
}

convertToFloat1("12."); // if here input 0x a,b c,d,e,f and after another charachter, then code not working

function convertToInt(stringForConvert) {
  stringForConvert = String(stringForConvert);

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
            (stringForConvert[1] === "." || isNaN(stringForConvert[1])) &&
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
