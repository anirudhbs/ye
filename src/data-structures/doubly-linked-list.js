class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
  }

  traverse() {
    let current = this.head;
    while (current !== null) {
      console.log("value:", current.value);
      current = current.next;
    }
  }

  appendAt(position, value) {
    const node = new Node(value);
    if (position === 0) {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    } else {
      let counter = 1;
      let current = this.head;
      while (current !== null) {
        current = current.next;
        if (counter === position) {
          node.prev = current.prev;
          current.prev.next = node;
          node.next = current;
          current.prev = node;
        }
        counter += 1;
      }
    }
  }

  remove(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        if (current === this.head && current === this.tail) {
          this.head = null;
          this.tail = null;
        } else if (current === this.head) {
          this.head = this.head.next;
          this.head.prev = null;
        } else if (current === this.tail) {
          this.tail = this.tail.prev;
          this.tail.next = null;
        } else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }
      }
      current = current.next;
    }
  }

  removeAt(position) {
    if (position === 0) {
      this.head = this.head.next;
      this.head.prev = null;
    } else {
      let current = this.head;
      let counter = 1;
      while (current) {
        current = current.next;
        if (current === this.tail) {
          this.tail = this.tail.prev;
          this.tail.next = null;
        } else if (counter === position) {
          current.prev.next = current.next;
          current.next.prev = current.prev;
          break;
        }
        counter += 1;
      }
    }
  }

  length() {
    let counter = 0;
    let current = this.head;
    while (current !== null) {
      counter += 1;
      current = current.next;
    }
    return counter;
  }

  reverse() {
    let current = this.head;
    let prev = null;
    while (current) {
      let { next } = current;
      current.next = prev;
      current.prev = next;
      prev = current;
      current = next;
    }
    this.tail = this.head;
    this.head = prev;
  }
}

const list = new DoublyLinkedList();
list.append(2);
list.append(12);
list.append(32);
list.append(34);
list.append(45);
list.append(99);
list.append(187);
list.appendAt(0, 21);
list.remove(99);
list.reverse();
list.traverse();
