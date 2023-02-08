// 3 times

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length == 0) {
      return "underflow";
    }
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  printStack(){
    let str = ""
    for(var i = 0; i < this.items.length; i++){
      str += this.items[i] + "  "
    }
    return str;
  }

  isEmpty(){
    return this.items.length == 0;
  }
  
}
