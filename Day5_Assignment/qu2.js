console.log("Question 2");
class User{
    constructor(name,age,email){
        this.name=name;
        this.age=age;
        this.email=email;
        this.courses = [];
        this.addCoin = [];
        

    }

    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }

    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
    addCoins(){
        this.lucoins++;
        console.log(`${this.name} has ${this.lucoins} coins`);
        return this;
    }
    
}
class Moderator extends User {


    addCoins(user,addCoin){
        

        user.addCoin.push(addCoin);
        console.log(user);
    }

    removeCoins(user,removeCoin){
        

        user.addCoin.pop(this.removeCoin);
        console.log(user);
    }
       
    }

class Admin extends Moderator{
    addCourse(user,course){
        user.courses.push(course);
        console.log(user);

    }

    deleteCourse(user,course){
        user.courses.pop(course);
        console.log(user);   
    }

}


let user1 = new User('ABC',23,"abc@gmail");
user1.login();

let m1 = new Moderator('XYZ',22,'xyz@gmail.com');

let ad1 = new Admin('PQR',35,'pqr@gmail.com');

let users = [user1,m1];
m1.addCoins(user1,100);
m1.addCoins(user1,10);
m1.removeCoins(user1,10);
 ad1.addCourse(user1,'Javascript');
ad1.addCourse(user1,'Python');
ad1.deleteCourse(user1,'Python');

