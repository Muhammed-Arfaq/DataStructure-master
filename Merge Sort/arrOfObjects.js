function mergeSortByAge(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSortByAge(arr.slice(0, mid));
  const right = mergeSortByAge(arr.slice(mid));
  return mergeByAge(left, right);
}

function mergeByAge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0].age <= right[0].age) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result.concat(left, right);
}

const people = [  
  { name: "John", age: 25 },
  { name: "Sarah", age: 31 },
  { name: "Bob", age: 19 },
  { name: "Karen", age: 38 }
];
console.log(mergeSortByAge(people));
