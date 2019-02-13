// unique paths between 2 corners in a grid
// can move right or down
// time: O(2 ^ n), space: O(m + n)
function uniquePaths(m, n, steps = [[0, 0]], uniqueSteps = 0) {
  const currentPosition = steps[steps.length - 1];

  if (currentPosition[0] === m - 1 && currentPosition[1] === n - 1) {
    return uniqueSteps + 1;
  }

  let rightUniqueSteps = 0;
  let downUniqueSteps = 0;

  if (currentPosition[0] < m - 1) {
    // can move right?
    steps.push([currentPosition[0] + 1, currentPosition[1]]);
    rightUniqueSteps = uniquePaths(m, n, steps, uniqueSteps);
    steps.pop(); // backtrack and try another move
  }

  if (currentPosition[1] < n - 1) {
    steps.push([currentPosition[0], currentPosition[1] + 1]);
    downUniqueSteps = uniquePaths(m, n, steps, uniqueSteps);
    steps.pop();
  }

  return rightUniqueSteps + downUniqueSteps;
}
console.log(uniquePaths(7, 3));
