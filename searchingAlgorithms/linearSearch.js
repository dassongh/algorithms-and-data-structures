// Write a function called linear Search which
// accepts an array and a value, and returns the
// index at which the value exists.If the value
// does not exist in the array, return -1.
// Don't use indexOf to implement this function!
// Examples:
//  linearSearch([10, 15, 20, 25, 30], 15)
//  linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)
//  linearSearch([100], 100)
//  linearSearch([1,2,3,4,5), 6)
//  linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)
//  linearSearch([100], 200) // -1

function findIndex(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }

  return -1;
}

console.log(findIndex([10, 15, 20, 25, 30], 15));
console.log(findIndex([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4));
console.log(findIndex([100], 100));
console.log(findIndex([1, 2, 3, 4, 5], 6));
console.log(findIndex([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10));
console.log(findIndex([100], 200));
