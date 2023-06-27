function isSantaClausable(obj) {
  if (
    typeof obj.sayHoHoHo === "function" &&
    typeof obj.distributeGifts === "function" &&
    typeof obj.goDownTheChimney === "function"
  ) {
    return true;
  } else {
    return false;
  }
}

var santa = {
  sayHoHoHo: function () {
    console.log("Ho Ho Ho!");
  },
  distributeGifts: function () {
    console.log("Gifts for all!");
  },
  goDownTheChimney: function () {
    console.log("*whoosh*");
  },
};

var notSanta = {
  sayHoHoHo: function () {
    console.log("Oink Oink!");
  },
};

console.log(isSantaClausable(santa)); // true
console.log(isSantaClausable(notSanta)); // false
