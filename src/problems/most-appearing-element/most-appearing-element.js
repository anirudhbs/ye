// input: [1, 2, 1, 1, 3, 4, 0]
// output: 1
// 1 appears in more than half the length of the array

function majority(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] in obj) {
      obj[arr[i]] += 1;
    } else {
      obj[arr[i]] = 1;
    }
  }
  let max = 0,
    key = null;

  Object.keys(obj).forEach(cur => {
    if (obj[cur] > max) {
      key = cur;
      max = obj[cur];
    }
  });
  return key;
}

module.exports = { majority };
