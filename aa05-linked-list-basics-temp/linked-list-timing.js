const LinkedList = require("./linked-list.js");
const DoublyLinkedList = require("./doubly-linked-list.js");

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

let heads = [];
let tails = [];

for (let i = 0; i < 100; i++) {
  heads.push(i);
  tails.push(i);
}

let list1 = new LinkedList();

console.log("\n====== LinkedList: addToHead ======\n");
let startTime;
let endTime;
heads.forEach((node) => {
  startTime = Date.now();
  list1.addToHead(node);
  endTime = Date.now();

  console.log(node, endTime - startTime);
});

console.log("\n====== LinkedList: addToTails ======\n");
tails.forEach((node) => {
  startTime = Date.now();
  list1.addToTail(node);
  endTime = Date.now();

  console.log(node, endTime - startTime);
});

let list2 = new DoublyLinkedList();

console.log("\n====== Dub-LinkedList: addToHead ======\n");
heads.forEach((node) => {
  startTime = Date.now();
  list2.addToHead(node);
  endTime = Date.now();

  console.log(endTime - startTime);
});

console.log("\n====== Dub-LinkedList: addToTails ======\n");
tails.forEach((node) => {
  startTime = Date.now();
  list2.addToTail(node);
  endTime = Date.now();

  console.log(endTime - startTime);
});

// both returned constant timing
