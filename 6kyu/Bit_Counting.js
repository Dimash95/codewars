const countBits = (n) => {
  const arrBit = Array.from(n.toString(2));
  let count = 0;

  arrBit.forEach(e => {
    if (e == 1) count++;
  });
  return count;
};

countBits(0);
countBits(4);
countBits(7);