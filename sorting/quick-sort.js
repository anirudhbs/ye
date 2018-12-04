function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = right; // pick last element as pivot
    const partitionIndex = partition(arr, pivotIndex, left, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

function partition(arr, pivotIndex, left, right) {
  const pivotValue = arr[pivotIndex];
  let partitionIndex = left;

  for (let i = left; i < right; i += 1) {
    if (arr[i] < pivotValue) {
      swap(arr, i, partitionIndex);
      partitionIndex += 1;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(quickSort([3, 1, -1, 100, 32, 420, 12, 213]));
