"use strict";

/*
8.Determine if a word or phrase is an isogram. An isogram (also known as a "non pattern word") is a word
or phrase without a repeating letter.
*/

function isIsogram(word) {
  let isogram = "Isogram";
  for (let i = 0; i < word.length; i++) {
    for (let j = i + 1; j < word.length; j++) {
      if (word[i] === word[j] && word[i] != " ") {
        isogram = "Not isogram";
        break;
      }
    }
  }
  return isogram;
}

console.log(isIsogram("asd   fghjk"));
