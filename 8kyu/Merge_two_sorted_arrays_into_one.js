function mergeArrays(arr1, arr2) {

   let concatArr = [...arr1, ...arr2];
   let uniqCollection = new Set(concatArr);
   let uniqArr = Array.from(uniqCollection);
   let uniqArrSorted = uniqArr.sort((a, b) => a - b);

   return uniqArrSorted;
}


console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]))