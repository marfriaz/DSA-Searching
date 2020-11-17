"use strict";
const BinarySearchTree = require("./BinarySearchTree");

//=== 1. How many searches? ===//

// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm,
// identify the sequence of numbers that each recursive call will search to try and find 8.

// look for the midle of the array (0 +10/2 = 5 = index)
// returns 12
// 8<12 so will look through lower half (end = index-1 = 4).

// 3,5,6,8,11 find middle point again (0+4=2 = index)
// returns 6
// 8>6 so will look in upper half (start = index+1 = 3)

// 8,11 find midpoint. (start =3, end = 4 ==> 7/2 = 3 = index)
// no mid point so returns higher???
// returns 11
// 8<11
// so will look lowe half
// finds 8
// 8 === value
// returns 8; final output.

//=== 3. Find a book ===//

// Imagine you are looking for a book in a library with a Dewey Decimal index.
// How would you go about it? Can you express this process as a search algorithm?
// Implement your algorithm to find a book whose Dewey and book title is provided.

function deweySearching(dewey, title, start, end) {
  start = start === undefined ? 0 : start;
  end = end === undefined ? dewey.length : end;

  if (start > end) {
    return -1;
  }
  const index = Math.floor((start + end) / 2);
  const item = dewey[index];

  for (let i = 0; i < dewey.length; i++) {
    if (dewey[i] == title) {
      return "found book";
    }
  }
  if (item < dewey) {
    return deweySearching(dewey, title, index + 1, end);
  } else if (item > dewey) {
    return deweySearching(dewey, title, start, index - 1);
  }
}
console.log(deweySearching(["be", "he", "hi"], "hi"));

//=== 5. Implement different tree traversals ===//

// Using your BinarySearchTree class from your previous lesson, create a binary search
// tree with the following dataset: 25 15 50 10 24 35 70 4 12 18 31 44 66 90 22.
// Then implement inOrder(), preOrder(), and postOrder() functions. Test your functions with the following datasets.
// A pre-order traversal should give you the following order: 25, 15, 10, 4, 12, 24, 18, 22, 50, 35, 31, 44, 70, 66, 90
// In-order: 4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90
// Post-order: 4, 12, 10, 22, 18, 24, 15, 31, 44, 35, 66, 90, 70, 50, 25

function main() {
  const BST = new BinarySearchTree();
  const data = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];
  data.forEach((value) => BST.insert(value));
  console.log(BST.inOrder());
  console.log(BST.preOrder());
  console.log(BST.postOrder());
}
// main();

//=== 7. Max profit ===//

// The share price for a company over a week's trading is as follows: [128, 97, 121, 123, 98, 97, 105].
// If you had to buy shares in the company on a particular day, and sell the shares on a subsequent day,
// write an algorithm to work out what the maximum profit you could make would be.

function maxProfits(arr) {
  //take in an array, return max profit
  let currMin = arr[0];
  let currMinIndex = arr[0];
  let currMax = arr[arr.length - 1];
  let currMaxIndex = arr[arr.length - 1];
  let currMaxProfit = currMax - currMin;

  for (let i = 0; i < arr.length; i++) {
    //iterate through the array looking for a better minimum
    if (currMaxIndex > i && currMax - arr[i] > currMaxProfit) {
      currMin = arr[i];
      currMinIndex = i;
      currMaxProfit = currMax - currMin;
    }
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > currMax) {
        currMax = arr[j];
        currMaxProfit = currMax - currMin;
      }
    }
  }
  return currMaxProfit;
}

const SHARE_PRICES = [128, 97, 121, 123, 98, 97, 105];
console.log(maxProfits(SHARE_PRICES));

//=== 8. Egg drop ===//

// Imagine that you wanted to find the highest floor of a 100 story building that
// you could drop an egg from without the egg breaking. But you only have 2 eggs.
// Write an algorithm to find out in the most efficient way which floors you should drop the eggs from.
