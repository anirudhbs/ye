// Maximum subarray using dynamic programming
// time: O(n)
function maximumSubarray(arr) {
  let maxSum = -Infinity;
  let sum = 0;

  let maxStartIndex = 0;
  let maxEndIndex = arr.length - 1;

  let currentStartIndex = 0;

  arr.forEach((element, index) => {
    sum += element;

    if (maxSum < sum) {
      maxSum = sum;
      maxStartIndex = currentStartIndex;
      maxEndIndex = index;
    }

    if (sum < 0) {
      sum = 0;
      currentStartIndex = index + 1;
    }
  });

  return arr.slice(maxStartIndex, maxEndIndex + 1);
}

console.log(maximumSubarray([-2, -3, 4, -1, -2, 1, 5, -3]));
