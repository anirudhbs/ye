// works only for sorted arrays
function binarySearch(arr, value, low = 0, high = arr.length - 1) {
  const mid = Math.floor((high - low) / 2 + low);
  switch (true) {
  case arr[mid] === value:
    return mid;
  case high - low === 0:
    return false;
  case value < arr[mid]:
    return binarySearch(arr, value, low, mid);
  case value > arr[mid]:
    return binarySearch(arr, value, mid + 1, high);
  }
}

const where = binarySearch([1, 2, 3, 4, 5, 6, 7, 1221, 1222], 1221);
console.log(where);
