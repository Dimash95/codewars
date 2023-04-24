const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const NATURAL_LOGARITM_OF_TWO = 0.693123981710992;
// const NATURAL_LOGARITM_OF_TWO = 0.69300133170871;
// const NATURAL_LOGARITM_OF_TWO = 0.693;

function dateSample(sampleActivity) {
   if (typeof sampleActivity !== 'string') {
      return false
   }

   sampleActivity = Number(sampleActivity);

   if (sampleActivity <= 0 || sampleActivity >= 15) {
      return false
   }

   if (isNaN(sampleActivity)) {
      return false
   }


   let res = Math.log(MODERN_ACTIVITY / sampleActivity) * HALF_LIFE_PERIOD / NATURAL_LOGARITM_OF_TWO;
   return Math.round(res)

   // let res = Math.log(15 / sampleActivity) * 5730 / 0.693131176679129
   return Math.round(res)
}

console.log(dateSample('3')) // => 13305
console.log(dateSample('one')) // => false
console.log(dateSample('3.142'))// => 12923