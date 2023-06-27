function numberOfPairs(gloves) {
  let count = 0;
  const arr = [...gloves];
  for (let i = 0; i < arr.sort().length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      count++;
      i++;
    }
  }
  return count;
}

// function numberOfPairs(gloves) {
//   let count = 0;
//   let colors = new Set();
//   for (let glove of gloves) {
//     if (colors.has(glove)) {
//       colors.delete(glove);
//       count++;
//     } else {
//       colors.add(glove);
//     }
//   }
//   return count;
// }

console.log(numberOfPairs(["red", "red"])); // 1
console.log(numberOfPairs(["red", "red", "red", "red"])); // 2
console.log(numberOfPairs(["red", "green", "blue"])); // 0
console.log(
  numberOfPairs(["gray", "black", "purple", "purple", "gray", "black"])
); // 3
console.log(numberOfPairs(["gray", "black", "red", "purple", "gray", "black"])); // 2
