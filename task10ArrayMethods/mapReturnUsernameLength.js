"use strict";

/*
7.Write a function which returns array of lengths of user names
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
getUsernameLengths(users); // [12, 13]
```

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
];

function getUsernameLengths(users) {
  return users.map((element) => element.username.length);
}

console.log(getUsernameLengths(users));
