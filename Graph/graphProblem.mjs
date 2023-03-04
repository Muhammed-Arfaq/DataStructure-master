function riverSizes(matrix) {
  const sizes = []; 


  function traverse(row, col) {
    if (row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length) {
      // check if we're out of bounds
      return 0;
    }

    if (matrix[row][col] === 0) {
      // check if we've already visited this land
      return 0;
    }

    matrix[row][col] = 0; 

    let size = 1; 
    size += traverse(row-1, col); 
    size += traverse(row+1, col); 
    size += traverse(row, col-1); 
    size += traverse(row, col+1); 

    return size;
  }


  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 1) {
        sizes.push(traverse(row, col));
      }
    }
  }

  return sizes;
}

  const matrix = [
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0],
  ];
  
  const sizes = riverSizes(matrix);
  console.log(sizes); 
  