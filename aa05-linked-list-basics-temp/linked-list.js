class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  isEmpty() {
    return this.head === null;
  }

  /**
   * addToHead(val)
   * Takes any value, creates a new LL Node and pushes to the beginning of list
   * if the list is empty, only make the head = node
   * if not empty, still make head but make node.next (pointer) = current head
   * value.
   *
   * after, increment the length
   * - This is 0(1) time complexity
   * @param {any} val
   */
  addToHead(val) {
    const node = new LinkedListNode(val);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }

  /**
   * addToTail(val)
   * Takes any value and creates a new LL Node, and adds to end of list
   * If the list is empty simply make node the head
   * if not empty, traverse through list to find very last node
   * (will point to null)
   *
   * make the last node next value = (point to) node
   *
   * then increment the size
   *
   * - addingToTail is 0(n) time complexity
   * @param {any} val
   */

  addToTail(val) {
    const node = new LinkedListNode(val);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head; // LinkedListNode instance

      // while prev.next !== null
      // traverse through each node and get next value
      while (prev.next) {
        prev = prev.next;
      }

      // once we get to the node that points to null
      prev.next = node;
    }

    this.length++;
  }
  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;
