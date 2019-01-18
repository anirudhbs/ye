// https://www.geeksforgeeks.org/given-a-number-n-generate-bit-patterns-from-0-to-2n-1-so-that-successive-patterns-differ-by-one-bit/
// input: nubmer of bits
// output: gray array: [ '000', '001', '011', '010', '110', '111', '101', '100' ]
// only 1 bit changes at a time

function generateGrayArray(size) {
  if (size === 0) {
    return null;
  }
  const arr = [];
  // initial case
  arr.push("0");
  arr.push("1");

  // Every iteration of this loop generates 2*i codes from previously generated i codes
  for (let i = 2; i < 1 << size; i = i << 1) {
    // Enter the prviously generated codes again in arr[] in reverse order. Nor arr[] has double number of codes.
    for (let j = i - 1; j >= 0; j -= 1) {
      arr.push(arr[j]);
    }

    // append 0 to the first half
    for (let j = 0; j < i; j += 1) {
      arr[j] = "0" + arr[j];
    }

    // append 1 to the second half
    for (let j = i; j < i * 2; j += 1) {
      arr[j] = "1" + arr[j];
    }
  }
  return arr;
}

console.log(generateGrayArray(3));
