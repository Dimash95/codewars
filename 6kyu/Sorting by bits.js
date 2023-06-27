// function sortByBit(arr) {
//   const arrBit = [];
//   const arrRes = [];

//   arr.forEach((e) => {
//     arrBit.push(e.toString(2));
//   });

//   arrBit.sort();

//   console.log(arrBit);

//   arrBit.forEach((e) => {
//     arrRes.push(parseInt(e, 2));
//   });

//   return arrRes;
// }

const sortByBit = (arr) =>
  arr.sort(
    (a, b) =>
      a.toString(2).replace(/0/g, ``) - b.toString(2).replace(/0/g, ``) || a - b
  );

console.log(sortByBit([3, 8, 3, 6, 5, 7, 9, 1])); // [1, 8, 3, 3, 5, 6, 9, 7]
