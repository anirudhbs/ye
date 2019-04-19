const { Trie } = require("../src/data-structures/trie");

describe("Trie", () => {
  it("Create a trie and insert values into it", () => {
    const diddy = new Trie();
    diddy.insert("quavo");
    diddy.insert("meetup");
    diddy.insert("monitor");
    diddy.insert("mitch");
    expect(diddy.words()).toEqual(["quavo", "meetup", "monitor", "mitch"]);
  });

  it("Should return matching words for autocomplete", () => {
    const diddy = new Trie();
    diddy.insert("quavo");
    diddy.insert("meetup");
    diddy.insert("monitor");
    diddy.insert("mitch");
    diddy.insert("michigan");
    expect(diddy.autoComplete("mi")).toEqual(["mitch", "michigan"]);
  });
});

// https://jestjs.io/docs/en/es6-class-mocks
// todo: Learn how to test class constructor and methods
// here is some code that goes with it

/*
jest.mock("./trie");

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  Trie.mockClear();
});

it("We can check if the consumer called the class constructor", () => {
  expect(Trie).not.toHaveBeenCalled();
  new Trie();
  expect(Trie).toHaveBeenCalledTimes(1);
});
*/
