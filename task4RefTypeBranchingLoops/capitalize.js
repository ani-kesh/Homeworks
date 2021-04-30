"use strict";

capitalize("FRED");

function capitalize(word) {
  let wordStr = word.toString();

  let replacedStr = "";
  for (let i = 0; i < wordStr.length; i++) {
    if (i === 0) {
      replacedStr += wordStr[i].toUpperCase();
    } else {
      replacedStr += wordStr[i].toLowerCase();
    }
  }

  console.log(replacedStr);
}
