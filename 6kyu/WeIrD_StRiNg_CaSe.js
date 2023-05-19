function toWeirdCase(string) {
  let newStr = "";
  let arr = [];
  arr = string.split(" ");

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++)
      if (j % 2 === 0) {
        newStr += arr[i][j].toUpperCase();
      } else {
        newStr += arr[i][j].toLowerCase();
      }
    newStr += " ";
  }

  return newStr.slice(0, newStr.length - 1);
}

console.log(toWeirdCase("This is a test")); // ThIs Is A TeSt

// Почему нельзя присвоить? arr[0][0] = 'q';
