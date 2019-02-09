// https://raw.githubusercontent.com/jamiebuilds/itsy-bitsy-data-structures/master/itsy-bitsy-data-structures.js
class Graph {
  // Graph using adjacency list
  constructor(numberOfVertices) {
    this.numberOfVertices = numberOfVertices;
    this.adjacencyList = new Map();
  }

  addVertex(v) {
    this.adjacencyList.set(v, []);
  }

  addEdge(v1, v2) {
    this.adjacencyList.get(v1).push(v2);
    this.adjacencyList.get(v2).push(v1);
  }

  printGraph() {
    const keys = this.adjacencyList.keys();
    for (let i of keys) {
      const values = this.adjacencyList.get(i);
      console.log(`${i}: ${values.join(", ")}`);
    }
  }

  bfs(startingVertex) {
    const visited = Array(this.numberOfVertices).fill(false);
    const queue = [];
    visited[startingVertex] = true;
    queue.push(startingVertex);
    while (queue.length !== 0) {
      const currentVertex = queue.shift();
      console.log(currentVertex);

      const connectedVertices = this.adjacencyList.get(currentVertex);

      for (let i in connectedVertices) {
        const neighbor = connectedVertices[i];
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }
  }

  dfs(startingVertex) {
    const visited = Array(this.numberOfVertices).fill(false);
    this.dfsHelper(startingVertex, visited);
  }

  dfsHelper(currentVertex, visited) {
    visited[currentVertex] = true;
    console.log(currentVertex);

    const neighbors = this.adjacencyList.get(currentVertex);

    for (let i in neighbors) {
      const vertex = neighbors[i];
      if (!visited[vertex]) {
        this.dfsHelper(vertex, visited);
      }
    }
  }
}

const g = new Graph(6);
const vertices = ["A", "B", "C", "D", "E", "F"];

vertices.forEach(cur => g.addVertex(cur));

g.addEdge("A", "B");
g.addEdge("A", "D");
g.addEdge("A", "E");
g.addEdge("B", "C");
g.addEdge("D", "E");
g.addEdge("E", "F");
g.addEdge("E", "C");
g.addEdge("C", "F");

// g.printGraph();
// g.bfs("A");
g.dfs("A");
