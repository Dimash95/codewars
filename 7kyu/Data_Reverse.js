function dataReverse(data) {

   let str = data.join('')
   let newStr = ''
   let res = ''

   for (let i = 0; i < str.length; i++) {
      newStr += str[i]
      if (newStr.length % 8 === 0) {
         res = newStr + res
         newStr = '';
      }
   }

   return Array.from(res, Number)
}


// console.log(dataReverse([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16]))

// console.log(dataReverse([0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1]))
// => [0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0]

console.log(dataReverse([1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0]))
// => [1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]




// Coment: 2 вариант как я мог решить

// const dataReverse = data => {
//    const bytes = [];
//    for (let i = 0; i < data.length; i += 8) {
//      bytes.unshift(...data.slice(i, i + 8));
//    }
//    return bytes;
//  };