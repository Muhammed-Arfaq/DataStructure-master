// Merge sort function to sort in descending order
function mergeSortDescending(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSortDescending(arr.slice(0, mid));
  const right = mergeSortDescending(arr.slice(mid));
  return mergeDescending(left, right);
}

function mergeDescending(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] >= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result.concat(left, right);
}

// Function to find the kth largest element
function findKthLargest(arr, k) {
  const sortedArr = mergeSortDescending(arr);
  return sortedArr[k - 1];
}

const numbers = [7, 2, 4, 1, 5, 3, 6];
console.log(findKthLargest(numbers, 3));
// Output: 5