let num = Number(prompt("Enter Numeber:"));

arrNum = [];
for (let i=1;i<=10;i++){
    arrNum.push(i*num);
}
const list = document.querySelector('#list');
console.log(arrNum);

arrNum.forEach(fr=>{

    // list.innerText += `<li>${fr}</li>`;
    list.innerHTML += `<li>${fr}</li>`;

});
