"use strict";

/*
8.Write a function that accepts a string(a sentence) as a parameter and finds the longest word within the
string. If there are several words which are the longest ones, print the last word(words can be separated
by space, comma or hyphen).
*/

function findLongestString(sentence) {
  let sentenceArr = sentence.split(/[\s,-]+/);
  let length = sentenceArr.sort((a, b) => {
    return a.length - b.length;
  });

  return length[length.length - 1];
}

let longestString = findLongestString(
  "Which would be worse - to live as a monster, or to die as a good man?"
);
console.log(longestString);
