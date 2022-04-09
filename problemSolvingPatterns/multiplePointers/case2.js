// Implement a function called countUniqueValues,
// which accepts a sorted array, and counts the
// unique values in the array.There can be negative
// numbers in the array, but it will always be sorted.

// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4

// my solution
// using multiple pointers pattern
// time complexity = O(n)
// space complexity = O(1)???
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let counter1 = 0;
  let counter2 = 1;
  let totalUnique = 0;

  while (counter2 <= arr.length) {
    if (arr[counter1] !== arr[counter2]) {
      totalUnique++;
      counter1 = counter2;
      counter2++;
      continue;
    }

    counter2++;
  }

  return totalUnique;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));

// another solution
// time complexity = O(n)
// space complexity = O(1)???
function countUniqueValues1(arr) {
  if (arr.length === 0) return 0;
  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}

console.log('---------------');
console.log(countUniqueValues1([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues1([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues1([]));
console.log(countUniqueValues1([-2, -1, -1, 0, 1]));
