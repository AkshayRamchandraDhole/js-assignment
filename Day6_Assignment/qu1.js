console.log("Question 1");

const attr = document.getElementById('attribute');
function changeColor(){
    var t = (new Date()).getSeconds(),
    body = document.body,
    bstyle = body.style,
    hel = document.querySelector('.attribute');

    if(t < 5){
    document.body.style.backgroundColor = 'red';}
    else if(t < 10 ){
        document.body.style.backgroundColor = 'yellow';

    }
    else if(t < 15 ){
        document.body.style.backgroundColor = 'yellowgreen';

    }else if(t < 20 ){
        document.body.style.backgroundColor = 'green';

    }
}

setInterval(changeColor,500);
changeColor();
