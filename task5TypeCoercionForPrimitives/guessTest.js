"use strict";

console.log(Number("0x77") === 0x77); //true
//console.log(Number("077") === "077"); //false
console.log(Number(" 12")); // 12
console.log(isNaN(" ")); //false
console.log(+""); //0
console.log(0.1 + 0.2 == 0.3); //false
console.log(9007199254740992 + 1 == 9007199254740992); //true-
console.log(9007199254740992 + 2 == 9007199254740992); //false
console.log(0 === +0); //true
console.log(+0 === -0); //true-
console.log(1 / "2"); //0.5
console.log(1 / 0); //Infinity
console.log(1 / -0); //-Infinity
console.log(Infinity / 6); //Infinity
console.log(Infinity / -256); //-Infinity
console.log(Infinity / Infinity); //NaN-
console.log(0 / 0); //NaN-
console.log(+true); //1
console.log(+false); //0
console.log(+null); //0
console.log(+undefined); //NaN-
console.log(parseInt(".2")); //NaN-
console.log(parseInt("077a")); // 77
console.log(parseInt("0x77a")); //1914-
console.log(parseInt("I’m the best value - said Infinity.")); //NaN
console.log(parseFloat("I’m the best value - said Infinity.")); //NaN
console.log(parseInt("Infinity is the best value!")); //NaN-
console.log(parseFloat("Infinity is the best value!")); //Infinity
console.log(parseFloat("12.78ff")); //12.78
