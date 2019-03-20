function howManySquares(n) {
  // n = number
  // number of perfect squares that
  // have to be added up for getting n
  if (n < 4) {
    return n;
  }

  let result = n;

  for (let i = 1; i <= n; i += 1) {
    const square = i * i;
    if (square > n) {
      break;
    } else {
      result = Math.min(result, 1 + howManySquares(n - square));
    }
  }
  return result;
}

console.log(howManySquares(12));
