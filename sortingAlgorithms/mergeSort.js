function merge(arr1, arr2) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

console.log(merge([1, 6, 7], [4, 5, 9, 10]));

const data = Array.apply(null, { length: 100000 }).map(Function.call, Math.random);

const t1 = performance.now();
console.log(data.sort((a, b) => a - b));
const t2 = performance.now();
console.log(`Time Elapsed with JS sort method: ${(t2 - t1) / 1000} seconds`);

const t3 = performance.now();
console.log(mergeSort(data));
const t4 = performance.now();
console.log(`Time Elapsed with merge sort method: ${(t4 - t3) / 1000} seconds`);
