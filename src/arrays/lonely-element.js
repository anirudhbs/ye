function lonelyElement(arr) {
  const obj = {}; // store appearance of element in array

  for (let num of arr) {
    if (obj.hasOwnProperty(num)) {
      delete obj[num];
    } else {
      obj[num] = true;
    }
  }
  return Object.keys(obj)[0];
}

console.log(lonelyElement([4, 4, 6, 1, 3, 1, 3]));
