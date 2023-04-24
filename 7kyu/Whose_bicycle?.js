function whoseBicycle(diary1, diary2, diary3) {
   let a = Object.values(diary1)
   let b = Object.values(diary2)
   let c = Object.values(diary3)

   a = a.reduce((x, y) => x + y, 0)
   b = b.reduce((x, y) => x + y, 0)
   c = c.reduce((x, y) => x + y, 0)

   const ageTable = {
      firstSonAge: 14,
      secondSonAge: 9,
      thirdSonAge: 8
   }

   res = Math.max(a, b, c)

   console.log(res)
   console.log(a)
   console.log(b)
   console.log(c)

   if (res === a && a === b && b === c) {
      if (ageTable.firstSonAge > ageTable.secondSonAge && ageTable.secondSonAge > ageTable.thirdSonAge) {
         return 'I need to buy a bicycle for my third son.'
      } else if (ageTable.firstSonAge < ageTable.secondSonAge && ageTable.secondSonAge < ageTable.thirdSonAge) {
         return 'I need to buy a bicycle for my first son.'
      } else if (ageTable.firstSonAge > ageTable.secondSonAge && ageTable.secondSonAge < ageTable.thirdSonAge) {
         return 'I need to buy a bicycle for my second son.'
      }
   }


   if ((res === a || res === b) && a === b) {
      if (ageTable.firstSonAge > ageTable.secondSonAge) {
         return 'I need to buy a bicycle for my second son.'
      } else if (ageTable.firstSonAge < ageTable.secondSonAge) {
         return 'I need to buy a bicycle for my first son.'
      }
   }

   if ((res === a || res === c) && a === c) {
      if (ageTable.firstSonAge > ageTable.thirdSonAge) {
         return 'I need to buy a bicycle for my third son.'
      } else if (ageTable.firstSonAge < ageTable.thirdSonAge) {
         return 'I need to buy a bicycle for my first son.'
      }
   }

   if ((res === b || res === c) && b === c) {
      if (ageTable.secondSonAge > ageTable.thirdSonAge) {
         return 'I need to buy a bicycle for my third son.'
      } else if (ageTable.secondSonAge < ageTable.thirdSonAge) {
         return 'I need to buy a bicycle for my second son.'
      }
   }

   if (res === a) {
      return 'I need to buy a bicycle for my first son.'
   } else if (res === b) {
      return 'I need to buy a bicycle for my second son.'
   } else if (res === c) {
      return 'I need to buy a bicycle for my third son.'
   }
}

// console.log(whoseBicycle(
//    {
//       'algebra': 6,
//       'history': 7,
//       'physics': 8,
//       'geography': 9,
//       'chemistry': 10
//    },
//    {
//       'algebra': 8,
//       'history': 7,
//       'physics': 8,
//       'geography': 9,
//       'chemistry': 10
//    },
//    {
//       'algebra': 6,
//       'history': 5,
//       'physics': 5,
//       'geography': 9,
//       'chemistry': 10
//    }))

console.log(whoseBicycle(
   {
      'algebra': 6,
      'history': 7,
      'physics': 8,
      'geography': 9,
      'chemistry': 10
   },
   {
      'algebra': 6,
      'history': 7,
      'physics': 8,
      'geography': 9,
      'chemistry': 10
   },
   {
      'algebra': 6,
      'history': 7,
      'physics': 8,
      'geography': 9,
      'chemistry': 10
   }
))




// function whoseBicycle(diary1, diary2, diary3) {
//    const total1 = Object.values(diary1).reduce((total, currentValue) => total + currentValue);
//    const total2 = Object.values(diary2).reduce((total, currentValue) => total + currentValue);
//    const total3 = Object.values(diary3).reduce((total, currentValue) => total + currentValue);
 
//    if (total1 > total2 && total1 > total3) {
//      return 'I need to buy a bicycle for my first son.';
//    } else if (total2 >= total1 && total2 > total3) {
//      return 'I need to buy a bicycle for my second son.';
//    } else if (total3 >= total1 && total3 >= total2) {
//      return 'I need to buy a bicycle for my third son.';
//    }
//  }