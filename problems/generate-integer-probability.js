// https://www.geeksforgeeks.org/generate-integer-from-1-to-7-with-equal-probability/amp/
function foo () { // returns 1 to 5 with equal probability
  const arr = [1, 2, 3, 4, 5];
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomNumber () {
  const num = (5 * foo()) + foo() - 5; // generate numbers from 1 to 25
  if (num < 22) {
    return num % 7 + 1;
  }
  return randomNumber();
}

// eslint-disable-next-line no-undef
console.log(randomNumber());
