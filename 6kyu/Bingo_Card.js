function getCard() {
  let arr = [];
  const bArr = [];
  const iArr = [];
  const nArr = [];
  const gArr = [];
  const oArr = [];

  for (let i = 0; i < 5; i++) {
    let random = ('B' + (Math.floor(Math.random() * (15 - 1)) + 1));
    bArr.includes(random) ? i-- : bArr.push(random);
  };
  for (let i = 0; i < 5; i++) {
    let random = ('I' + (Math.floor(Math.random() * (30 - 16)) + 16));
    iArr.includes(random) ? i-- : iArr.push(random);
  };
  for (let i = 0; i < 4; i++) {
    let random = ('N' + (Math.floor(Math.random() * (45 - 31)) + 31));
    nArr.includes(random) ? i-- : nArr.push(random);
  };
  for (let i = 0; i < 5; i++) {
    let random = ('G' + (Math.floor(Math.random() * (60 - 46)) + 46));
    gArr.includes(random) ? i-- : gArr.push(random);
  };
  for (let i = 0; i < 5; i++) {
    let random = ('O' + (Math.floor(Math.random() * (75 - 61)) + 61));
    oArr.includes(random) ? i-- : oArr.push(random);
  };

  arr = [...bArr, ...iArr, ...nArr, ...gArr, ...oArr];
  console.log(arr);
}

getCard();