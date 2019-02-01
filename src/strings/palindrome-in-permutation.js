function canFormPalindrome(str) {
  const arr = str.split("");
  const obj = {};

  arr.forEach(cur => {
    if (cur in obj) {
      obj[cur] += 1;
    } else {
      obj[cur] = 1;
    }
  });

  let odd = 0;
  Object.keys(obj).forEach(cur => {
    if (obj[cur] % 2 !== 0) {
      odd += 1;
    }
  });

  return odd > 1 ? false : true;
}

console.log(canFormPalindrome("rrcaeca")); // racecar

module.exports = { canFormPalindrome };
