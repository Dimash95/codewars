function getCommonCharacterCount(s1, s2) {

   let count = 0;

   s1 = Array.from(s1)
   s2 = Array.from(s2)

   for (let i = 0; i < s1.length; i++) {
      for (let j = 0; j < s2.length; j++) {

         if (s1[i] === s2[j]) {
            count++
            delete s2[j]
            break
         }
      }
   }
   return count

}

// console.log(getCommonCharacterCount('aabcc', 'adcaa'))
// console.log(getCommonCharacterCount('zzzz', 'zzzzzzz'))
// console.log(getCommonCharacterCount('abca', 'xyzbac'))
// console.log(getCommonCharacterCount('', 'abc'))
console.log(getCommonCharacterCount('a', 'b'))
