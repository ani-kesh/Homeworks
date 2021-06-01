"use strict";

//Add brackets between letters.

function addBrackets(str, str1 = "", index = 0) {
  if (str1.length === str.length * 2) {
    if (str.length % 2 === 0) {
      let kk = str1.slice(0, -1);
      return kk
        .split("")
        .filter((el, ind) => ind != str.length - 1)
        .join("");
    } else return str1.slice(0, -1);
  }

  str1.length < str.length - 1
    ? (str1 += str[index] + "(")
    : (str1 += str[index] + ")");

  index += 1;
  return addBrackets(str, str1, index);
}

console.log(addBrackets("aaaaaaa"));
