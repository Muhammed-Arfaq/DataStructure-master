// stack class
class Stack {
  constructor() {
    this.items = [];
  }

  // push function (Add to the end of the array, ie. top of the stack)
  push(element) {
    this.items.push(element);
    console.log(`New element '${element}' pushed`);
  }

  //pop function (remove from the stack/ from the end of the array)
  pop() {
    if (this.items.length == 0) {
      return console.log("underflow, nothing to remove");
    }
    console.log("pop successful");
    return this.items.pop();
  }

  //peek function (get the last added item)
  peek() {
    return console.log(this.items[this.items.length - 1]);
  }

  isEmpty() {
    return console.log(this.items.length == 0);
  }

  printStack() {
    var str = "";
    for (var i = 0; i < this.items.length; i++) {
      str += this.items[i] + "  ";
    }
    return console.log(str);
  }
}

let newStack = new Stack();

newStack.push(12);
newStack.push(32);
newStack.printStack();
newStack.pop();
newStack.peek();
newStack.isEmpty();
