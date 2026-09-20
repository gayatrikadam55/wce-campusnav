import PriorityQueue from "./PriorityQueue.js";

function dijkstra(graph, start, destination) {

    let distances = {};
    let previous = {};

    let pq = new PriorityQueue();

    // Initialize distances
    for (let node in graph.adjacencyList) {
        distances[node] = Infinity;
        previous[node] = null;
    }

    // Distance of start from itself
    distances[start] = 0;

    // Add starting node
    pq.add(start, 0);

    while (!pq.isEmpty()) {

        let current = pq.remove();

        let currentNode = current.node;
        let currentDistance = current.distance;

        // If destination is reached
        if (currentNode == destination) {
            break;
        }

        // Check all neighbours
        for (let neighbor of graph.adjacencyList[currentNode]) {

            let newDistance =
                currentDistance + neighbor.distance;

            if (newDistance < distances[neighbor.node]) {

                distances[neighbor.node] = newDistance;

                previous[neighbor.node] = currentNode;

                pq.add(neighbor.node, newDistance);
            }
        }
    }

    // Create shortest path
    let path = [];

    let current = destination;

    while (current != null) {
        path.unshift(current);
        current = previous[current];
    }

    return {
        distance: distances[destination],
        path: path
    };
}

export default dijkstra;