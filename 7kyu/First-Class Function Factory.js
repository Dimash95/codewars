const factory = (n) => (arr) => arr.map((e) => e * n);

// Second version of solution

// function factory(x) {
//   return function mult(myArray) {
//     let res = [];
//     for (let i = 0; i < myArray.length; i++) {
//       res.push(myArray[i] * x);
//     }
//     return res;
//   };
// }
