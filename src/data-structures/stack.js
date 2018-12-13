class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    this.items.pop();
  }

  empty() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  items() {
    return this.items;
  }
}

const s = new Stack();
s.push("hello");
console.log(s.items);
s.push(Infinity);
s.push("beyond");
s.pop();
console.log(s.items);
