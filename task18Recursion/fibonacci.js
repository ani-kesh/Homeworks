"use strict";

// Write a fib(int) function which returns n-th fibonacci number.
// try to understand the complexity of the recursion and write it down. In the end you will get the golden
// ratio.
// try to optimize the recursion with caching results

function fibonacci(number) {
  if (number === 0) return 0;
  if (number === 1) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}
