function nicknameGenerator(name) {
   const vowels = ['a', 'e', 'i', 'o', 'u'];
   name = Array.from(name);

   for (let i = 0; i < vowels.length; i++) {
      if (vowels[i] === name[2]) {
         return name.splice(0, 4).join('')
      }
   }

   return name.splice(0, 3).join('')

}

console.log(nicknameGenerator("Jiommy"))
console.log(nicknameGenerator("Kayne"))
