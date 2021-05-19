"use strict";

// Write Pagination object that will get an array and pageSize, then will return the following.
// prevPage
// nextPage
// firstPage
// lastPage
// goToPage
// getPageItems

// const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
// Pagination.init(alphabetArray, 4);
// Pagination.getPageItems(); // ["a", "b", "c", "d"]
// Pagination.nextPage(); // add the current page by one
// Pagination.getPageItems(); // ["e", "f", "g", "h"]
// Pagination.nextPage().nextPage(); // the ability to call chainable
// Pagination.goToPage(3); // current page must be set to 3

let alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");

let Pagination = {
  alphabetArray,
  length: 0,
  page: 0,
  init: (alphabetArray, length) => {
    Pagination.alphabetArray = alphabetArray;
    Pagination.length = length;
    return Pagination.getPageItems();
  },
  getPageItems: () => {
    let start = Pagination.page === 0 ? 0 : Pagination.page * Pagination.length;
    let end =
      start + Pagination.length <= alphabetArray.length
        ? start + Pagination.length
        : alphabetArray.length;
    return alphabetArray.filter((elem, ind) => start <= ind && ind < end);
  },
  nextPage: () => {
    Pagination.page++;
    return Pagination;
  },
  prevPage: () => {
    Pagination.page === 0 ? 0 : Pagination.page--;
    return Pagination;
  },
  goToPage: (numb) => {
    Pagination.page = numb - 1;
    return Pagination.getPageItems();
  },
  firstPage: () => {
    Pagination.page = 0;
    return Pagination.getPageItems();
  },
  lastPage: () => {
    Pagination.page = Math.floor(
      Pagination.alphabetArray.length / Pagination.length
    );
    return Pagination.getPageItems();
  },
};

console.log(Pagination.init(alphabetArray, 4));
Pagination.nextPage();
console.log(Pagination.getPageItems());
Pagination.nextPage().nextPage();
console.log(Pagination.getPageItems());
console.log(Pagination.goToPage(3));
console.log(Pagination.firstPage());
console.log(Pagination.lastPage());
Pagination.prevPage().prevPage();
console.log(Pagination.getPageItems());
