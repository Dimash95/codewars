function isPowerOfTwo(n) {

   for (let i = 0; i <= 30; i++) {
      if (2 ** i === n) {
         return true
      }
   }

   return false
}

console.log(isPowerOfTwo(4096))
console.log(isPowerOfTwo(2))
console.log(isPowerOfTwo(5))

// function isPowerOfTwo(n){
//    if(n == 1)
//      return true
//    if(n < 1)
//      return false
 
//   return isPowerOfTwo(n / 2)
 
//  }



// function isPowerOfTwo(n){
//    return Number.isInteger(Math.log2(n));
   
// }