"use strict";

//The function should produce the same output even if dateStart is greater than dateEnd

let january = new Date(2018, 0, 1);
let march = new Date(2017, 2, 1);

function monthsInterval(start, end) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  if (start > end) [start, end] = [end, start];

  let intervalMonths = [];
  for (let i = start; i <= end; ) {
    intervalMonths.push(months[i.getMonth()]);
    i.setMonth(i.getMonth() + 1);
  }
  return intervalMonths;
}
console.log(monthsInterval(january, march));
