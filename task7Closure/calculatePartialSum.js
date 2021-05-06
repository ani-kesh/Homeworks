"use strict";

/*
1.Create a function that implements partial sum
*/
const sum = (a) => {
  const calculateSum = (b) => {
    console.log(a + b);
  };
  return calculateSum;
};

sum(1)(2);

const addOne = sum(1);
addOne(2);

const addTen = sum(10);
addTen(2); // 12
addOne(4); // 5
addTen(10); //20
