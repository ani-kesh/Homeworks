"use strict";

/*
4. Given a word and a list of possible anagrams, select the correct sublist.
*/
function correctSubList(word, array) {
  word = word.split("").sort().join("");

  let correctSubString = [];
  for (let index in array) {
    let arrayWord = array[index].split("").sort().join("");
    if (word === arrayWord) correctSubString.push(array[index]);
  }
  return correctSubString;
}

let correctSubString = correctSubList("pencil", [
  "licnep",
  "circular",
  "pupil",
  "nilcpe",
  "leppnec",
]);
console.log(correctSubString);
