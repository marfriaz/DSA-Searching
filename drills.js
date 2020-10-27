"use strict";

//=== 1. How many searches? ===//

// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm,
// identify the sequence of numbers that each recursive call will search to try and find 8.

// look for the midle of the array
// returns 12
// 8<12 so will look through lower half.

// 3,5,6,8,11 find middle point again
// returns 6
// 8>6 so will look in upper half

// 8,11 find midpoint.
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

//=== 7. Max profit ===//

// The share price for a company over a week's trading is as follows: [128, 97, 121, 123, 98, 97, 105].
// If you had to buy shares in the company on a particular day, and sell the shares on a subsequent day,
// write an algorithm to work out what the maximum profit you could make would be.

const SHARE_PRICES = [128, 97, 121, 123, 98, 97, 105];

/**
 * The share price for a company over a week's trading is as follows:
 *  [128, 97, 121, 123, 98, 97, 105]. If you had to buy shares in the
 *  company on a particular day, and sell the shares on a following day,
 *  write an algorithm to work out what the maximum profit you could make would be.
 */

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

console.log(maxProfits(SHARE_PRICES));

//=== 8. Egg drop ===//

// Imagine that you wanted to find the highest floor of a 100 story building that
// you could drop an egg from without the egg breaking. But you only have 2 eggs.
// Write an algorithm to find out in the most efficient way which floors you should drop the eggs from.
