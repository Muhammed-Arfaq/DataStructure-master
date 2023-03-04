class Graph {
    constructor(numVertices) {
        this.numVertices = numVertices;
        this.adjMatrix = [];
        for (let i = 0; i < numVertices; i++) {
            this.adjMatrix.push(Array(numVertices).fill(0));
        }
    }

    addEdge(i, j) {
        this.adjMatrix[i][j] = 1;
        this.adjMatrix[j][i] = 1;
    }

    removeEdge(i, j) {
        this.adjMatrix[i][j] = 0;
        this.adjMatrix[j][i] = 0;
    }

    dfs(start) {
        const visited = new Array(this.numVertices).fill(false);
        const stack = [];
        stack.push(start);
        visited[start] = true;
        while (stack.length > 0) {
            const curr = stack.pop();
            console.log(curr);
            for (let i = 0; i < this.numVertices; i++) {
                if (this.adjMatrix[curr][i] === 1 && !visited[i]) {
                    stack.push(i);
                    visited[i] = true;
                }
            }
        }
    }

    bfs(start) {
        const visited = new Array(this.numVertices).fill(false);
        const queue = [];
        queue.push(start);
        visited[start] = true;
        while (queue.length > 0) {
            const curr = queue.shift();
            console.log(curr);
            for (let i = 0; i < this.numVertices; i++) {
                if (this.adjMatrix[curr][i] === 1 && !visited[i]) {
                    queue.push(i);
                    visited[i] = true;
                }
            }
        }
    }
}

const graph = new Graph(5);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);

console.log(graph);