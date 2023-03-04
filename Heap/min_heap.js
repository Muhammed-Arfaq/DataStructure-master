function heappush(heap, newKey) {
  heap.push(newKey);

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

function heappop(heap) {
  const n = heap.length;
  [heap[0], heap[n - 1]] = [heap[n - 1], heap[0]];
  const removedKey = heap.pop();

  let curr = 0;

  while (2 * curr + 1 < heap.length) {
    const leftIndex = 2 * curr + 1;
    const rightIndex = 2 * curr + 2;
    const minChildIndex =
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

function printHeap(heap) {
  const levels = Math.floor(Math.log2(heap.length));
  let levelStart = 0;
  for (let i = 0; i <= levels; i++) {
    let levelEnd = Math.min(levelStart + 2 ** i - 1, heap.length - 1);
    console.log(" ".repeat((2 ** (levels - i + 1)) - 1) + heap.slice(levelStart, levelEnd + 1).join(" ".repeat((2 ** (levels - i + 2)) - 1)));
    levelStart = levelEnd + 1;
  }
}

let aHeap = [];

heappush(aHeap, 9);
heappush(aHeap, 2);
heappush(aHeap, 1);
heappush(aHeap, 10);
heappush(aHeap, 0);
heappop(aHeap);

printHeap(aHeap);
// console.log(aHeap);
