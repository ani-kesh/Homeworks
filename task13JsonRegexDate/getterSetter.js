"use strict";

// 1.Write an object with getter/setterfield name.

// const obj = {
// name: [], // ['name', length][]
// set name,
// get name,
// }
// console.log(obj.name)
// obj.name = 'Vrezh, Artavazd';
// console.log(obj.name)

const obj = {
  _name: [],
  get name() {
    return obj._name;
  },
  set name(value) {
    obj._name = value.split(",").map((el) => {
      return [el.trim(), el.trim().length];
    });
  },
};

console.log(obj.name);
obj.name = "Vrezh, Artavazd";
console.log(obj.name);
