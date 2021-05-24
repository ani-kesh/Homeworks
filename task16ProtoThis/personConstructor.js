"use strict";

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
  this.eat = function (food) {
    if (this.stomach.length < 10) this.stomach.push(food);
  };
  this.poop = function () {
    this.stomach.length = 0;
  };
  this.toString = function () {
    return this.name + ", " + this.age;
  };
}

let person1 = new Person("Ani", 28);
person1.eat("ice-cream");
person1.eat("ice-cream");
person1.eat("ice-cream");
person1.poop();
console.log(person1);
person1.eat("ice-cream");
person1.eat("ice-cream");
person1.eat("ice-cream");
person1.eat("ice-cream");
person1.eat("ice-cream");
person1.eat("ice-cream");
person1.eat("ice-cream");
person1.eat("ice-cream");
person1.eat("ice-cream");
person1.eat("ice-cream");
person1.eat("ice-cream");
person1.eat("ice-cream");
person1.eat("ice-cream");

console.log(person1);
console.log(person1.toString());
