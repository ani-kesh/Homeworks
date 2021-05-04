"use strict";

/*
6.Write a function which receives two strings and removes appearances of the second string from the first
one.
*/
function removeStringByVal(string, word) {
  let replacedSTR = string.split(word).join("");

  return replacedSTR;
}

let replacedWord = removeStringByVal("This is some text.", "is");
console.log(replacedWord);
