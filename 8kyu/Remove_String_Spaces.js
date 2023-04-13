function noSpace(x){
   let str = '';
   
   for(let i=0; i<x.length; i++){
     if(x[i] !== ' '){
       str += x[i];
     }
   }
   return str;
 }