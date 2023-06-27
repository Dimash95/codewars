// function calculate(...args) {
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// }

function calculate(...arg1) {
  return function (...arg2) {
    return arg1.concat(arg2).reduce(function (sum, item) {
      return sum + item;
    });
  };
}

console.log(calculate(1)(1));
