function minesweeper(matrix) {

   for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j++) {
         let n = 1
         if (matrix[i][j] === true) {
            (matrix[i][j] = 1) && (matrix[i + n][j + n] = 1)
         }

      }
   }

   return matrix
}

console.log(minesweeper([
   [true, false, false],
   [false, true, false],
   [false, false, false],
]))

console.log(minesweeper([
   [false, false, false],
   [false, false, false],
]))

// [1, 2, 1],
// [2, 1, 1],
// [1, 1, 1],