// https://algodaily.com/challenges/pick-a-sign

function numSignWays(arr, target) {
  // args: (num array, target sum)
  // returns: number of permutations of
  // array elements to reach target sum
  if (!arr || arr.length === 0) {
    return 0;
  }
  return helper(0, 0, {}, arr, target);
}

function helper(step, sum, hash, arr, target) {
  const key = `${step}-${sum}`;

  if (key in hash) {
    return hash[key];
  }

  if (step === arr.length) {
    return sum === target ? 1 : 0;
  }

  const positiveMatches = helper(step + 1, sum + arr[step], hash, arr, target);
  const negativeMatches = helper(step + 1, sum - arr[step], hash, arr, target);
  const totalMatches = positiveMatches + negativeMatches;

  hash[key] = totalMatches;
  return totalMatches;
}

console.log(numSignWays([2, 1, 3, 2], 4));
