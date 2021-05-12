const reduce = (array, fn, initialState) => {
  let acc = typeof initialState === "undefined" ? array[0] : initialState;
  const startingIndex = typeof initialState === "undefined" ? 1 : 0;

  for (let index = startingIndex; index < array.length; index++) {
    const element = array[index];
    acc = fn(acc, element, index, array);
  }

  return acc;
};

const collectObjectByIdx = (acc, el, idx) => ({ ...acc, [idx]: el });
console.log(reduce([1, 2, 3, 4, 5], collectObjectByIdx, {}));

const fn = (...args) => {
  return args.reduce((acc, el) => {
    if (Array.isArray(el)) {
      return [...acc, ...el];
    }

    return [...acc, ...Object.values(el)];
  });
};

console.log(
  fn([1, 2, 3], [4, 5, 6], [4, 5, 6], { a: "fdsd" }, { b: "fsd", c: 3 })
);
