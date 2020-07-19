console.log("Question 8");
// function ask(question,yes,no){
//     if(confirm(question)) yes()
//     else no();
// }
// ask(
//     "do u agree?",
//     function(){alert("u agreed.");},
//     function(){alert("u canceld the execution.");}
// )

let ask=(question,yes,no)=>{
    if(confirm(question)) yes()
    else no();
}

ask(
    "do u agree?",
   function(){alert("u agreed.");},
    function(){alert("u canceld the execution.");}
);