function createDreamTeam(members) {
   if (!Array.isArray(members)) {
      return false
   }

   let res = [];

   for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === 'string') {
         let current = members[i].trim().toUpperCase()
         res.push(current[0])
      }
   }

   res = res.sort().join('')
   return res
}

console.log(createDreamTeam(['  Matt', '  Ann', 'Dmitry', 'Max'])) //  => 'ADMM'
console.log(createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null])) // => 'LOO'