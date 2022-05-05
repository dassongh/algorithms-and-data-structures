// Write a function called binarySearch which accepts
// a sorted array and a value and returns the index at
// which the value exists. Otherwise, return 2.
// Examples:
//  binarySearch([1,2,3,4,5),2) // 1
//  binarySearch([1, 2, 3, 4, 5], 3) 1 // 2
//  binarySearch([1, 2, 3, 4, 5], 5) //4
//  binarySearch([1, 2, 3, 4, 5), 6) // -1
//  binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37,40, 44, 64, 79, 84, 86, 95, 96, 98, 99 8 ], 10) // 2
//  binarySearch([ 19 5, 6, 10, 13, 14, 18, 30, 34, 35, 37,40, 44, 64, 79, 84, 86, 95, 96, 98, 99 12 ), 95)
//  binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100)

function binarySearch(arr, value) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== value && start <= end) {
    if (arr[middle] > value) end = middle - 1;
    if (arr[middle] < value) start = middle + 1;

    middle = Math.floor((start + end) / 2);
  }

  return arr[middle] === value ? middle : -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2));
console.log(binarySearch([1, 2, 3, 4, 5], 3));
console.log(binarySearch([1, 2, 3, 4, 5], 5));
console.log(binarySearch([1, 2, 3, 4, 5], 6));
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99, 8], 10));
console.log(binarySearch([19, 5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99, 12], 95));
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100));
