class Node {
  constructor(value, priority = 0) {
    this.value = value;
    this.priority = priority;
    this.next = null;
  }
}

class PriorityQueue {
  constructor() {
    this.first = null;
  }

  insert(value, priority = 0) {
    const node = new Node(value, priority);
    if (!this.first || this.first.priority < node.priority) {
      node.next = this.first;
      this.first = node;
    } else {
      let pointer = this.first;
      while (pointer.next && node.priority < pointer.next.priority) {
        pointer = pointer.next;
      }
      node.next = pointer.next;
      pointer.next = node;
    }
  }

  remove() {
    this.first = this.first.next;
    return this.first;
  }

  printQueue(node = this.first) {
    if (node === null) {
      return;
    }
    console.log(`priority: ${node.priority}, value: ${node.value}`);
    this.printQueue(node.next);
  }
}

const pq = new PriorityQueue();
pq.insert(14, 1);
pq.insert(3, 22);
pq.insert("y", 12);
pq.insert("x", 3);
pq.insert("mars", 300);
pq.printQueue();
pq.remove();
console.log("\n");
pq.printQueue();
