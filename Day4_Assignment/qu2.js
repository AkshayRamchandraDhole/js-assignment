console.log("Question 2");

const Student = {
    name : "Helsinki",
    age : 25 ,
    projects :{
        diceGame : "Two Player dice game using Javascript"
    }
}
 const {name,age,projects:{diceGame}}=Student;
 console.log(name,age,diceGame);