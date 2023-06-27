function deepCount(a) {
  let count = 0;
  for (key in a) {
    if (typeof a[key] !== "array") count++;
    if (Array.isArray(a[key])) count += deepCount(a[key]);
  }
  return count;
}

console.log(deepCount([1, 2, 3]));
console.log(deepCount(["x", "y", ["z"]]));
