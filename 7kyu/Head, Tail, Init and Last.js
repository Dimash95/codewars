const head = (arr) => {
  return arr[0];
};
const tail = (arr) => {
  return arr.slice(1);
};
const init = (arr) => {
  return arr.slice(0, arr.length - 1);
};
const last = (arr) => {
  return arr[arr.length - 1];
};

console.log(head([1, 2, 3, 4, 5]));
console.log(tail([1, 2, 3, 4, 5]));
console.log(init([1, 2, 3, 4, 5]));
console.log(last([1, 2, 3, 4, 5]));
