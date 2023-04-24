function sortByHeight(arr) {

   arr.sort(function (a, b) {
      if (a !== -1 && b !== -1) {
         return a - b
      }


   })
   return arr
}


console.log(sortByHeight([4, 2, 5, 1, 3]))
console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])) // => [-1, 150, 160, 170, -1, -1, 180, 190]