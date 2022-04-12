// Implement a function called areThereDuplicates,
// which accepts a variable number of arguments,
// and checks whether there are any duplicates
// among the arguments passed in. You can solve
// this using the frequency counter pattern OR
// the multiple pointers pattern.
// Examples:
//  areThereDuplicates(1,2,3) //false
//  areThereDuplicates(1,2,2) //true
//  areThereDuplicates('a','b','c','a') //true
// Restrictions:
//  Time - O(n)
//  Space - O(n)
// Bonus:
//  Time - O(n log n)
//  Space - O(1)

// ---------------1-----------------
// frequency counter solution
function areThereDuplicatesFC(...args) {
  const frequencyCounter = {};

  args.forEach(el => (frequencyCounter[el] ? (frequencyCounter[el] += 1) : (frequencyCounter[el] = 1)));

  for (const key in frequencyCounter) {
    if (frequencyCounter[key] > 1) return true;
  }

  return false;
}

console.log(areThereDuplicatesFC(1, 2, 3));
console.log(areThereDuplicatesFC(1, 2, 2));
console.log(areThereDuplicatesFC('a', 'b', 'c', 'a'));
console.log(areThereDuplicatesFC(1, 2, 3, 4, 5, 5, 6, 7, 8, 8, 9, 10));

// ---------------2-----------------
// multiple pointers solution
// works only with numbers
function areThereDuplicatesMP(...args) {
  args.sort((a, b) => a - b);

  let start = 0;
  let next = 1;

  while (next < args.length) {
    if (args[start] === args[next]) return true;

    start++;
    next++;
  }

  return false;
}

console.log('-----------------------');
console.log(areThereDuplicatesMP(1, 2, 3));
console.log(areThereDuplicatesMP(1, 2, 2));
// console.log(areThereDuplicatesMP('a', 'b', 'c', 'a'));
console.log(areThereDuplicatesMP(1, 2, 3, 4, 5, 6, 7, 8, 5, 9, 10));
console.log(areThereDuplicatesMP(6, 8, 4, 3, 5, 1, 7, 8, 5, 2, 10));

// --------------3-----------------
// one liner solution
function areThereDuplicatesL(...args) {
  return new Set(args).size !== args.length;
}

console.log('-----------------------');
console.log(areThereDuplicatesL(1, 2, 3));
console.log(areThereDuplicatesL(1, 2, 2));
console.log(areThereDuplicatesL('a', 'b', 'c', 'a'));
console.log(areThereDuplicatesL(1, 2, 3, 4, 5, 5, 6, 7, 8, 8, 9, 10));
