function swap(arr, x, y) {
  var temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

function selectionSort(arr, n) {
  let i, j, min_index;
  for (i = 0; i < n - 1; i++) {
    min_index = i;
    for (j = i + 1; j < n; j++) {
      if (arr[j] < arr[min_index]) {
        min_index = j;
      }
    }
    swap(arr, min_index, i);
  }
}

let array = [2, 5, 1, 6, 8];

let n = array.length;

selectionSort(array, n);

array.forEach((item) => console.log(item));
