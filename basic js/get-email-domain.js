function getEmailDomain(email) {


   let arr = Array.from(email)
   arr = arr.reverse()
   console.log(arr)
   let index = arr.indexOf('@')
   arr = arr.reverse()
   let domain = arr.slice(-index).join('')
   return domain
}

console.log(getEmailDomain('prettyandsimple@example.com'))

console.log(getEmailDomain('very.unusual.@.unusual.com@usual.com'))