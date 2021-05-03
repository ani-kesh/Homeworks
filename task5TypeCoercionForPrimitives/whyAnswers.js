"use strict";

console.log("" + 1 + 0); //10, because first operand is string and operator is +, convert all operations to line
console.log("" - 1 + 0); //-1, because equal (0 - 1 + 0)
console.log(true + false); //1, because true is 1 and false is 0
console.log(6 / "3"); //2, number/Number("3") = 6 / 3
console.log("2" * "3"); //6, Number("2")*Number("3")
console.log(4 + 5 + "px"); //9px , (number + number) + string
console.log("$" + 4 + 5); //$45, because first operand is string and operator is +, convert all operations to line
console.log("4" - 2); //2, because first operand is string and operator is -, this phrace equal , Number("4") - 2
console.log("4px" - 2); //NaN Number("4px") is NaN, NaN - 2 = NaN
console.log(7 / 0); //Infinity
console.log(" -9 " + 5); //-9 5,  because first operand is string and operator is +, convert all operations to line
console.log(" -9 " - 5); //-14, Number(" -9 ") equal -9
console.log(null + 1); //1, Number(null) is 0
console.log(undefined + 1); //NaN , Number(undefined) is NaN, NaN + 1 is NaN
