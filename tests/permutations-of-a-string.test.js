const { permutationsOfAString } = require("../src/strings/permutations-of-a-string");

describe("Permutations of a string", () => {
  it("Should return an array with the original string", () => {
    expect(permutationsOfAString("a")).toEqual(["a"]);
  });

  it("Should return all permutations of the string", () => {
    expect(permutationsOfAString("abc")).toEqual(["abc", "acb", "bac", "bca", "cab", "cba"]);
  });
});
