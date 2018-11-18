// eslint-disable-next-line no-undef
class Node {
  constructor (key) {
    this.key = key;
    this.children = {};
    this.end = false;
  }
}

class Trie {
  constructor () {
    this.root = new Node(null);
  }

  insert(word, node = this.root) {
    for(let i = 0; i < word.length; i += 1) {
      if (!(word[i] in node.children)) {
        node.children[word[i]] = new Node(word[i]);
        node.children[word[i]].parent = node;
      }
      node = node.children[word[i]];

      if(i === word.length - 1) {
        node.end = true;
      }
    }
  }

  contains(word, node = this.root) {
    for (let i = 0; i < word.length; i += 1) {
      if (word[i] in node.children) {
        node = node.children[word[i]];
      } else {
        return false;
      }
    }
    return node.end;
  }
}

const t = new Trie;
t.insert('thorin');
console.log(t.contains('thorin'));
