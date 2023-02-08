// Queue

class Queue {
  constructor() {
    this.items = [];
  }

  // add new element (to the end of the array)
  enqueue(element) {
    return this.items.push(element);
  }

  // remove element (from the front of the array)
  dequeue() {
    if (this.items.length == 0) {
      return "underflow";
    }
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length == 0;
  }

  front() {
    if (this.isEmpty()) {
      return "empty queue";
    }
    return this.items[0];
  }

  printQueue() {
    var str = "";
    for (var i = 0; i < this.items.length; i++) {
      str += this.items[i] + "  ";
    }
    return str;
  }
}

let q = new Queue();
q.enqueue(3);
q.enqueue(2);
q.dequeue();

console.log(q.isEmpty());
console.log(q.printQueue());
console.log(q.front());
