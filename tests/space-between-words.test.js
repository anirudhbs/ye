const { distance } = require("../src/problems/space-between-words");

describe("Palindrome in permutation", () => {
  it("Should return 1", () => {
    expect(distance("dog cat hello cat dog dog hello cat world", "hello", "world")).toBe(1);
  });

  it("Should return false", () => {
    expect(distance("dabbing on them like the usual", "dabbing", "usual")).toBe(4);
  });
});
