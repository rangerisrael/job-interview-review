class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //   add to add
  append(data) {
    const newNode = new Node(data);

    // if head isn't empty
    if (!this.head) {
      this.head = newNode;
    } else {
      // get the current
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = newNode;
    }
    this.size++;
  }

  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  print() {
    let current = this.head;
    let result = [];

    while (current) {
      result.push(current.data);
      current = current.next;
    }

    console.log(result);
  }
  clear() {
    this.head = null;
    this.size = 0;
  }
}

const list = new SingleLinkedList();

// list.append(10);
// list.append(20);
list.append(30);
list.append(40);
list.prepend(100);

list.print();
console.log("END Class single linkedlist");
