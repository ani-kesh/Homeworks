"use strict";

let bracket = "(())())()(";

function brackets(bracket){
let beginBrackets = [];
let endBrackets = [];

for(let char of bracket){
    (char === "(")? beginBrackets.push(char):endBrackets.push(char);
}
// console.log(beginBrackets)
// console.log(endBrackets)

if(beginBrackets.length === endBrackets.length){
    let count = 0;

}
return false;
}

console.log(brackets(bracket));