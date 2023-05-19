function isIsogram(str) {

  str = str.toLowerCase();
  let arr = Array.from(str);
  const newSet = new Set(arr);
  arr = Array.from(newSet);
  const newStr = arr.join("");

  return str.length === newStr.length
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("moOse"));
