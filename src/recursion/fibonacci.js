const { memoize } = require("../other/memoization");

function fibonacci(n) {
  // time: O(2^n)
  if (n === 0 || n === 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.time();
console.log(fibonacci(20));
console.timeEnd();

const f = memoize(fibonacci);
console.time();
console.log("with memoization:", f(20));
console.timeEnd();
