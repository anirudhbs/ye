class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  // an implementation of a singly linked list
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(value) {
    // add to end of list
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.size += 1;
  }

  insertAt(index, value) {
    if (index < 0 || index > this.size) {
      return false;
    }
    const node = new Node(value);
    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let i = 0;
      let where = this.head;
      // find the node before where the new node should be inserted
      while (i < index - 1) {
        where = where.next;
        i += 1;
      }
      node.next = where.next;
      where.next = node;
    }
    this.size += 1;
  }

  remove(value) {
    if (this.size === 0) {
      return false;
    }
    if (value === this.head.value) {
      // first element in the list
      this.head = this.head.next;
    } else {
      let previous = this.head;
      let where = previous.next;
      while (where.next !== null) {
        if (where.value === value) {
          previous.next = where.next;
        }
        previous = where;
        where = where.next;
      }
    }
    this.size -= 1;
  }

  removeFrom(index) {
    if (index < 0 || this.size < index) {
      return false;
    }
    if (index === 0) {
      // first element in the list
      this.head = this.head.next;
    }
    let prev = this.head;
    let where = prev.next;
    let i = 0;
    while (i < index - 1) {
      prev = where;
      where = where.next;
      i += 1;
    }
    prev.next = where.next;
    this.size -= 1;
  }

  indexOf(value) {
    if (this.size === 0) {
      return false;
    }
    let where = this.head;
    let index = 0;
    while (where.next !== null) {
      if (where.value === value) {
        return index;
      }
      where = where.next;
      index += 1;
    }
    return -1;
  }

  items() {
    // return node values in an array format
    if (this.size === 0) {
      return [];
    }
    let node = this.head;
    let arr = [];
    while (node.next !== null) {
      arr.push(node.value);
      node = node.next;
    }
    arr.push(node.value); // push the last node
    return arr;
  }

  reverse() {
    let current = this.head,
      next = null,
      prev = null;

    while (current !== null) {
      next = current.next;
      current.next = prev;

      prev = current;
      current = next;
    }
    this.head = prev;
    return true;
  }

  nthElementFromLast(n) {
    if (n > this.size) {
      return false;
    }

    let node = this.head;
    for (let i = 0; i < this.size - n; i += 1) {
      node = node.next;
    }
    return node.value;
  }
}

module.exports = { LinkedList };
