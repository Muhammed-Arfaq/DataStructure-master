function bubbleSort(arr, n) {
  let i, j, temp, swapped;
  for (i = 0; i < n - 1; i++) {
    swapped = false;
    for (j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (swapped == false) {
      break;
    }
  }
}

function printArray(arr) {
  return arr.forEach((item) => console.log(item));
}

let array = [1, 34, 56, 2, 0];
let n = array.length;

bubbleSort(array, n);

printArray(array);
