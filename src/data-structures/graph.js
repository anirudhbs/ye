// https://raw.githubusercontent.com/jamiebuilds/itsy-bitsy-data-structures/master/itsy-bitsy-data-structures.js
class Graph {
  constructor() {
    this.nodes = [];
  }

  addNode(value) {
    const node = {
      value,
      lines: []
    };
    return this.nodes.push(node);
  }

  find(value) {
    return this.nodes.find(node => node.value === value);
  }

  addLine(startValue, endValue) {
    const startNode = this.find(startValue);
    const endNode = this.find(endValue);
    if (!startNode || !endNode) {
      // nodes dont exist
      return false;
    }
    startNode.lines.push(endNode);
    return true;
  }
}

const g = new Graph();
g.addNode(12);
g.addNode(31);
g.addNode(-12);
g.addLine(12, -12);
console.log(g);
