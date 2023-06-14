// First input format: array of edges
const edges = [
  [0, 1],
  [1, 2],
  [2, 0],
  [2, 3],
];

// To build a directed graph
const buildGraph = (edges) => {
  let graph = new Map();
  for (let [x, y] of edges) {
    if (!graph.has(x)) {
      graph.set(x, [y]);
    } else {
      graph.get(x).push(y);
    }
  }
  console.log(graph);
};

buildGraph(edges);
