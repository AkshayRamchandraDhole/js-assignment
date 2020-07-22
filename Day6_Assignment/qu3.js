const ti = document.getElementById('til');
const name = prompt("Enter Your Name:","ANK");


ti.innerText += `Welcome ${name}`;

const dmode = document.getElementById('dark');
dmode.onclick=function changeColor(){
    document.body.style.backgroundColor='black';
    document.body.style.Color='white';
    document.body.style.fontFamily='Helvetica';



}
const ctime = document.getElementById('clock');

function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;


}

// clock();

setInterval(clock,1000);