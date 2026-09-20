class PriorityQueue {

    constructor() {
        this.arr = [];
    }

    add(node, distance) {

        // add at last index
        this.arr.push({
            node: node,
            distance: distance
        });

        let x = this.arr.length - 1; // child index
        let par = Math.floor((x - 1) / 2); // parent index

        while (
            x > 0 &&
            this.arr[x].distance < this.arr[par].distance
        ) {
            // swap
            let temp = this.arr[x];
            this.arr[x] = this.arr[par];
            this.arr[par] = temp;

            x = par;
            par = Math.floor((x - 1) / 2);
        }
    }

    peek() {
        return this.arr[0];
    }

    heapify(i) {

        let left = 2 * i + 1;
        let right = 2 * i + 2;

        let minIdx = i; // assume root is minimum

        if (
            left < this.arr.length &&
            this.arr[minIdx].distance > this.arr[left].distance
        ) {
            minIdx = left;
        }

        if (
            right < this.arr.length &&
            this.arr[minIdx].distance > this.arr[right].distance
        ) {
            minIdx = right;
        }

        // swap
        if (minIdx != i) {

            let temp = this.arr[i];
            this.arr[i] = this.arr[minIdx];
            this.arr[minIdx] = temp;

            this.heapify(minIdx);
        }
    }

    remove() {

        if (this.arr.length == 0) {
            return null;
        }

        let data = this.arr[0];

        // step 1 - swap first and last
        let temp = this.arr[0];
        this.arr[0] = this.arr[this.arr.length - 1];
        this.arr[this.arr.length - 1] = temp;

        // step 2 - delete last
        this.arr.pop();

        // step 3 - heapify
        if (this.arr.length > 0) {
            this.heapify(0);
        }

        return data;
    }

    isEmpty() {
        return this.arr.length == 0;
    }
}

export default PriorityQueue;