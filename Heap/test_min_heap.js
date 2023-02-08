function heapPop(heap) {
  let n = heap.length;
  [heap[0], heap[n - 1]] = [heap[n - 1], heap[0]];
  let removedKey = heap.pop();

  let curr = 0;
  while (2 * curr + 1 < heap.length) {
    let leftIndex = 2 * curr + 1;
    let rightIndex = 2 * curr + 2;
    let minChildIndex =
      rightIndex < heap.length && heap[rightIndex] < heap[leftIndex]
        ? rightIndex
        : leftIndex;

    if (heap[minChildIndex] < heap[curr]) {
      [heap[minChildIndex], heap[curr]] = [heap[curr], heap[minChildIndex]];

      curr = minChildIndex;
    } else {
      break;
    }
  }
  return removedKey;
}

function heapPush(heap, newData) {
  heap.push(newData);

  let curr = heap.length - 1;
  while (curr > 0) {
    let parent = Math.floor((curr - 1) / 2);
    if (heap[curr] < heap[parent]) {
      [heap[curr], heap[parent]] = [heap[parent], heap[curr]];

      curr = parent;
    } else {
      break;
    }
  }
}
