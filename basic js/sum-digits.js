


function getSumOfDigits(n) {
   while (String(n).length !== 1) {
      n1 = Math.floor(n / 10)
      n2 = n % 10
      n = n1 + n2
   }
   return n
}









// return function () {
//       if (String(res).length === 1) {
//          console.log(res)
//          return res
//       } else {
//          getSumOfDigits(res)
//       }
//    }



console.log(getSumOfDigits(91)) // => 1
console.log(getSumOfDigits(100)) // => 1
console.log(getSumOfDigits(35)) // => 8
console.log(getSumOfDigits(99)) // => 9
console.log(getSumOfDigits(123)) // => 6
