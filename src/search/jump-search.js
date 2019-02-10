// for sorted arrays
// time: O(√n), space: O(1)
function jumpSearch(arr, value) {
  const length = arr.length;
  let step = sqrt(length);
  let previous = 0;

  while (arr[Math.min(step, length) - 1] < value) {
    previous = step;
    step += sqrt(length);

    if (length <= previous) {
      return false;
    }
  }

  while (arr[previous] < value) {
    previous += 1;
    if (previous === Math.min(step, length)) {
      return false;
    }
  }

  if (arr[previous] === value) {
    return previous;
  }

  return false;
}

const sqrt = n => Math.floor(Math.sqrt(n));

console.log(jumpSearch([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610], 377));
