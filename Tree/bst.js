class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class binarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  inorder(node){
    if(node != null){
      this.inorder(node.left)
      console.log(node.data);
      this.inorder(node.right)
    }
  }

  postOrder(node) {
    if(node!=null) {
      this.postOrder(node.left)
      this.postOrder(node.right)
      console.log(node.data)
    }
  }

}

let bst = new binarySearchTree();

bst.insert(12);
bst.insert(20);
bst.insert(3);
bst.insert(2);
bst.insert(8);
bst.insert(40);
bst.insert(10);

console.log(bst);
// bst.inorder(bst.root)
bst.postOrder(bst.root)


