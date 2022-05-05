function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];

    for (var k = i - 1; k >= 0 && arr[k] > currentVal; k--) {
      arr[k + 1] = arr[k];
    }

    arr[k + 1] = currentVal;
  }

  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));

const data = Array.apply(null, { length: 100000 }).map(Function.call, Math.random);

const t1 = performance.now();
console.log(data.sort((a, b) => a - b));
const t2 = performance.now();
console.log(`Time Elapsed with JS sort method: ${(t2 - t1) / 1000} seconds`);

const t3 = performance.now();
console.log(insertionSort(data));
const t4 = performance.now();
console.log(`Time Elapsed with insertion sort method: ${(t4 - t3) / 1000} seconds`);
