// Ugly number - number that's divisible by 2, 3, or 5
// Normal approach - iterating from 1 to n, to find the n-th ugly number

function getNthUglyNumber(n) {
  // time - O(n), space - O(n)
  const uglyNumbers = [];

  let i2 = 0;
  let i3 = 0;
  let i5 = 0;

  let nextMultipleOf2 = 2;
  let nextMultipleOf3 = 3;
  let nextMultipleOf5 = 5;

  uglyNumbers[0] = 1;
  let nextUglyNumber = 1;

  let i = 1;
  while (i < n) {
    i += 1;

    nextUglyNumber = Math.min(nextMultipleOf2, nextMultipleOf3, nextMultipleOf5);
    uglyNumbers.push(nextUglyNumber);

    if (nextUglyNumber === nextMultipleOf2) {
      i2 += 1;
      nextMultipleOf2 = uglyNumbers[i2] * 2;
    }

    if (nextUglyNumber === nextMultipleOf3) {
      i3 += 1;
      nextMultipleOf3 = uglyNumbers[i3] * 3;
    }

    if (nextUglyNumber === nextMultipleOf5) {
      i5 += 1;
      nextMultipleOf5 = uglyNumbers[i5] * 5;
    }
  }
  return nextUglyNumber;
}

console.log(getNthUglyNumber(150));
