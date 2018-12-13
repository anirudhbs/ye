class Queue {
  constructor() {
    this.items = [];
  }

  add(element) {
    this.items.push(element);
  }

  remove() {
    this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0 ? true : false;
  }

  items() {
    return this.items;
  }

  peek() {
    return this.items[0];
  }
}

const q = new Queue();
q.add("hello");
q.add("there");
console.log(q.items);
q.remove();
console.log(q.items);
