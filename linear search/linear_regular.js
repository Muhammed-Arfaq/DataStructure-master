function search(arr, n, x) {
  let i;
  for (i = 0; i < n; i++) {
    if (arr[i] == x) {
      return i;
    }
  }
  return -1;
}

let arr = [0, 4, 5, 2, 5, 1];
let n = arr.length;
let x = 11;
let result = search(arr, n, x);

console.log(result);
