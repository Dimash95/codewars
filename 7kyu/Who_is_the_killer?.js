function killer(suspectInfo, dead) {

   let count = 0;

   let values = Object.values(suspectInfo)
   let keys = Object.keys(suspectInfo)

   for (let i = 0; i < values.length; i++) {
      for (let j = 0; j < dead.length; j++) {

         if (values[i].includes(dead[j])) {
            count++
         }

      }
      if (count === dead.length) {
         return keys[i]
      }
   }
}


console.log(killer({
   'James': ['Jacob', 'Bill', 'Lucas'],
   'Johnny': ['David', 'Kyle', 'Lucas'],
   'Peter': ['Lucy', 'Kyle']
},
   ['Lucas', 'Bill']))


// Coment: best practise

   // function killer(suspectInfo, dead) {
   //    return Object.keys(suspectInfo).find(x => dead.every(y => suspectInfo[x].includes(y)))
   //   }