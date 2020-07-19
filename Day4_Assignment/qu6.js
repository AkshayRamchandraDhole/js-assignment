console.log("Question 6");
num = Number(prompt("Enter Number:"));
for (let i = 0 ;i < num ; i++){
if(num > 100){
    n = Number(prompt("Again Enter Number:"));
    if(n < 100 || n==' '){
        break;
    }
}else{
    break;
}
}