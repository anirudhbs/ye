// Find first recurring character in a string
// input: "HELLO WORLD"
// output: L

function findFirstRecurringCharacter(str) {
  const obj = {};
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] in obj) {
      return str[i];
    }
    obj[str[i]] = true;
  }
}

console.log(findFirstRecurringCharacter("HELLO WORLD"));
