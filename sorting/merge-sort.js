function merge (leftArr, rightArr) {
  const sorted = [];

  while (leftArr.length !== 0 && rightArr.length !== 0) {
    if (leftArr[0] < rightArr[0]) {
      sorted.push(leftArr[0]);
      leftArr = leftArr.slice(1);
    } else {
      sorted.push(rightArr[0]);
      rightArr = rightArr.slice(1);
    }
  }
  return [...sorted, ...leftArr, ...rightArr];
}

function mergeSort (arr) {
  if (arr.length === 1) {
    return arr;
  } else {
    const pivot = parseInt(arr.length / 2);
    return merge(mergeSort(arr.slice(0, pivot)), mergeSort(arr.slice(pivot)));
  }
}

console.log(mergeSort([3, 1, -1, 100, 32, 420, 12, 213]));
