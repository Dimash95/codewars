function capitalizeWord(word) {
   const firstLetter = word[0].toUpperCase();
   word = word.slice(1);
   word = firstLetter + word;
   return word;
 }