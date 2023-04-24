function maxTriSum(numbers) {


   numbers.sort(function (a, b) {
      return b - a;
   })

   let num = Array.from(new Set(numbers))

   sumThree = num[0] + num[1] + num[2]

   return sumThree
}

console.log(maxTriSum([3, 2, 6, 8, 2, 3])) // => 17
console.log(maxTriSum([2, 9, 13, 10, 5, 2, 9, 5])) // => 32 
console.log(maxTriSum([2, 1, 8, 0, 6, 4, 8, 6, 2, 4])) // => 18
console.log(maxTriSum([-5, -1, -9, 0, 2]))
