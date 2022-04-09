// Write a function called sameFrequency. Given
// two positive integers, find out if the two
// numbers have the same frequency of digits.
// Your solution MUST have the following complexeties:
// Time: O(n)
// Sample input:
//  sameFrequency(182, 281) //true
//  sameFrequency(34, 14) //false
//  sameFrequency(3589578, 5879385) //true
//  sameFrequency(22, 222) //false

function sameFrequency(num1, num2) {
  if (num1.length !== num2.length) return false;

  const frequencyCounter = {};
  const arr1 = num1.toString().split('');
  const arr2 = num2.toString().split('');

  arr1.forEach(el => (frequencyCounter[el] ? (frequencyCounter[el] += 1) : (frequencyCounter[el] = 1)));

  for (const digit of arr2) {
    if (!frequencyCounter[digit]) return false;
    frequencyCounter[digit] -= 1;
  }

  return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));
