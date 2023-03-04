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
    // console.log(get_keys);
    for (var i of get_keys) {
      var get_values = this.AdjList.get(i);
      // console.log(get_values);
      var conc = "";

      for (var j of get_values) {
        conc += j + " "; 
        // console.log(conc); 
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
      // console.log(get_list);

      for (var i in get_list) {
        var neigh = get_list[i];
        // console.log(neigh);

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

g.addVertex(1);
g.addVertex(2);
g.addVertex(3);
g.addVertex(4);

g.addEdge("A", "B");
g.addEdge("B", "D");
g.addEdge("A", "C");

g.bfs("A");
g.dfs("C");
g.printGraph();