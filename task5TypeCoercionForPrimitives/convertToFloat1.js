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
      }
      /*else{
          let indexOfNaN = 0;
          for (let index in stringForConvert) {
              if (Number(index) > indexOfPoint && isNaN(stringForConvert[index])) {
                indexOfNaN = Number(index);
                break;
              }
          }
          if(indexOfNaN > 0){
            result = "0" + stringForConvert.slice(0,indexOfNaN);
          }
        }*/
    }
  }
  console.log(result);
}

convertToFloat1("a.11t2"); // if here input 0x a,b c,d,e,f and after another charachter, then code not working
