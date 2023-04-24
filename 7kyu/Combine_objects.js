const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
let objC = {}
let objD = {}
// let objC = { ...objA, ...objB }
// let objC = Object.assign(objA, objB)
// console.log(Object.keys(objA)[0])


function combine(objA, objB) {

   for (let keyA in objA) {
      for (let keyB in objB) {
         if (keyA === keyB) {
            objC[keyA] = objA[keyA] + objB[keyB]
            objB[keyB] = ''
            objA[keyA] = ''
         }

      }
   }
   return objD = { ...objA, ...objB, ...objC }
}

console.log(combine(objA, objB))




function combine() {
   let result = {};
   for (let obj of arguments) {
       for (let property in obj) {
           if (property in result) {
               result[property] += obj[property];
           } else {
               result[property] = obj[property];
           }
       }
   }
   return result;
}
