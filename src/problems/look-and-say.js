// https://files.slack.com/files-pri/T048L0JPL-FJEELKYPM/screenshot_20190516-212728__01.jpg
function lookAndSay(digits) {
  const chars = (digits + " ").split("");
  let result = "";
  let lastChar = chars[0];
  let count = 0;

  chars.forEach(nextChar => {
    if (nextChar === lastChar) {
      count += 1;
    } else {
      result += count + "" + lastChar;
      lastChar = nextChar;
      count = 1;
    }
  });

  return result;
}

function doIt(n) {
  let value = "1";
  for (let i = 0; i < n; i += 1) {
    value = lookAndSay(value);
  }
  return value;
}

console.log(doIt(10));
