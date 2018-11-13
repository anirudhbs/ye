// https://www.geeksforgeeks.org/bubble-sort/amp/
function bubbleSort(arr) {
  for(let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length - 1; j += 1) {
      if(arr[j] > arr[j + 1]) { // swap the 2 elements if true
        arr[j] = arr[j] + arr[j + 1];
        arr[j + 1] = arr[j] - arr[j + 1];
        arr[j] = arr[j] - arr[j + 1];
      }
    }
  }
  return arr;
}

// eslint-disable-next-line no-undef
console.log(bubbleSort([4, 3, 33, 12, 0 -111]));
