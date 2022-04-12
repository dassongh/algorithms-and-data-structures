// Write a RECURSIVE function called reverse
// which accepts a string and returns a new
// string in reverse
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

function reverse(str) {
  if (!str) return '';
  return str.slice(-1) + reverse(str.slice(0, str.length - 1));
}

// another implementation
// function reverse(str) {
//   if (str.length <= 1) return str;
//   return reverse(str.slice(1)) + str[0];
// }

console.log(reverse('awesome'));
console.log(reverse('rithmschool'));
console.log('rithmschool'.slice(1));
