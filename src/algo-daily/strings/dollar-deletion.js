// https://algodaily.com/challenges/dollar-sign-deletion

function dollarDelete(str) {
  // $ symbol indicates you gotta delete
  // the previous character
  const stack = [];

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === "$") {
      stack.pop();
    } else {
      stack.push(str[i]);
    }
  }
  return stack.join("");
}

console.log(dollarDelete("f$st"));
