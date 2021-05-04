"use strict";

/*
7. Write a function to compute a new string from the given one by moving the first charto come afterthe
next two chars, so "abc" yields "bca". Repeat this process for each subsequent group of 3 chars. Ignore
any group of fewerthan 3 chars at the end.
*/

function groupOf3Chars(word) {
  let groups = [];
  for (let i = 0; i < word.length; i++) {
    if (i % 3 === 0) {
      if (word[i + 3] !== undefined) groups.push(word.slice(i, i + 3));
      else groups.push(word.slice(i, word.length));
    }
  }

  let replacedWord = "";
  for (let index in groups) {
    if (groups[index].length === 3) {
      replacedWord += groups[index].slice(1, 3) + groups[index].slice(0, 1);
    } else {
      replacedWord += groups[index];
    }
  }
  return replacedWord;
}

let groupOf3CharsVal = groupOf3Chars("aweyoolp");
console.log(groupOf3CharsVal);
