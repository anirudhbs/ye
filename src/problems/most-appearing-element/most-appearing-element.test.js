const { majority } = require("./most-appearing-element");

describe("Most appearing element", () => {
  it("Should return 0", () => {
    expect(majority([9, 2, 9, 9, 3, 4, 0, 0, 0, 0, 0])).toBe("0");
  });
});
