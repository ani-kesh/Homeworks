"use strict";

const getWeekOfMonth = (date) => {
  return Math.ceil(date.getDate() / 7);
};
const result = getWeekOfMonth(new Date(2017, 10, 9));

console.log(result);
