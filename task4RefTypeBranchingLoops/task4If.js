"use strict";

console.log("1\n");

if ("0") {
  console.log("Hello");
}

console.log("2\n");

function AskName(nameValue) {
  let question = "What is the “official” name of JavaScript?";

  if (nameValue === "ECMAScript") {
    console.log("Right!");
  } else {
    console.log('You don\'t know? "ECMAScript"');
  }
}

AskName("111");

console.log("2\n");

function alertNumber() {
  let userInput = prompt("Input number");
  let userInputNumb = Number(userInput);
  if (userInputNumb !== null && !isNaN(userInputNumb)) {
    if (userInputNumb === 0) {
      alert(0);
    } else if (userInputNumb > 0) {
      alert(1);
    } else {
      alert(-1);
    }
  } else {
    alert("Enter the number");
  }
}

//alertNumber();

console.log("3\n");

let result;
let f1 = 1;
let f2 = 2;

result = f1 + f2 < 4 ? "Below" : "Over";

console.log(result);

console.log("4\n");

let message;
let login = "another text";
message =
  login === "Employee"
    ? "Hello"
    : login === "Director"
    ? "Greetings"
    : login === ""
    ? "No login"
    : "";

console.log(message);
