function solution(str, ending) {
  
   const newStr = str.slice(-ending.length)
   
   if(ending==''){
     return true
   }
  
  if(newStr === ending){
    return true
  }else{
    return false
  } 
}

