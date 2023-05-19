const explode = (s) => {
  arr = s.split("");
  let str = "";

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i]; j++) {
      str += arr[i];
    }
  }

  return str;
};

console.log(explode("123"));
