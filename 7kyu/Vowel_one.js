function vowelOne(s) {
   let vowels = 'aeiou';

   arr = Array.from(s.toLowerCase())

   for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < vowels.length; j++) {

         if (arr[i] === vowels[j]) {
            arr[i] = 1
         }
      }

      if (arr[i] !== 1) {
         arr[i] = 0
      }

   }

   return arr.join('')
}

console.log(vowelOne("vowelOne")) // => "01010101"
console.log(vowelOne("iua1oeQU0ak/e3 %eUjDov|IIU#j{y")) // => '111011010100100011001001110001'



// function vowelOne(s){
//    s = (s.replace(/[^aeiou]/gi,'0')).replace(/[aeiou]/gi,'1');
//    return s;
//  }




// function vowelOne(s){
//    s = s.toLowerCase()
//    const arr = ['a', 'e', 'i', 'o', 'u']
//    let result = ''
//    for (el of s) {
//      arr.includes(el) ? result += '1' : result += '0'
//    }
//    return result
//  }