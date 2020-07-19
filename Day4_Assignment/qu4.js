console.log("Calculator");

function addition(num1,num2){

return num1 + num2;
}


function subtraction(num1,num2){

    return num1 - num2;
    }
function multiplication(num1,num2){
    
    return num1 * num2;
    }
function division(num1,num2){
    
    return num1 / num2;
    }
function squareroot(num1){
    let n = Math.sqrt(num1)
    return n;
    }
function percentage(num1){
    let n1 = num1 /100 * 100;
    return n1;
    }

add = addition(20,10);
console.log("Addtion is:",add);

sub = subtraction(20,10);
console.log("Subtraction is:",sub);

mul = multiplication(20,10);
console.log("Multiplication is:",mul);

div = division(20,10);
console.log("Division is:",div);

sq = squareroot(25);
console.log("SquareRoot is:",sq);

per = percentage(57);
console.log("Percentage is:",per);


