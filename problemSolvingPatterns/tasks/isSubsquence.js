// Write a function called isSubsequnce which takes
// in two strings and cheks whether the characters in
// the first string form a subsequence of the characters
// in the second srting. In the other words, the function
// should check whether the characters in the first string
// appear somewhere in the second string, without their
// order changing.
// Examples:
//  isSubsequence('hello', 'hello world'); //true
//  isSubsequence('sing', 'sting'); //true
//  isSubsequence('abc', 'abracadabra'); //true
//  isSubsequence('abc', 'acb'); //false (order matters)
// Your solution must have at least the following complexeties
//  Time - O(n + m)
//  Space - O(1)

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;

  if (!str1) return true;

  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;

    j++;
  }

  return false;
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abc', 'acb'));

// isSubsequence Solution - Recursive but not O(1) Space
function isSubsequenceR(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));

  return isSubsequence(str1, str2.slice(1));
}
