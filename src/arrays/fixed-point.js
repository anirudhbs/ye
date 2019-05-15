// https://files.slack.com/files-pri/T048L0JPL-FJP7TTN2Y/screenshot_20190514-235901__01.jpg

// array is sorted, so use binary search instead of linear search
// fixed point is where array value = index

function fixedPoint(arr, low = 0, high = arr.length - 1) {
  const mid = Math.floor((high - low) / 2 + low);
  switch (true) {
  case arr[mid] === mid:
    return true;
  case high - low === 0:
    return false;
  case mid < arr[mid]:
    return fixedPoint(arr, low, mid);
  case mid > arr[mid]:
    return fixedPoint(arr, mid + 1, high);
  }
}

console.log(fixedPoint([6, 0, 2, 40]));
console.log(fixedPoint([1, 5, 7, 8]));
