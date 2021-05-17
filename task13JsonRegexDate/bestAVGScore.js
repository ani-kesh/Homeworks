"use strict";

// The input is object, which keys are student's
//names and values are array of their scores. Find the
// student with the best average score.

// getBestStudent({
// John: [100, 90, 80],
// Bob: [100, 70, 80],
// });
// // OUTPUT => "John"
// // John's avg = 90
// // Bob's avg = 83.33

let students = {
  John: [100, 90, 80],
  Bob: [100, 70, 80],
};

function getBestStudent(students) {
  let maxAvg = 0;
  return Object.keys(students).reduce((acc, el) => {
    let sum = 0;
    students[el].forEach((elem) => {
      sum += elem;
    });
    let avg = (sum / students[el].length).toFixed(2);

    if (avg > maxAvg) {
      maxAvg = avg;
      acc = el;
    }
    return acc;
  }, "");
}

console.log(getBestStudent(students));
