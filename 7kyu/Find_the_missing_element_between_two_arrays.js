function findMissing(arr1, arr2) {

   let sum1 = 0;
   let sum2 = 0;
   let res;
   arr1.map(e => sum1 += e)
   arr2.map(e => sum2 += e)
   res = sum1 - sum2;
   return res
}

console.log(findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]))
console.log(findMissing([4, 3, 3, 61, 8, 8], [8, 61, 8, 3, 4]))
console.log(findMissing([3, 8], [3]))