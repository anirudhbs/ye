function permutationsOfAString(str) {
  const results = [];

  if (str.length === 1) {
    return [str];
  }

  for (let i = 0; i < str.length; i += 1) {
    const first = str[i];
    const charsRemaining = str.slice(0, i) + str.slice(i + 1);
    const remainingPerms = permutationsOfAString(charsRemaining);
    for (let j = 0; j < remainingPerms.length; j += 1) {
      results.push(first + remainingPerms[j]);
    }
  }
  return results;
}

module.exports = { permutationsOfAString };
