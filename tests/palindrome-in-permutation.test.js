const { canFormPalindrome } = require("../src/strings/palindrome-in-permutation");

describe("Palindrome in permutation", () => {
  it("Should return true", () => {
    expect(canFormPalindrome("rrcaeca")).toBe(true);
  });

  it("Should return false", () => {
    expect(canFormPalindrome("dabbingonthemliketheusual")).toBe(false);
  });
});
