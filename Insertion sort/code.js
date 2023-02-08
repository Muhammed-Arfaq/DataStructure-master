function insertionSort(arr, n) {
  let i, j, key;
  for (i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
}   

function printArray(arr) {
  arr.forEach((item) => console.log(item));
}

let array = [2, 1, 6, 5, 4, 9, 3];
let n = array.length;

insertionSort(array, n);
printArray(array);
