class Node {
  constructor (value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  add(value, priority) {
    const item = new Node(value, priority);
    if(this.items.length === 0) { // queue is empty
      this.items.push(item);
      return;
    }
    for(let i = 0; i < this.items.length; i += 1) { // add somewhere in the middle
      const where = this.items[i];
      if (where.priority < item.priority) {
        this.items.splice(i, 0, item);
        return;
      }
    }
    this.items.push(item); // add to end of queue
  }

  remove() {
    return this.items.shift();
  }
  head() {
    return this.items[0];
  }

  isEmpty() {
    return (this.items.length === 0) ? true : false;
  }

  printQueue() {
    this.items.forEach((cur, index) => {
      const { value, priority } = cur;
      // eslint-disable-next-line no-undef
      console.log(`index: ${index}, value: ${value}, priority: ${priority}`);
    });
  }
}

const pq = new PriorityQueue();
pq.add(14, 1);
pq.add('y', 12);
pq.add(3, 22);
pq.add('x', 3);
pq.remove();
pq.printQueue();
