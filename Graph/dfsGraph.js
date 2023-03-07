class Graph {
    constructor() {
      this.adjacencyList = {};
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
  
    addEdge(v1, v2) {
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
    }
  
  
    depthFirst(start) {
      const stack = [start];
      const result = [];
      const visited = {};
      let currentVertex;
  
      visited[start] = true;
      while (stack.length) {
        currentVertex = stack.pop();
        result.push(currentVertex);
  
        this.adjacencyList[currentVertex].forEach((neighbor) => {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            stack.push(neighbor);
          }
        });
      }
      return result;
    }
  }
  
  var g = new Graph();
  
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
  
  g.depthFirst("A");
  
  console.log(g.depthFirst("A"));
  