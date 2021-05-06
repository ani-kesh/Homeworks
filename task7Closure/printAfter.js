"use strict";

/*
4.Create a function printAfter that calls its argument after printing hello world

const print = () => console.log("Elon Musk");

printAfter(print);
// 'hello, world'
// 'Elon Musk'
*/

const print = () => console.log("Elon Musk");

const printAfter = (print) => {
  console.log("hello, world");
  print();
};

printAfter(print);
// 'hello, world'
// 'Elon Musk'
