"use strict";

// Write function that will group by some rule

// groupBy([6.1, 4.2, 6.3], Math.floor);
// // => { '4': [4.2], '6': [6.1, 6.3] }
// groupBy(["one", "two", "three"], (i) => i.length);
// // => { '3': ['one', 'two'], '5': ['three'] }

function groupBy(arr, fn) {
  let keys = arr.map((el) => {
    return fn(el);
  });
  let filteredCase = keys
    .sort((a, b) => a - b)
    .filter(
      (el, index) => index - 1 !== undefined && keys[index] !== keys[index - 1]
    );
      
  // let obj = {};
  // for (let key of filteredCase) {
  //   let values = [];
  //   for (let value of arr) {
  //     if (key === fn(value)) {
  //       values.push(value);
  //     }
  //   }
  //   obj[key] = values;
  // }

  let obj = filteredCase.reduce((acc, el) => {
    return { ...acc, [el]:  arr.filter((element)=> el === fn(element))};
  }, {});

  return obj;
}




console.log(groupBy(["one", "two", "three"], (i) => i.length));
