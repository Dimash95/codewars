function transform(arr) {

   let arr2 = []
   let dn = 0;
   let dp = 0;

   for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '--double-next') {
         arr[i] = arr[i + 1]
         arr2.push(arr[i])

      } else if (arr[i] === '--double-prev') {
         arr[i] = arr[i - 1]
         arr2.push(arr[i])

      } else if (arr[i] === '--discard-next') {
         dn = i
      } else if (arr[i] === '--discard-prev') {
         dp = i
      } else {
         arr2.push(arr[i])
      }
   }

   for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '--double-prev') {
         arr2.splice(dp - 1, 1);
      }

      if (arr[i] === '--discard-next') {
         arr2.splice(dn, 1);
      }
   }

   return arr2
}

// console.log(transform([1, 2, 3, '--double-prev', 4, 5]))
console.log(transform([1, 2, 3, '--discard-next', 4, 5])) // => [1, 2, 4, 5]
