// var : it is used to before declare a variable 
// let : it is used when local and gobal variable concept is come.
// const : when we declare a var or object const the it can not be change

//var

var a = 10; //number

var name = "Prasad Sir"; //string

var canfly=false; //boolean

var x; //undefined

console.log({a,name,canfly,x})


//let 

{

   // console.log(name); // if we use this then it print Prasad Sir

    let name = "Sai Sir";  // Local Variables
    console.log(name); // it print Sai Sir

}

console.log(name);// print "Prasad Sir"  (Gobal Variable)

// const 

const mylist=["MyLaptop","Mobile"]
console.log(mylist); // print "MyLaptop","Mobile"

mylist.push("NoteBook");
console.log(mylist); // print "MyLaptop","Mobile","NoteBook"

//mylist=["Headphone"]; // show an error because i declare mylist as const so we can't overide list but we can add
