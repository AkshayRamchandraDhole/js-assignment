console.log("Question 5");

sale = Number(prompt("Enter your Sales from(0-30000):"));

if(sale > 0 && sale < 5000){
    console.log("Sales from 0-5000: 2%");
}else if(sale > 5001 && sale < 10000){
    console.log("Sales from 5001-10000: 5%");
}else if(sale > 10001 && sale < 20000){
    console.log("Sales from 10000-20000: 7%");
}else{
    console.log("Sales Above 20000: 10%");
}

