function hasCycle(graph) {
    const visited = new Set();
    const recStack = new Set();
    for (let node in graph) {
        if (!visited.has(node)) {
            if (dfs(graph, node, visited, recStack)) {
                return true;
            }
        }
    }
    return false;
}

function dfs(graph, node, visited, recStack) {
    visited.add(node);
    recStack.add(node);
    for (let neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
            if (dfs(graph, neighbor, visited, recStack)) {
                return true;
            }
        } else if (recStack.has(neighbor)) {
            return true;
        }
    }
    recStack.delete(node);
    return false;
}
  
  const graph = {
    1: [2, 3],
    2: [1, 4],
    3: [1, 4],
    4: [2, 3, 5],
    5: [4],
  };

// const graph = {
//     'A': ['B'],
//     'B': ['A', 'C'],
//     'C': ['B', 'D'],    
//     'D': ['C'],
//     'E': [],
//     'F': []
//   };

//   console.log(graph);

// const graph = {
//     1: [2],
//     2: [3],
//     3: [4],
//     4: []
// };
  
  console.log(hasCycle(graph)); 
  
 
  
  
  
  