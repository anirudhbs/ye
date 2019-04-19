const { binarySearch } = require("../src/search/binary-search");

describe("Binary Search", () => {
  it("should return index of element", () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 7)).toBe(6);
  });

  it("should return -1 is element is not present", () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 20)).toBe(-1);
  });
});
