function add(num1, num2) {

   num1 = num1.toString().split('').reverse()
   num2 = num2.toString().split('').reverse()

   let res = [];
   let length;

   if (num1.length >= num2.length) {
      length = num1.length
   } else {
      length = num2.length
   }

   for (let i = 0; i < length; i++) {
      if (num1[i] === undefined) num1[i] = 0;
      if (num2[i] === undefined) num2[i] = 0;

      res[i] = Number(num1[i]) + Number(num2[i]);
   }

   return Number(res.reverse().join(''))
}


console.log(add(1236, 30977)) // => 31111013