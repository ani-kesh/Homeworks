"use strict";

function bubbleSort(arr, type = "asc") {
  if (type === "desc") return sortByDesc(arr);
  return sortByAsc(arr);
}

function sortByAsc(arr){
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let element = arr[i];
      if (element > arr[j]) {
        arr[i] = arr[j];
        arr[j] = element;
      }
    }
  }
  return arr;
}

function sortByDesc(arr){
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let element = arr[i];
      if (element < arr[j]) {
        arr[i] = arr[j];
        arr[j] = element;
      }
    }
  }
  return arr;
}
console.log(bubbleSort([1, 4, 2, 5, 8, 3, 1], "desc"));
