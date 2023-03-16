let edges = [{
    1: [2, 5],
    2: [1, 5, 3],
    3: [2, 4],
    4: [5, 3, 6],
    5: [1, 2, 4],
    6: [4]
}]

console.log(edges);

const adjacencyList = {
    'A': ['B'],
    'B': ['A', 'C'],
    'C': ['B', 'D'],
    'D': ['C'],
    'E': [],
    'F': []
  };

  console.log(adjacencyList);


