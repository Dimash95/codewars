function spread(func, args) {
   let [x, y, z] = args

   return func(x, y, z)

}

console.log(spread(function (x, y) { return x + y }, [1, 2]))


// function spread(func, args) {
//    return func(...args);
//  }