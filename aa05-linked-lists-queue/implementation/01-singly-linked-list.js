// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    const newNode = new SinglyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  addToTail(val) {
    // There are bugs in this method! Fix them!!!

    // Add node of val to tail of linked list
    let newNode = new SinglyLinkedNode(val);
    let currentNode;

    if (!this.head) {
      this.head = newNode;
    } else {
      currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;
    }
    this.length++;

    return this;
    // Write your hypothesis on the time complexity of this method here
  }

  removeFromHead() {
    if (this.head === null) return undefined;

    let prevHead = this.head;
    this.head = this.head.next;
    this.length--;
    return prevHead;
  }

  removeFromTail() {
    if (this.length === 0) {
      return;
    }
    // if list only has one element
    if (this.length === 1) {
      const node = this.head;
      this.head = null;
      this.length--;
      return node;
    }

    let currentNode = this.head;
    let previousNode;
    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    previousNode.next = null;
    this.length--;

    return currentNode;
  }

  peekAtHead() {
    // Return the value of head node
    if (!this.head) return;

    return this.head.value;
    // Write your hypothesis on the time complexity of this method here
  }

  print() {
    let curr = this.head;
    if (curr === null) {
      return;
    }
    while (curr) {
      console.log(curr.value, "->");
      curr = curr.next;
    }
    console.log("NULL");
  }
}

module.exports = {
  SinglyLinkedList,
  SinglyLinkedNode,
};
