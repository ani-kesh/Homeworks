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

console.log("\n3 point");
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
console.log("\n4 point");
console.log(message);

/*
5.Given three numbers. Sort them by the ascending order.
 */

console.log("\n5 point");

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
console.log("\n6 point");

let findSign = [1, -1, -1];

let zero = 0;
let minus = 0;

for (let keySign in findSign) {
  if (findSign[keySign] === 0) {
    zero++;
    break;
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
console.log("\n7 point");

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
console.log("\n8 point");

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
console.log("\n9 point");

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

console.log("\n10 point");

let numb2 = 0;
let arrFibonacci = [];

if (numb2 === 0) {
  arrFibonacci.push(0);
} else if (numb2 === 1) {
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
console.log("\n11 point");

let number234 = 13;
let number234STR = number234.toString();
let sumNumber234 = 0;
let prodNumber234 = 1;
for (let i = 0; i < number234STR.length; i++) {
  sumNumber234 += Number(number234STR[i]);
  prodNumber234 *= Number(number234STR[i]);
}

console.log(sumNumber234);
console.log(prodNumber234);

if (number234 === 0) {
  console.log("Cannot calculate.");
} else {
  if (prodNumber234 % sumNumber234 === 0) {
    console.log("Quotient is " + prodNumber234 / sumNumber234);
  } else {
    console.log("Remainder is " + (prodNumber234 % sumNumber234));
  }
}

/*
12.Given a sentence with missing words and an array of words. Replace all ‘_ʼ in a sentence with the words
from the array.
*/
console.log("\n12 point");

let wordForRep = "_123_";
let wordForRepArr = wordForRep.split("");
console.log(wordForRepArr);
let arrayWords = ["a", "b"];
let count4 = 0;

for (let i = 0; i < wordForRepArr.length; i++) {
  if (wordForRepArr[i] === "_") {
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
console.log("\n13 point");

let array23 = [8, 0, 1, "hey", 12, 5, true, "2", null, 7, 3];
let arrayNumb = [];

for (let i = 0; i < array23.length; i++) {
  if (typeof array23[i] === "number") {
    arrayNumb.push(array23[i]);
  }
}

console.log(arrayNumb);
/*
14.Given an array of strings and numbers. Print the number of integers and the
 number of strings in the
array.
*/

console.log("\n14 point");

let arrayStrAndNumb = [1, "10", "hi", 2, 3];
let quantityStr = 0;
let quantityNumb = 0;

for (let i = 0; i < arrayStrAndNumb.length; i++) {
  if (typeof arrayStrAndNumb[i] === "number") {
    quantityNumb++;
  }
  if (typeof arrayStrAndNumb[i] === "string") {
    quantityStr++;
  }
}

console.log("Numbers: " + quantityNumb + ", Strings: " + quantityStr);
/*
15.Given an array of strings. Find the strings with maximum and minimum lengths in array. Print the sum of
theirlengths.
*/
console.log("\n15 point");

let arraySTR = ["anymore", "raven", "me", "communicat11e"];
let arrayLengths = [];
let maxLength = 0;
let linLength = 0;
for (let i = 0; i < arraySTR.length; i++) {
  let arraySTRElement = arraySTR[i].toString();
  arrayLengths.push(arraySTRElement.length);
}

let minV = arrayLengths[0];
let sortedArr1 = [];
let minVal1 = arrayLengths[0];
let maxVal11 = arrayLengths[0];
for (let i = 0; i < arrayLengths.length; i++) {
  if (minVal1 - arrayLengths[i] > 0) minVal1 = arrayLengths[i];

  if (maxVal11 - arrayLengths[i] < 0) maxVal11 = arrayLengths[i];
}

let sumMaxMin = minVal1 + maxVal11;

console.log(sumMaxMin);

/*16.. Given an array of numbers and a number. Find the index of a first element which is equal to that number.
If there is not such a number, that find the index of the first element which is the closest to it.
*/

console.log("\n16 point");

let arr123 = [36, -12, 47, -58, 148, -55, -19, 10];
let numb123 = -56;

let closestVal = [];
let ind = 0;
let findNumb = false;
for (let i = 0; i < arr123.length; i++) {
  if (numb123 === arr123[i]) {
    console.log(i);
    findNumb = true;
  } else {
    ind = numb123 - arr123[i];
    closestVal.push(Math.abs(ind));
  }
}

let minClos = closestVal[0];
for (let i = 0; i < closestVal.length; i++) {
  if (minClos - closestVal[i] > 0) minClos = closestVal[i];
}
if (!findNumb) {
  for (let i = 0; i < closestVal.length; i++) {
    if (minClos === closestVal[i]) {
      console.log(i);
    }
  }
}

/*17.. Given a sentence as a string. Split it according to space and comma and create an array consisting of the
words of the array. The last word should not contain the last . or! .
*/
console.log("\n17 point");

let str1111 = "Keep your friends close, but your enemies closer. or";
let arrSPLTs = str1111.split(" ");
let arraySplit = [];

for (let arrSPLT in arrSPLTs) {
  let spltArrs = arrSPLTs[arrSPLT].split(",");
  for (let spltArr in spltArrs) {
    if (spltArrs[spltArr] !== "") {
      arraySplit.push(spltArrs[spltArr]);
    }
  }
}
console.log(arraySplit);
if (arraySplit[arraySplit.length - 1] === "or") {
  arraySplit.pop();
}
console.log(arraySplit);

/*
18.Given an array of a size smaller than 100. It consists of numbers from 0 to 99 in any order. Create a new
array where each element from that array is placed under the index of its value. Start from the smallest
value and end with the biggest one. If there are missing values, put in its places undefined.
*/
console.log("\n18 point");

let givenArr = [26, 30, 19, 5];
givenArr.sort(function(a, b){return a - b});
console.log(givenArr);

let existingArr = [];
for (let i = givenArr[0]; i <= givenArr[givenArr.length-1]; i++) {
  let val222 = undefined;
  for (let j = 0; j < givenArr.length; j++) {
    if (i === givenArr[j]) {
      val222 = i;
    }
  }
  existingArr.push(val222);
}
console.log(existingArr);

/*
19.Given an array consisting from the arrays of numbers (like a two-dimensional array). Find sum of each
row and print them as an array.
*/
console.log("\n19 point");

let arr765 = [
  [3, 4, 5],
  [1, 0, 0],
  [4, 5, 4],
  [8, 8, -1],
];
let sumValues = [];
for (let i = 0; i < arr765.length; i++) {
  let sum765 = 0;
  for (let j = 0; j < arr765[i].length; j++) {
    sum765 += arr765[i][j];
  }
  sumValues.push(sum765);
}
console.log(sumValues);

console.log("\n20 point");

/*20.Print the following pattern:
1
2 6
3 7 10
4 8 11 13
5 9 12 14 15


let arr1To15 = [];

for(let i = 1; i <= 15;i++){
  arr1To15.push(i);
}

let allArr = [];
let workQuantity = 0;
for(let i = 0; i < 5; i++){
  for(let j = 0; j < 5; j++){
    if(i === j || i > j){
     allArr.push(++workQuantity);
    }
    else{
      allArr.push("");
    }    
  }
}
  console.log(allArr);
*/

let size = 5;

let result = "";
for (let i = 1; i <= size; i++) {
  for (let j = 1, m = i; j <= i; j++) {
    result += `${m}`;
    m += size - j;
  }
  result += "\n";
}

console.log(result);
