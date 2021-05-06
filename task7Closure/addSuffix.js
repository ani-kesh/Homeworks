"use strict";

/*
3.Write a function that returns an anonymous function, which transforms its input by adding a particular
suffix at the end.
*/

const addSuffix = (suffix) => {
  return (word) => {
    console.log(word + suffix);
  };
};

let addLess = addSuffix("less");
addLess("fear"); // "fearless"
addLess("ruth"); // "ruthless"

let addLy = addSuffix("ly");
addLy("hopeless"); // "hopelessly"
addLy("total"); // "totally"

addSuffix("ly")("hopeless");
