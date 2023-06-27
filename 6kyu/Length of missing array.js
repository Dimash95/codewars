function getLengthOfMissingArray(arrayOfArrays) {
  let newArr = [];

  if (arrayOfArrays === null) return 0;
  if (arrayOfArrays.includes(null)) {
    return 0;
  }

  arrayOfArrays.forEach((e) => {
    newArr.push(e.length);
  });

  if (arrayOfArrays.length === 0) return 0;

  for (let i = 0; i < arrayOfArrays.length; i++) {
    if (arrayOfArrays[i].length === 0) return 0;
  }

  newArr.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] + 1 !== newArr[i + 1]) return newArr[i] + 1;
  }
}

console.log(getLengthOfMissingArray([]));
console.log(getLengthOfMissingArray(null));
console.log(getLengthOfMissingArray([[1], []]));
console.log(getLengthOfMissingArray([[1], null]));
console.log(getLengthOfMissingArray([[null], [null, null, null]])); // 2
console.log(
  getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])
); // 3
console.log(
  getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])
); // 2
console.log(
  getLengthOfMissingArray([
    [0, 2, 2, 2, 3],
    [1, 0, 4],
    [0, 2],
  ])
);
