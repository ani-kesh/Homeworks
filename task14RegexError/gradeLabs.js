"use strict";

let studentLabs2 = [
  {
    student: "Blake",
    myCode: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Jessica",
    runLab: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Mya",
    runLab: function (num) {
      return num * num;
    },
  },
];

function gradeLabs(arr) {
  return arr.map((element) => {
    let message = "";
    try {
      message = element.runLab(5);
    } catch (error) {
      message = error;
    }
    return message;
  });
}

console.log(gradeLabs(studentLabs2));
