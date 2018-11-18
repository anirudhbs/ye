function insertionSort(arr) {
  for(let i = 1; i < arr.length; i += 1) {
    const cur = arr[i];
    let j = i - 1;

    while( j >= 0 && arr[j] > cur) {
      arr[j + 1] = arr[j];
      j -= 1;
    }
    arr[j + 1] = cur;
  }
  return arr;
}

// eslint-disable-next-line no-undef
console.log(insertionSort([5, -1, 23, 0, 90]));
