function minSum(arr) {

   arr.sort((a, b) => a - b)
   let res = 0;

   for (let i = 0; i < arr.length / 2; i++) {
      res += arr[i] * arr[arr.length - 1 - i]
   }
   return res
}


console.log(minSum([5, 4, 2, 3]))
console.log(minSum([12, 6, 10, 26, 3, 24]))
console.log(minSum([9, 2, 8, 7, 5, 4, 0, 6]))
