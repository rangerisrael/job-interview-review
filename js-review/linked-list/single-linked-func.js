function NodeList(data) {
  this.data = data;
  this.next = null;
}

function SingleNodeList() {
  this.head = null;
  this.size = 0;

  this.append = function (data) {
    const newNode = new NodeList(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;
    }

    this.size++;
  };

  this.display = function () {
    let current = this.head;
    let result = [];

    while (current) {
      result.push(current.data);

      current = current.next;
    }
    console.log(this.head);
    console.log(result);
  };
}

const list = new SingleNodeList();
list.append(50);
list.append(80);
list.append(90);
list.display();
