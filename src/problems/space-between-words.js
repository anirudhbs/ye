// input: (complete string, word1, word2)
// output: distance between the 2 words, in words
function distance(str, word1, word2) {
  if (word1 === word2) {
    return 0;
  }

  const wordsInSentence = str.split(" ");
  let minimumDistance = wordsInSentence.length + 1,
    currentDistance = wordsInSentence.length;

  for (let i = 0; i < wordsInSentence.length; i += 1) {
    if (wordsInSentence[i] === word1) {
      for (let j = 0; j < wordsInSentence.length; j += 1) {
        if (wordsInSentence[j] === word2) {
          currentDistance = Math.abs(i - j) - 1;
        }
        if (currentDistance < minimumDistance) {
          minimumDistance = currentDistance;
        }
      }
    }
  }
  return minimumDistance;
}

console.log(
  distance("dog cat hello cat dog dog hello cat world", "hello", "world")
);
