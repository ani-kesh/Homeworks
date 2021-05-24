"use strict";

let Person = function Person(name, age) {
  let obj = {
    name,
    age,
  };
  obj.compareAge = function (obj1) {
    let message = obj1.name;
    if (this.age === obj1.age) {
      message += " is the same age as me.";
    } else if (this.age < obj1.age) {
      message += " is older than me.";
    } else {
      message += " is younger than me.";
    }
    return message;
  };
  return obj;
};

const p1 = Person("Samuel", 24);
const p2 = Person("Joel", 36);
const p3 = Person("Lily", 24);

console.log(p1.compareAge(p2));
console.log(p2.compareAge(p1));
console.log(p1.compareAge(p3));

// p1.compareAge(p2) ➞ "Joel is older than me."
// p2.compareAge(p1) ➞ "Samuel is younger than me."
// p1.compareAge(p3) ➞ "Lily is the same age as me."
