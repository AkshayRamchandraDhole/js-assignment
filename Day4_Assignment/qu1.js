console.log("Question 1");
 for(let i=1;i<=100;i++){
     if( i % 3 == 0 && i % 5 ==0){
         console.log("FizzBuzz",i,"Multiple of 3 And 5");
     }else if(i % 3 == 0){
        console.log("Fizz",i,"Multiple of 3");

     }else if(i % 5 ==0){
        console.log("Buzz",i,"Multiple of 5");
     }
 }