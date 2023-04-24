function nbDig(n, d) {

   let count = 0;
   let arr = [];

   for (let i = 0; i <= n; i++) {
      arr.push(i * i);
   }

   for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < String(arr[i]).length; j++) {

         arr[i] = String(arr[i])

         if (arr[i][j] == d) {
            count++
         }
      }
   }
   return count
}

console.log(nbDig(10, 1))