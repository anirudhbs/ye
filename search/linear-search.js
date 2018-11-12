function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

const where = linearSearch([1, 2, 3, 'x', 12, 98], 12);
// eslint-disable-next-line no-undef
console.log(where);
