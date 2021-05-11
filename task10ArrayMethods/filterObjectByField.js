"use strict";

/*
11.Write a function which filters object by field.
``` javascript
const users = [
{
username: "Yuri Gagarin",
lang: "ru",
isAstronaut: true,
},
{
username: "Nil Armstrong",
lang: "ENG",
isAstronaut: true,
},
{
username: "Elon Musk",
isAstronaut: false,
},
];
filterByField(users, "isAstronaut"); // [{ username: "Yuri Gagarin",
lang: "ru", isAstronaut: true, }, { username: "Nil Armstrong, lang: "ENG"
}]
*/

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    isAstronaut: true,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    isAstronaut: true,
  },
  {
    username: "Elon Musk",
    isAstronaut: false,
  },
];

function filterByField(array, field) {
  let filteredArray = array.filter((element) => element[field]);
  return filteredArray;
}

console.log(filterByField(users, "isAstronaut"));
