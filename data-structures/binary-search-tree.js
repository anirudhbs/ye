class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor () {
    this.root = null;
  }

  insert(value, node = this.root) {
    if (node === null) { // no nodes in tree
      this.root = new Node(value);
    } else if (node.value > value) { // value less than parent node
      if (node.left === null) { // if left child is not present
        node.left = new Node(value);
      } else {
        this.insert(value, node.left);
      }
    } else if (node.value < value) { // value more than parent node
      if (node.right === null) { // if right child is not present
        node.right = new Node(value);
      } else {
        this.insert(value, node.right);
      }
    }
  }

  remove(value) {
    this.root = this.removeNode(this.root, value);
  }

  removeNode(node, value) {
    if (node === null) { // no node
      return null;
    }
    if(node.value === value) {
      if (node.left === null && node.right === null) { // no children
        node = null;
        return node;
      } else if (node.left === null) { // no left child
        node = node.right;
        return node;
      } else if (node.right === null) { // no right child
        node = node.left;
        return node;
      } else {
        const newNode = this.findMinNode(node.right);
        node.value = newNode.value;
        node.right = this.removeNode(node.right, newNode.value);
        return node;
      }
    } else if (value < node.value) {
      node.left = this.removeNode(node.left, value);
    } else {
      node.right = this.removeNode(node.right, value);
    }
    return node;
  }

  findMinNode(node) { // basically the left most node
    if(node.left === null) {
      return node;
    }
    return this.findMinNode(node.left);
  }

  inOrder(node = this.root) { // starts from leftmost leaf: L, root, R
    if(node) {
      this.inOrder(node.left);
      console.log(node.value);
      this.inOrder(node.right);
    }
  }

  preOrder(node = this.root) { // root, L child, R child
    if(node) {
      console.log(node.value);
      this.inOrder(node.left);
      this.inOrder(node.right);
    }
  }

  postOrder(node = this.root) { // L child, R child, root
    if(node) {
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
console.log('inorder');
t.inOrder();
