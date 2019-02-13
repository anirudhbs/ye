const NUMBER_OF_POSSIBLE_DIGITS = 10;

// implemented for numbers only
// O(n): (n * k), k: length of longest key
function radixSort(arr) {
  let sorted = [...arr];
  const numPasses = determineNumPasses(arr);

  for (let i = 0; i < numPasses; i += 1) {
    const buckets = placeElementsInBuckets(sorted, i);
    sorted = buckets.reduce((acc, cur) => [...acc, ...cur], []);
  }
  return sorted;
}

function placeElementsInBuckets(arr, index) {
  const modded = Math.pow(10, index + 1);
  const divided = Math.pow(10, index);
  const buckets = createBuckets(NUMBER_OF_POSSIBLE_DIGITS);

  arr.forEach(cur => {
    if (cur < divided) {
      buckets[0].push(cur);
    } else {
      const currentDigit = Math.floor((cur % modded) / divided);
      buckets[currentDigit].push(cur);
    }
  });

  return buckets;
}

// basically the length of the longest element in the array
const determineNumPasses = arr => Math.floor(Math.log10(Math.max(...arr))) + 1;

const createBuckets = n => new Array(n).fill(null).map(() => []);

console.log(radixSort([3, 1, -1, 100, 32, 420, 1200, 213]));
