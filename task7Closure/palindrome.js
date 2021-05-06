"use strict";

/*
10.Check whether string is palindrome, or not.
*/

function isPolindrome(word){ 
    for(let i = 0; i < word.length;i++){
       if(word[i] !== word[word.length-(i+1)])
       return false;
    }
    return true;
}

console.log(isPolindrome("wohfjhow"));