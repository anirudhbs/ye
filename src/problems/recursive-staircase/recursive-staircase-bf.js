const { memoize } = require("../../other/memoization");

function recursiveStaircaseBF(n) {
  // brute force method
  if (n <= 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;
  return recursiveStaircaseBF(n - 1) + recursiveStaircaseBF(n - 2);
}

const f = memoize(recursiveStaircaseBF);
console.log(f(20));
