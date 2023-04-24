function getDecimal(n) {

   n = n * 10
   n = n % 10
   n = n / 10

   return Math.abs(n)
}

console.log(getDecimal(2.4))
console.log(getDecimal(-0.2))
