"use strict";

let a = [1, 4, 4];
for (var i = 0; i < a.length; i++) {
  console.log("for", i, a[i]);
}

let startVal = 0;
while (startVal < a.length) {
  console.log("for", startVal, a[startVal]);
  startVal++;
}

let startVal1 = 0;
do {
  console.log("for", startVal1, a[startVal1]);
  startVal1++;
} while (startVal1 < a.length);
