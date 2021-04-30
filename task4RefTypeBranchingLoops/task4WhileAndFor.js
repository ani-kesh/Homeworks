"use strict";

let i = 3;

while (i) {
  console.log(i--);
}

// 1, because when i equal 0, the condition is false

let k = 0;
while (++k < 5) console.log(k);

let j = 0;
while (j++ < 5) console.log(j);

//output is different, because ++k is adding after them compare, but j++ no

for (let i1 = 0; i1 < 5; i1++) console.log(i1);

for (let i2 = 0; i2 < 5; ++i2) console.log(i2);

//output is same, because i1++ and ++i2 are performed at the end of the cycle

for (let i3 = 2; i3 <= 10; i3++) {
  if (i3 % 2 === 0) console.log(i3);
}

let numb = 90;

while (numb < 100) {
  let promptValue = prompt("Input number");
  if (promptValue !== null && promptValue) {
    let promptValueNumb = Number(promptValue);
    numb = promptValueNumb;
  } else {
    numb = 100;
  }
}

let numb1 = 10;

for (let i5 = 2; i5 < numb1; i5++) {
  if (
    i5 === 2 ||
    i5 === 3 ||
    i5 === 5 ||
    i5 === 7 ||
    (i5 % 2 !== 0 && i5 % 3 !== 0 && i5 % 5 !== 0 && i5 % 7 !== 0)
  )
    console.log(i5);
}
