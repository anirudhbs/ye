class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value, node = this.root) {
    if (node === null) {
      this.root = new Node(value);
      return;
    }

    if (value < node.value) {
      if (node.left === null) {
        node.left = new Node(value);
        return;
      }

      this.insert(value, node.left);
      return;
    }

    if (value > node.value) {
      if (node.right === null) {
        node.right = new Node(value);
        return;
      }
      this.insert(value, node.right);
      return;
    }
  }

  remove(value) {
    this.root = this.removeNode(this.root, value);
  }

  removeNode(node, value) {
    if (node === null) {
      return null;
    }

    if (node.value === value) {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      }

      if (node.right === null) {
        node = node.left;
        return node;
      }

      const newNode = this.findMinNode(node.right);
      node.value = newNode.value;
      node.right = this.removeNode(node.right, newNode.value);
      return node;
    }

    if (value < node.value) {
      node.left = this.removeNode(node.left, value);
    } else {
      node.right = this.removeNode(node.right, value);
    }

    return node;
  }

  findMinNode(node) {
    if (node.left === null) {
      return node;
    }

    return this.findMinNode(node.left);
  }

  inOrder(node = this.root) {
    // starts from leftmost leaf: L, root, R
    if (node) {
      this.inOrder(node.left);
      console.log(node.value);
      this.inOrder(node.right);
    }
  }

  preOrder(node = this.root) {
    // root, L child, R child
    if (node) {
      console.log(node.value);
      this.inOrder(node.left);
      this.inOrder(node.right);
    }
  }

  postOrder(node = this.root) {
    // L child, R child, root
    if (node) {
      this.inOrder(node.left);
      this.inOrder(node.right);
      console.log(node.value);
    }
  }
}

const t = new BinarySearchTree();
t.insert(15);
t.insert(25);
t.insert(10);
t.insert(7);
t.insert(22);
t.insert(17);
t.insert(13);
t.insert(5);
t.insert(9);
t.insert(27);
// insert the following tree:
//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17

t.remove(15);
t.remove(5);
t.remove(9);
console.log("inorder");
t.inOrder();
