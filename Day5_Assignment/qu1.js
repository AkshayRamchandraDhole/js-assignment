console.log("Question 1");
arrNumber=[];
for (let i =0;i<5;i++){
num = Number(prompt("Enter number:"));
arrNumber.push(num);
}
console.log(arrNumber);

// let oddNum = arrNumber.filter(el=>el%2!=0);
// console.log(oddNum);

// let cubeArr = oddNum.map(el=>el**3);
// console.log(cubeArr);

let cubeArr = arrNumber.filter(el=>el%2!=0).map(el=>el**3)
console.log(cubeArr)
