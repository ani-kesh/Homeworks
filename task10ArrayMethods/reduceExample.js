"use strict";
let user = [
  {
    name: "John",
    "email-1": "email1@gmail.com",
    "email-2": "email2@gmail.com",
    "email-3": "email3@gmail.com",
    age: 30,
  },
];

let a = user.reduce((acc, obj) => {
  let emailKeys = Object.keys(obj).filter((el) => el.includes("email"));
  let emails = emailKeys.map((element) => obj[element]);
  acc.name = obj.name;
  acc.age = obj.name;
  acc.email = emails;
  return acc;
}, {});

console.log(a);
