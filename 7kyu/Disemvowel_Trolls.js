function disemvowel(str) {
  const vowels = "aeiouAEIOU";
  let newStr = "";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] !== vowels[j]) {
        count++;
      }
    }
    if (count === 10) {
      newStr += str[i];
    }
    count = 0;
  }

  return newStr;
}

console.log(disemvowel("What are you, a communist?"));
