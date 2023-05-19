const isPrime = (num) => {
  if (num < 2) return false;
  const limit = Math.sqrt(num);
  for (let i = 2; i <= limit; ++i) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(0)); // false
console.log(isPrime(1)); // false
console.log(isPrime(-1)); // false
console.log(isPrime(75)); // false
console.log(isPrime(73)); // true