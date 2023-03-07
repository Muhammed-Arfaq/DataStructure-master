class Graph{
    constructor() {
        this.adjacentList = {}
    }
    addVertex(vertex) {
        if(!this.adjacentList[vertex]) {
            this.adjacentList[vertex] = []
        }
    }

    addEdge(v1, v2) {
        this.adjacentList[v1].push(v2)
        this.adjacentList[v2].push(v1)
    }

    bfs(start) {
        const queue = [start]
        const result = []
        const visited = {}
        let currentVertex
        visited[start] = true

        while(queue.length) {
            currentVertex = queue.shift()
            result.push(currentVertex)

            this.adjacentList[currentVertex].forEach((neighbor) => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true
                    queue.push(neighbor)
                }
            })
        }
        return result
    }

    dfs(start) {
        const stack = [start]
        const result = []
        const visited = {}
        let currentVertex

        visited[start] = true
        while(stack.length) {
            currentVertex = stack.pop()
            result.push(currentVertex)

            this.adjacentList[currentVertex].forEach((neighbor) => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true
                    stack.push(neighbor)
                }
            })
        }
        return result
    }
}

var g = new Graph()

g.addVertex(1)
g.addVertex(2)
g.addVertex(3)
g.addVertex(4)
g.addVertex(5)
g.addVertex(6)

console.log(g)

console.log(g.bfs());


