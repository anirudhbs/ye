// time: O(n), space: O(1)
function recursiveStaircaseIterative(n) {
  if (n <= 0) return 0;

  const steps = [1, 2];
  if (n <= 2) return steps[n - 1];

  for (let i = 3; i <= n; i += 1) {
    [steps[0], steps[1]] = [steps[1], steps[0] + steps[1]];
  }

  return steps[1];
}

console.log(recursiveStaircaseIterative(20));
