function sentence(List) {

   let keys = List.map(e => {
      return +Object.keys(e)
   })

   keys.sort((a, b) => a - b)

   let newList = []

   for (let i = 0; i < keys.length; i++) {
      for (let j = 0; j < List.length; j++) {
         if (keys[i] === Number((Object.keys(List[j])))) {
            newList.push(List[j])
         }
      }
   }

   let str = []

   for (let i = 0; i < newList.length; i++) {
      str.push((Object.values(newList[i])))
   }
   return str.join(' ')



}

let List = [
   { '4': 'dog' }, { '2': 'took' }, { '3': 'his' },
   { '-2': 'Vatsan' }, { '5': 'for' }, { '6': 'a' }, { '12': 'spin' }
]


console.log(sentence(List))



   // function sentence(a) {
//    return a.sort((a,b)=>Object.keys(a)-Object.keys(b)).map(x=>x[+Object.keys(x)]).join` `
//  }
