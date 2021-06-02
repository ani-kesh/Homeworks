"use strict";

function selectionSort(arr, type = "asc") {
  if (type === "desc") return sortByDesc(arr);
  return sortByAsc(arr);
}

console.log(selectionSort([1, 4, 2, 5, 8, 3, 1], "desc"));

function sortByAsc(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (min > arr[j]) {
        min = arr[j];
        minIndex = j;
      }
    }
    arr[minIndex] = arr[i];
    arr[i] = min;
  }
  return arr;
}

function sortByDesc(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (min < arr[j]) {
        min = arr[j];
        minIndex = j;
      }
    }
    arr[minIndex] = arr[i];
    arr[i] = min;
  }
  return arr;
}
