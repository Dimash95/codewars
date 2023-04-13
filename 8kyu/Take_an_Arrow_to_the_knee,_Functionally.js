const ArrowFunc = (arr) => {

   // return arr.map( x => String.fromCharCode(x) ).join(''); 


   const ArrowFunc = (arr) => {

      let str = ''
      arr.map(e => {
         str += String.fromCharCode(e)
      })
      return str
   }

}



console.log(ArrowFunc([84, 101, 115, 116]))