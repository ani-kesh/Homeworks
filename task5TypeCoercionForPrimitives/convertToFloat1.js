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

      for (let index in stringBeforePoint) {
        if (!isNaN(stringBeforePoint[index])) {
          result += stringBeforePoint[index];
        }
      }
      let numberAfterPoint = 0;
      if (!isNaN(result)) {
        for (let index in stringAfterPoint) {
          if (!isNaN(stringAfterPoint[index])) {
            numberAfterPoint += Number(stringAfterPoint[index]);
          }
        }
      }

      if (numberAfterPoint !== 0) {
        result += "." + numberAfterPoint;
      }

      if (Number(result[0]) === 0) result = result.slice(1, result.length);
    }
  }
  return result;
}

let convertedValue = convertToFloat1("012.4");
console.log("My parseFloat is equal " + convertedValue);
