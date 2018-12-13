// works only for sorted arrays
function binarySearch(arr, value) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === value) {
      return mid;
    } else {
      if (value < arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  }
  return -1;
}

const where = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 4);
console.log(where);
