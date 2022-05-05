function selectionSort(arr) {
  const swap = (arr, idx1, idx2) => ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let min = i;

    for (let k = i + 1; k < arr.length; k++) {
      if (arr[k] < arr[min]) {
        min = k;
      }
    }

    if (i !== min) swap(arr, i, min);
  }

  return arr;
}

console.log(selectionSort([34, 22, 10, 19, 17]));

const data = Array.apply(null, { length: 100000 }).map(Function.call, Math.random);

const t1 = performance.now();
console.log(data.sort((a, b) => a - b));
const t2 = performance.now();
console.log(`Time Elapsed with JS sort method: ${(t2 - t1) / 1000} seconds`);

const t3 = performance.now();
console.log(selectionSort(data));
const t4 = performance.now();
console.log(`Time Elapsed with selection sort method: ${(t4 - t3) / 1000} seconds`);
