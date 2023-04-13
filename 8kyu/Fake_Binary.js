function fakeBin(x) {
   let bin = "";
   for (let i = 0; i < x.length; i++) {
      if (x[i] < 5) {
         bin += 0;
      } else {
         bin += 1;
      }
   }
   return bin;
}