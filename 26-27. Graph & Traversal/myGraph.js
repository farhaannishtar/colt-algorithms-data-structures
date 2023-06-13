class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(v) {
    if (!this.adjList[v]) this.adjList[v] = [];
  }

  addEdge(v1, v2) {
    this.adjList[v1].push(v2);
    this.adjList[v2].push(v1)
  }

  removeEdge(v1, v2) {
    this.adjList[v1] = this.adjList[v1].filter(adj => adj !== v2)
    this.adjList[v2] = this.adjList[v2].filter(adj => adj !== v1);
  }

  removeVertex(v) {
    this.adjList[v].forEach(adj => {
      this.removeEdge(v, adj);
    });
    delete this.adjList[v]
  }

  BFS(start) {
    const queue = [start];
    const visited = {};
    const results = [];
    let currVtx;
    visited[start] = true;
    
    while(queue.length) {
      currVtx = queue.shift();
      results.push(currVtx)
      this.adjList[currVtx].forEach(adj => {
        if (!visited[adj]) {
          visited[adj] = true;
          queue.push(adj)
        }
      })
    }
    return results;
  }

}

const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g)
console.log(g.BFS("A"));