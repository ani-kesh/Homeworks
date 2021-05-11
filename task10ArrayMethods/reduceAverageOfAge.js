"use strict";

/*
13. Write a function which calculates average age of users.
``` javascript
const users = [
{
username: "Yuri Gagarin",
lang: "ru",
age: 56,
},
{
username: "Nil Armstrong",
lang: "ENG",
age: 54,
},
];
getAverageAge(users); // 55
*/

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    age: 56,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 54,
  },
];

function getAverageAge(array) {
  let sum = array.reduce((acc, element) => {
    return acc + element.age;
  }, 0);
  return sum / array.length;
}
console.log(getAverageAge(users));
