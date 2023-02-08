/*
    SINGLY LINKED LIST
    ------------------
    Time Complexity:
        Search      ===>>> O(n)
        Insertion   ===>>> O(1)
        Deletion    ===>>> O(1)
    Space Complexity:
                    ===>>> O(n) (To store dynamic memory)
*/

var head;

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

// PRINT ALL VALUES IN THE NODE
function printList() {
  var n = head;
  while (n != null) {
    console.log(n.data);
    n = n.next;
  }
}

// CREATE NEW NODE
var head = new Node("www");
var second = new Node(2);
var third = new Node("AAA");

head.next = second;
second.next = third;

// ADD A NODE AT THE FRONT
function push(new_data) {
  var new_node = new Node(new_data);
  new_node.next = head;
  head = new_node;
}

// ADD A NODE AFTER A GIVEN NODE
function insertAfter(prev_node, new_data) {
  if (prev_node.next == null) {
    console.log("error");
    return;
  }
  var new_node = new Node(new_data);
  new_node.next = prev_node.next;
  prev_node.next = new_node;
}

// ADD A NODE AT THE END
function append(new_data) {
  var new_node = new Node(new_data);
  if (head == null) {
    head = new Node(new_data);
    return;
  }
  new_node.next = null;

  var last = head;
  while (last.next != null) {
    last = last.next;
  }
  last.next = new_node;
  return;
}

// append("last");
// insertAfter(second, "new");
// push(1234);
// printList();
