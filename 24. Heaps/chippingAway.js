class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value)
    let idx = this.values.length - 1;
    let parentIdx = Math.floor((idx - 1) / 2);
    while (this.values[idx] > this.values[parentIdx]) {
      [this.values[idx], this.values[parentIdx]] = [this.values[parentIdx], this.values[idx]]
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
    }

  }
}

const heap = new MaxBinaryHeap();
heap.insert(99);
heap.insert(2);
heap.insert(3);
heap.insert(10000);
console.log(heap.values);