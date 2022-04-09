// This pattern uses objects or sets to collect values/frequencies of values
// This can often avoid the need for nested loops or O(N^2) operations with arrays / strings

// ------------task----------------

// write a function called same, which accepts two arrays. The function
// should return true if every value in the array has it`s corresponding
// value squered in the second array. The frequency of values must be the same

// same([1, 2, 3], [4, 1, 9]); // true
// same([1, 2, 3], [1, 9]); // false
// same([1, 2, 1], [4, 4, 1]); // false (must be same frequency)

// ---------------1-------------------
// naive approach
// there is a nested loop
// so the time complexity is O(n^2) which is not good
function sameNaive(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2); // indexOf is a nested loop
    if (correctIndex === -1) return false;

    arr2.splice(correctIndex, 1);
  }

  return true;
}

// ----------------2------------------
// frequency counter approach
// - no nested loops
// - it`s quick to access data inside of an object
// the time complexity is O(n)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (const val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (const val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (const key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) return false;
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
  }

  return true;
}

const t1 = performance.now();

console.log(same([1, 2, 3], [4, 1, 9])); // true
console.log(same([1, 2, 3], [1, 9])); // false
console.log(same([1, 2, 1], [4, 4, 1])); // false (must be same frequency)
console.log(same([8, 6, 0, 9, 2, 7, 9, 3, 8, 4, 2], [64, 36, 0, 81, 4, 49, 81, 9, 64, 16, 4]));

const t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);
