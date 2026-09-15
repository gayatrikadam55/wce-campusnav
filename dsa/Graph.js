class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addNode(node) {
        if (!this.adjacencyList[node]) {
            this.adjacencyList[node] = [];
        }
    }

    addEdge(from, to, distance) {
        this.addNode(from);
        this.addNode(to);

        this.adjacencyList[from].push({
            node: to,
            distance: distance
        });

        this.adjacencyList[to].push({
            node: from,
            distance: distance
        });
    }
}

export default Graph;