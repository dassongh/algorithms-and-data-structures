// Creating pointers or values that correspond to an index
//  or position and move towards the beginning, end or middle
// based on a certain condition.
// Very efficient for solving problems with minimal space complexity as well

// ------------task----------------

// Write a function called sumZero which accepts
// a sorted array of integers.The function should
// find the first pair where the sum is 0. Return
// an array that includes both values that sum to
// zero or undefined if a pair does not exist

// sumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3,3]
// sumZero([-2, 0, 1, 3]); // undefined
// sumZero([1, 2, 3]); // undefined

// ------------1-------------
// my solution
// nested loop
// time complexity - O(n^2)
// space complexity - O(1)
function sumZeroNaive(arr) {
  for (const number of arr) {
    if (number === 0) continue;

    for (const secNumber of arr) {
      if (!(number + secNumber)) return [number, secNumber];
    }
  }

  return undefined;
}

console.log(sumZeroNaive([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZeroNaive([-2, 0, 1, 3]));
console.log(sumZeroNaive([1, 2, 3]));

// another solution with nested loop
function sumZeroNaive1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// -------------2-------------
// multiple pointers pattern solution
// time complexity - O(n)
// space complexity - O(1)
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }

  return undefined;
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([1, 2, 3]));
