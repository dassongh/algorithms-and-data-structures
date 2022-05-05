// -------------1---------------
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr.length; k++) {
      if (arr[k] > arr[k + 1]) {
        [arr[k], arr[k + 1]] = [arr[k + 1], arr[k]];
      }
    }
  }

  return arr;
}

console.log(bubbleSort([37, 45, 29, 8]));

// --------------2--------------
// refactored and optimized
function bubbleSort1(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let k = 0; k < i - 1; k++) {
      if (arr[k] > arr[k + 1]) swap(arr, k, k + 1);
    }
  }

  return arr;
}

console.log(bubbleSort1([37, 45, 29, 8]));

// ------------3--------------
// more optimized with noSwaps
// good time complexety with nearly sorted arrays - O(n), (O(1))
// usually its O(n^2)
function bubbleSort2(arr) {
  const swap = (arr, idx1, idx2) => ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
  let noSwaps = null;

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;

    for (let k = 0; k < i - 1; k++) {
      if (arr[k] > arr[k + 1]) {
        swap(arr, k, k + 1);
        noSwaps = false;
      }
    }

    if (noSwaps) break;
  }

  return arr;
}

console.log(bubbleSort2([8, 1, 2, 3, 4, 5, 6, 7]));

const data = Array.apply(null, { length: 100000 }).map(el => (el = Math.floor(Math.random() * 100000)));

const t1 = performance.now();
console.log(data.sort((a, b) => a - b));
const t2 = performance.now();
console.log(`Time Elapsed with JS sort method: ${(t2 - t1) / 1000} seconds`);

const t3 = performance.now();
console.log(bubbleSort2(data));
const t4 = performance.now();
console.log(`Time Elapsed with bubble sort method: ${(t4 - t3) / 1000} seconds`);
