class WeightedGraph {
    constructor(numVertices) {
        this.numVertices = numVertices;
        this.matrix = [];

        for (let i = 0; i < numVertices; i++) {
            this.matrix.push([]);
            for (let j = 0; j < numVertices; j++) {
                this.matrix[i].push(0);
            }
        }
    }

    addEdge(source, dest, weight) {
        this.matrix[source][dest] = weight;
    }

    getEdgeWeight(source, dest) {
        return this.matrix[source][dest];
    }

    printGraph() {
        for (let i = 0; i < this.numVertices; i++) {
            const row = [];
            for (let j = 0; j < this.numVertices; j++) {
                row.push(this.matrix[i][j]);
            }
            console.log(row.join(' '));
        }
    }
}

const graph = new WeightedGraph(4);

graph.addEdge(0, 1, 2); 
graph.addEdge(0, 2, 3); 
graph.addEdge(1, 2, 1); 
graph.addEdge(1, 3, 4); 
graph.addEdge(2, 3, 5); 

graph.printGraph();






