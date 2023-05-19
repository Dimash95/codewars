const duplicateEncode = (word) => {
  let arr = Array.from(word.toLowerCase());
  let res = "";

  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    arr.splice(i, 1);

    if (arr.includes(char)) {
      res += ")";
    } else {
      res += "(";
    }

    arr.splice(i, 0, char);
  }

  return res;
};

console.log(duplicateEncode("recede"));
