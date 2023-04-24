function sortMyString(s) {
   let s1 = '',
      s2 = '';

   for (let i = 0; i < s.length; i++) {

      if (i % 2 === 0) {
         s1 += s[i]
      } else (s2 += s[i])
   }

   s = s1 + ' ' + s2
   return s
}

console.log(sortMyString("CodeWars")) // => "CdWr oeas"