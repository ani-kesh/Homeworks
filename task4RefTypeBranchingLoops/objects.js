"use strict";

/*
    Create an empty object user.
    Add the property name with the value John.
    Add the property surname with the value Smith.
    Change the value of the name to Pete.
    Remove the property name from the object.
*/

let user = {};
user.name = "John";
user.surname = "Smith";

user.name = "Pete";

delete user.name;

/*
Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
*/

function isEmpty(obj) {
  if (Object.keys(obj).length > 0) {
    return false;
  } else {
    return true;
  }
}

console.log(isEmpty({}));

/*
Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

If salaries is empty, then the result must be 0.
*/

let sum = 0;

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

for (let salary in salaries) {
  sum += salaries[salary];
}
console.log(sum);

/*
Multiply numeric property values by 2
*/
function multiplyNumeric(menu) {
  for (let menuKey in menu) {
    if ((typeof menu[menuKey]).toLowerCase() === "number") {
      menu[menuKey] *= 2;
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu);

console.log(menu);
