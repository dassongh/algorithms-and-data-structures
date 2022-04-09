//Given two strings, write a function to determine if the second
//string is an anagram of the first.An anagram is a word, phrase,
//or name formed by rearranging the letters of another, such as
//cinema, formed from iceman.

// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true

// ---------------1------------------
// frequency counter approach
// - no nested loops
// - it`s quick to access data inside of an object
// the time complexity is O(n)
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const lookup = {};

  for (const letter of str1) {
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (const letter of str2) {
    if (!lookup[letter]) return false;
    lookup[letter] -= 1;
  }

  return true;
}

console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('awesome', 'awesom'));
console.log(validAnagram('qwerty', 'qeywrt'));
console.log(validAnagram('texttwisttime', 'timetwisttext'));
console.log(validAnagram('asdf', 'zxcv'));

// ----------------2-----------------
// my solition
// more compact and readeble
// but time complexity is O(n * log n)
function validAnagramNaive(str1, str2) {
  if (str1.split('').sort().join('') === str2.split('').sort().join('')) return true;
  return false;
}

console.log('------------------');
console.log(validAnagramNaive('', ''));
console.log(validAnagramNaive('aaz', 'zza'));
console.log(validAnagramNaive('anagram', 'nagaram'));
console.log(validAnagramNaive('rat', 'car'));
console.log(validAnagramNaive('awesome', 'awesom'));
console.log(validAnagramNaive('qwerty', 'qeywrt'));
console.log(validAnagramNaive('texttwisttime', 'timetwisttext'));
console.log(validAnagram('asdf', 'zxcv'));
