console.log("hello");

const button = document.querySelector('#btn');
const dbutton = document.querySelector('#btn1');
console.log(dbutton);
const list = document.querySelector('#list');




 button.onclick = function(){

    let item = document.querySelector("#todo").value;

    let text = document.createTextNode(item);

    let listitem = document.createElement('li');

    listitem.appendChild(text);

    list.appendChild(listitem);

    document.forms.myForm.reset();

    dbutton.onclick=function(){
        
        listitem.removeChild(text);
        list.removeChild(listitem);
    
        
     }


 }


 