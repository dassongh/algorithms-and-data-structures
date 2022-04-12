function factorialLoop(num) {
  let total = 1;

  for (let i = num; i > 1; i--) {
    total *= i;
  }

  return total;
}

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

function factorial1(x) {
  if (x < 0) return 0;
  if (x <= 1) return 1;
  return x * factorial(x - 1);
}

console.log(factorialLoop(4));
console.log(factorial(4));
console.log(factorial(11));
