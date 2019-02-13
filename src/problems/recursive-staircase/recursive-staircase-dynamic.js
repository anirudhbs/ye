// time: O(n), space: O(n)
function recursiveStaircaseDP(n) {
  if (n <= 0) return 0;

  const steps = new Array(n + 1).fill(0)
  ;[steps[0], steps[1], steps[2]] = [0, 1, 2];

  if (n <= 2) return steps[n];

  for (let i = 3; i <= n; i += 1) {
    steps[i] = steps[i - 1] + steps[i - 2];
  }
  return steps[n];
}

console.log(recursiveStaircaseDP(20));
