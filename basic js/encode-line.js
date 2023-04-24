function encodeLine(str) {

   let str2 = str

   for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < str2.length; j++){

         if(str[i] === str2[j]){
            count++
            char = str[i]
            
         }
      }
      

   }
   return count
}

console.log(encodeLine('aaaatttt')) // => 4a4t