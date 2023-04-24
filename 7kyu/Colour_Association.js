function colourAssociation(array) {
   let arr = [] //если убрать скобуи, то сломается?
   for (let i = 0; i < array.length; i++) {
      arr.push({ [array[i][0]]: array[i][1] })
   }
   return arr
}


console.log(colourAssociation([["white", "goodness"], ["blue", "tranquility"]]))

// [{white:"goodness"},  00: 01
// {blue:"tranquility"}] 10: 11