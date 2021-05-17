"use strict";

const formatDate = (date) => {
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let dateInStr =
    date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
  return dateInStr;
};

console.log("Actual output: ", new Date("2020-05-14"));
console.log("Code Output: ", formatDate(new Date("2020-05-14")));
console.log("Expected output", "14 May 2020");
