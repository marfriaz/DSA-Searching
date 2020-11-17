"use strict";
const BinarySearchTree = require("./BinarySearchTree");
const Queue = require("./queue");

//=== 6. Find the next commanding officer ===//

// Breadth-first search!!!!!!!!! Works across rows of a tree

// Suppose you have a tree representing a command structure of the Starship USS Enterprise.
//                Captain Picard
//              /                \
//     Commander Riker       Commander Data
//       /         \               \
//  Lt. Cmdr.   Lt. Cmdr.          Lt. Cmdr.
//  Worf        LaForge            Crusher
//    /                           /
// Lieutenant                  Lieutenant
// security-officer            Selar

// This tree is meant to represent who is in charge of lower-ranking officers.
// For example, Commander Riker is directly responsible for Worf and LaForge.
// People of the same rank are at the same level in the tree. However, to distinguish between people of the same rank,
// those with more experience are on the left and those with less on the right (i.e., experience decreases from left to right).
// Suppose a fierce battle with an enemy ensues. Write a program that will take this tree of commanding officers and outlines
// the ranking officers in their ranking order so that if officers start dropping like flies, we know who is the next person
// to take over command.

function bfs(tree, values = []) {
  const queue = new Queue();
  const node = tree.root;
  queue.enqueue(node);
  while (queue.first) {
    const node = queue.dequeue();
    // remove from the queue

    values.push(node.value);
    // add that value from the queue to an array

    if (node.left) {
      queue.enqueue(node.left);
      //add left child to the queue
    }
    if (node.right) {
      queue.enqueue(node.right);
      // add right child to the queue
    }
  }
  return values;
}

function main() {
  const CommandTree = new BinarySearchTree();
  CommandTree.insert(5, "Captain Picard");
  CommandTree.insert(6, "Commander Data");
  CommandTree.insert(8, "Lt. Cmdr. Crusher");
  CommandTree.insert(7, "Lieutenant Selar");
  CommandTree.insert(3, "Commander Riker");
  CommandTree.insert(2, "Lt. Cmdr. Worf");
  CommandTree.insert(4, "Lt. Cmdr. LaForge");
  CommandTree.insert(1, "Lieutenant Security-officer");

  const chain = bfs(CommandTree);
  console.log(chain);
}
main();
