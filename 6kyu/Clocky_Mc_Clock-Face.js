const whatTimeIsIt = (angle) => {
  let hour = Math.floor(angle / 30)
  if (hour === 0) hour = 12
  let min = Math.floor(angle % 30 * 2)
  return `${('0' + String(hour)).slice(-2)}:${('0' + String(min)).slice(-2)}`;
}

console.log(whatTimeIsIt(0)); // "12:00"
console.log(whatTimeIsIt(95)); // "03:00"
console.log(whatTimeIsIt(180)); //  "06:00"
console.log(whatTimeIsIt(270)); // "09:00"
console.log(whatTimeIsIt(360)); // "12:00"   