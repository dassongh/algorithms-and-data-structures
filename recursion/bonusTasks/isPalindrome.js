// Write a recursive function called isPalindrome
// which returns true if the string passed to it
// is a palindrome. Otherwise return false
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

// ----------------1--------------------
function isPalindrome(str) {
  let reversedString = helper(str);

  if (reversedString === str) return true;
  return false;

  function helper(str) {
    if (!str) return '';
    return str.slice(-1) + helper(str.slice(0, str.length - 1));
  }
}

// ----------------2--------------------
function isPalindrome1(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}

console.log(isPalindrome('awesome'));
console.log(isPalindrome('foobar'));
console.log(isPalindrome('tacocat'));
console.log(isPalindrome('amanaplanacanalpanama'));
console.log(isPalindrome('amanaplanacanalpandemonium'));
