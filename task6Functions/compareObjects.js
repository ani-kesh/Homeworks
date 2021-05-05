"use strict";

/*
17.Given two objects. Write a function that performs shallow compare.
*/

function compareObjects(object1, object2) {
  let isEqual = true;

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    isEqual = false;
  } else {
    object1 = Object.entries(object1)
      .sort()
      .reduce((o, [k, v]) => ((o[k] = v), o), {});
    object2 = Object.entries(object2)
      .sort()
      .reduce((o, [k, v]) => ((o[k] = v), o), {});

    for (let i = 0; i < Object.keys(object1).length; i++) {
      let key1Object = Object.keys(object1)[i];
      let key2Object = Object.keys(object2)[i];
      if (
        key1Object !== key2Object ||
        object1[key1Object] !== object2[key2Object]
      ) {
        isEqual = false;
        break;
      }
    }
  }
  return isEqual;
}

let isEqualObjects = compareObjects({}, {});
console.log(isEqualObjects);
