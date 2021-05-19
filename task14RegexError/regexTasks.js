"use strict";

// Create a RegExp myRegExp to test if a string is a valid pin or not. A valid pin has:
// Exactly 4 or 6 characters.
// Only numerical characters (0-9).
// No whitespace.

let myRegExp = new RegExp("^([0-9]{6})$|^([0-9]{4})$");

console.log(myRegExp.test("4444 5"));

// const REGEXP = /abc/;
// let str = '<> <a href="/"> <input type="radio" checked> <b>';
// str.match(REGEXP);
// '<a href="/">', '<input type="radio" checked>', "<b>";

const REGEXP = /<(\w.*?)>/g;
let str = '<> <a href="/"> <input type="radio" checked> <b>';
console.log(str.match(REGEXP));
