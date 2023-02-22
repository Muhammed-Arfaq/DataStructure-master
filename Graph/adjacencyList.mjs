import Queue from "../queue/array_queue.mjs";

class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.AdjList = new Map();
  }

  addVertex(v) {
    this.AdjList.set(v, []);
  }

  addEdge(v, w) {
    this.AdjList.get(v).push(w);
    this.AdjList.get(w).push(v);
  }

  printGraph() {
    var get_keys = this.AdjList.keys();
    for (var i of get_keys) {
      var get_values = this.AdjList.get(i);
      var conc = "";

      for (var j of get_values) {
        conc += j + " ";  
      }

      console.log(i + " -> " + conc);
    }
  }
  
  bfs(startingNode) {
    var visited = {};

    var q = new Queue();
    visited[startingNode] = true;
    q.enqueue(startingNode);

    while (!q.isEmpty()) {
      var getQueueElement = q.dequeue();

      console.log(getQueueElement);

      var get_list = this.AdjList.get(getQueueElement);

      for (var i in get_list) {
        var neigh = get_list[i];

        if (!visited[neigh]) {
          visited[neigh] = true;
          q.enqueue(neigh);
        }
      }
    }
  }

  dfs(startingNode) {
    var visited = {};
    this.DFSUtil(startingNode, visited);
  }
  DFSUtil(vert, visited) {
    visited[vert] = true;
    console.log(vert);

    var get_neighbours = this.AdjList.get(vert);

    for (var i in get_neighbours) {
      var get_elem = get_neighbours[i];
      if (!visited[get_elem]) {
        this.DFSUtil(get_elem, visited);
      }
    }
  }
}

var g = new Graph(6);

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");

g.addEdge("A", "B");
g.addEdge("B", "D");
g.addEdge("A", "C");

g.bfs("A");
g.dfs("C");
g.printGraph();