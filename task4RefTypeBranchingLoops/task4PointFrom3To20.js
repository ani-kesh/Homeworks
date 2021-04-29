"use strict";

/* 3.Given a positive integer. Bring the last digit of the numberto the beginning. Print the new number. If the
last digit of the inserted numberis 0, numberremains the same.
*/

let valueNumber = 850;
let valueNumberSTR = valueNumber.toString();
let replacedNum = valueNumber;
let lastChar = valueNumberSTR.slice(
  valueNumberSTR.length - 1,
  valueNumberSTR.length
);

if (lastChar !== "0" && valueNumberSTR.length > 1) {
  let numberWithoutLC = valueNumberSTR.slice(0, valueNumberSTR.length - 1);
  replacedNum = lastChar + numberWithoutLC;
}

console.log(replacedNum);

/*
 4.Check if a numberis a multiple of 3, 5 or 7 and output the appropriate message.
*/

let selectedNumber = 2;

let message = selectedNumber.toString();
if (
  selectedNumber % 3 === 0 ||
  selectedNumber % 5 === 0 ||
  selectedNumber % 7 === 0
) {
  message += " is a multiple of ";
  if (selectedNumber % 3 === 0) {
    message += "3";
  }
  if (selectedNumber % 5 === 0) {
    message += selectedNumber % 3 === 0 ? " and 5" : "5";
  }
  if (selectedNumber % 7 === 0) {
    if (selectedNumber % 3 === 0 || selectedNumber % 5 === 0) {
      message += " and 7.";
    } else {
      message += "7.";
    }
  } else {
    message += ".";
  }
} else {
  message += " is not a multiple of 3, 5 or 7.";
}

console.log(message);

/*
5.Given three numbers. Sort them by the ascending order.
 */

let a = 12;
let b = 6;
let c = 5;
let min;
let sortedArr = [];

if (a < b && a < c) {
  console.log(a);
  if (b < c) {
    console.log(b);
    console.log(c);
  } else {
    console.log(c);
    console.log(b);
  }
} else if (b < a && b < c) {
  console.log(b);
  if (a < c) {
    console.log(a);
    console.log(c);
  } else {
    console.log(c);
    console.log(a);
  }
} else {
  console.log(c);
  if (a < b) {
    console.log(a);
    console.log(b);
  } else {
    console.log(b);
    console.log(a);
  }
}

/*
6.Find the sign of product of three numbers without multiplication operator. Display the specified sign.
*/

let findSign = [1, -1, -1];

let zero = 0;
let minus = 0;

for (let keySign in findSign) {
  if (findSign[keySign] === 0) {
    zero++;
  } else if (findSign[keySign] < 0) {
    minus++;
  }
}

console.log("\n");
if (zero > 0) {
  console.log("unsigned");
} else if (minus % 2 === 0) {
  console.log("+");
} else {
  console.log("-");
}

/*
7.Insert a digit and a number. Check whetherthe digits contains in the number or not.
*/

let numberForSRCH = 5;
let textForSRCH = 14332;
let isFind = "No";
for (let i = 0; i < textForSRCH.toString().length; i++) {
  console.log(textForSRCH.toString()[i]);
  if (numberForSRCH === Number(textForSRCH.toString()[i])) {
    isFind = "Yes";
    break;
  }
}
console.log(isFind);

/*
8. Enter a number. Reverse its first and last digits. Print the new number.
*/

let numberForReverse = 4556;
let numberForReverse1 = numberForReverse.toString();
let lastChar1 = numberForReverse1
  .toString()
  .slice(numberForReverse1.toString().length - 1, numberForReverse1.length);
let firstChar1 = numberForReverse1.toString().slice(0, 1);

let withoutFirstLast = numberForReverse1
  .toString()
  .slice(1, numberForReverse1.length - 1);

let reversedNumber = lastChar1 + withoutFirstLast + firstChar1;

console.log(reversedNumber);

/*
    9.Insert a number. Print ‘yesʼ if the numberis prime, ‘noʼ otherwise.
  */

let isPrimeNumber = 63;
let isPrime = "No";

if (
  isPrimeNumber === 2 ||
  isPrimeNumber === 3 ||
  isPrimeNumber === 5 ||
  isPrimeNumber === 7 ||
  (isPrimeNumber % 2 !== 0 &&
    isPrimeNumber % 3 !== 0 &&
    isPrimeNumber % 5 !== 0 &&
    isPrimeNumber % 7 !== 0)
) {
  isPrime = "Yes";
}

console.log(isPrime);

/*
10.Given a number n ( n >= 0 ) . Print n Fibonacci number. (Fibonacci th series: 0, 1, 1, 2, 3, 5, 8 ..., ak = ak-1
+ ak-2)
   */

let numb2 = 0;
let arrFibonacci = [];

if (numb2 === 0) {
  arrFibonacci.push(0);
}
else if (numb2 === 1) {
  arrFibonacci.push(0, 1);
} else {
  arrFibonacci.push(0, 1);
  for (let i = 2; i < numb2; i++) {
    arrFibonacci[i] = arrFibonacci[i - 1] + arrFibonacci[i - 2];
  }
}

console.log(arrFibonacci);

/*
11.Insert a number. Calculate product and sum of the digits of the number. If product is divisible by the sum,
print the quotient, otherwise print the remainder.
*/

let number234 = 13;
let number234STR = number234.toString();
let sumNumber234 = 0;
let prodNumber234 = 1;
for(let i = 0; i < number234STR.length;i++){
    sumNumber234 += Number(number234STR[i]);
    prodNumber234 *= Number(number234STR[i]);
}

console.log(sumNumber234);
console.log(prodNumber234);

if(number234 === 0){
    console.log("Cannot calculate.");
}
else{
    if(prodNumber234%sumNumber234 === 0){
        console.log("Quotient is " + prodNumber234/sumNumber234);
    }   
    else{
        console.log("Remainder is " + prodNumber234%sumNumber234);
    } 
}

/*
12.Given a sentence with missing words and an array of words. Replace all ‘_ʼ in a sentence with the words
from the array.
*/
console.log("\n");

let wordForRep = "_123_";
let wordForRepArr = wordForRep.split("");
console.log(wordForRepArr);
let arrayWords = ["a","b"];
let count4 = 0;

for(let i = 0; i < wordForRepArr.length;i++){
    if(wordForRepArr[i] === "_"){
        let arrVal = arrayWords[count4];
        console.log(arrVal);
        wordForRepArr[i] = arrVal;
        count4++;
    }
}

console.log(wordForRepArr.join());

/*
13.Given a sentence with missing words and an array of words. Replace all ‘_ʼ in a sentence with the words
from the array.
*/

