// This pattern involves dividing a data set into smaller
// chunks and then repeating a process with a subset of data.
// This pattern can tremendously decrease time complexity.

// ---------------task-----------------

// Given a sorted array of integers, write
// a function called search, that accepts a
// value and returns the index where the value
// passed to the function is located.If the value
// is not found, return -1

// search([1,2,3,4,5,6],4) // 3
// search([1,2,3,4,5,6],6) // 5
// search([1,2,3,4,5,6],11) // -1

// ----------------1------------------
// naive solution
// linear search
// time complexity - O(n)
function searchNaive(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    // or findIndex array method
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

console.log(searchNaive([1, 2, 3, 4, 5, 6], 4));
console.log(searchNaive([1, 2, 3, 4, 5, 6], 6));
console.log(searchNaive([1, 2, 3, 4, 5, 6], 11));

// ---------------2---------------------
// binary seacrh
// divide and conquer algorythm
// time complexity - O(log n)
function search(array, val) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if (currentElement < val) {
      min = middle + 1;
    } else if (currentElement > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}

console.log('-----------------');
console.log(search([1, 2, 3, 4, 5, 6], 4));
console.log(search([1, 2, 3, 4, 5, 6], 6));
console.log(search([1, 2, 3, 4, 5, 6], 11));
