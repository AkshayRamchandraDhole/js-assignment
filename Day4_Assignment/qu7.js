console.log("Question 7");

num = Number(prompt("Enter Number:"));
for (let i=2;i<num;i++){
    let c = 0;
    let z = i;
    for (let j = 1 ;j <= z ; j++){
        if(z % j == 0){
            c = c + 1;

        }
    }
    if(c==2){
        console.log(z);
    }
}