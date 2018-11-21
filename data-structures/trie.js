class Node {
  constructor() {
    this.keys = new Map();
    this.end = false;
  }

  setEnd() {
    this.end = true;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(input, node = this.root) {
    if (input === "") {
      // no more letters
      node.setEnd();
      return;
    }
    if (!node.keys.has(input[0])) {
      // letter not present
      node.keys.set(input[0], new Node());
    }
    return this.insert(input.slice(1), node.keys.get(input[0])); // letter is present, move on to the next letter in the input
  }

  isPresent(input, node = this.root) {
    if (input === "") {
      return node.end; // if input is empty, returns true if end of trie
    }
    if (!node.keys.has(input[0])) {
      // if letter not present, returns false
      return false;
    }
    return this.isPresent(input.slice(1), node.keys.get(input[0])); // check recursively
  }

  words(node = this.root, words = [], str = "") {
    if (node.end) {
      // end of tree
      words.push(str);
    }
    for (let letter of node.keys.keys()) {
      // call recursively for each node
      this.words(node.keys.get(letter), words, str + letter);
    }
    return words;
  }

  goTo(input, node = this.root) {
    if (input === "") {
      return node;
    }
    const firstLetterNode = node.keys.get(input[0]);
    return firstLetterNode ? this.goTo(input.slice(1), firstLetterNode) : {};
  }

  autoComplete(input) {
    const where = this.goTo(input);
    const arr = this.words(where);
    return arr.map(cur => input + cur);
  }
}

const t = new Trie();
t.insert("migos");
t.insert("quavo");
t.insert("meetup");
t.insert("monitor");
t.insert("mitch");
console.log(t.words());
console.log(t.autoComplete("mi"));
