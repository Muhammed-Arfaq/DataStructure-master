var head;

class Node{
    constructor(val){
        this.data = val;
        this.next = null;
    }
}

var head = new Node(1);
var second = new Node(2);
var third = new Node(3);

head.next = second;
second.next = third;

function append(new_data){
    var new_node = new Node(new_data);
    if(head == null){
        head = new Node(new_data);
        return;
    }

    new_node.next = null;
    var last = head;
    while(last.next != null){
        last = last.next;
    }
    last.next = new_node;
    return;
}

append(3);
append(5);

function printList(){
    var temp = head;
    while(temp.next != head){
        console.log(temp.data);
        temp = temp.next;
    }
}

printList();