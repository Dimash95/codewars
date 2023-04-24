function deleteDigit(n) {
   let arr = Array.from(String(n))
   let max = 0;

   for (let i = 0; i < arr.length; i++) {

      let del = arr.splice(i, 1)

      if (max < arr.join('')) {
         max = arr.join('')
      }

      arr.splice(i, 0, del)
   }
   return Number(max)
}
console.log(deleteDigit(152))// => 52
console.log(deleteDigit(1001))// => 101
console.log(deleteDigit(10))// => 1
console.log(deleteDigit(222219)) // => 22229
console.log(deleteDigit(109))// => 19
console.log(deleteDigit(342))// => 42