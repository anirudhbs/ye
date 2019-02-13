// find contiguous subarray that has the largest sum
// time: O(n^2)
function maximumSubarray(arr) {
  let maxSubarrayStartIndex = 0;
  let maxSubarrayLength = 0;
  let maxSum = null;

  for (let i = 0; i < arr.length; i += 1) {
    // i is startIndex of the subarray
    let sum = 0;
    for (let j = 1; j <= arr.length - i; j += 1) {
      // j is the length of the subarray
      sum += arr[i + j - 1];
      if (maxSum === null || sum > maxSum) {
        maxSum = sum;
        maxSubarrayStartIndex = i;
        maxSubarrayLength = j;
      }
    }
  }
  return arr.slice(maxSubarrayStartIndex, maxSubarrayStartIndex + maxSubarrayLength);
}

console.log(maximumSubarray([-2, -3, 4, -1, -2, 1, 5, -3]));
