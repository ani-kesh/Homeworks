"use strict";

// Each year has 365 or 366 days. Given a string date representing a Gregorian calendar date formatted as
// month/day/year,return the day-number of the year. All input strings in the tests are valid dates.

function dayOfYear(date) {
  date = new Date(date);
  let startYear = new Date(date.getFullYear(), 0, 1);

  let count = 0;
  for (let i = startYear.getTime(); i <= date.getTime(); i += 8.64e7) {
    count++;
  }
  return count;
}
console.log(dayOfYear("12/13/2020"));
console.log(dayOfYear("12/17/2020"));
console.log(dayOfYear("11/16/2020"));
