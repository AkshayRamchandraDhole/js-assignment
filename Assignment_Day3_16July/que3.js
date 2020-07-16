console.log("Question 3");

// using if elseif else

mark = Number(prompt("Enter Your Marks:"));

// if(mark < 40){
//     console.log("Marks are ",mark,"Grade is C");
// }
// else if(mark <= 40 && mark >= 70){
//     console.log("Marks are ",mark,"Grade is B");
// }
// else{
//     console.log("Marks are ",mark,"Grade is A");

// }


//using ternary
let a = mark > 50  ? "Your  Grade is A" : "Your Grade is B";
console.log(a);