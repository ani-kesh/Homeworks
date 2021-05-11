"use strict";

/*

10.Write a function which remove users with language equals to 'ru'.
``` javascript
const users = [
{
username: "Yuri Gagarin",
lang: "ru",
},
{
username: "Nil Armstrong",
lang: "ENG",
},
];
filterUsers(users); // [{ username: "Nil Armstrong, lang: "ENG" }]

*/
const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
];

function filterUsers(users) {
  let filteredUser = users.filter((element) => element.lang !== "ru");
  return filteredUser;
}

console.log(filterUsers(users));
