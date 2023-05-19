function nthFibo(n) {
  let f0 = 0;
  let f1 = 1;
  let arr = [0, 1];

  while (arr.length < 100) {
    let sum = f0 + f1;
    arr.push(sum);
    f0 = f1;
    f1 = sum;
  }

  return arr[n - 1];
}

console.log(nthFibo(4));
