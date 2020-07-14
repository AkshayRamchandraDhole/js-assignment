// log()  : printing something on console is like print() in python

console.log("Using log() method");

// error()  : if we want to print error msg the use error

//console.error("using error() method");

// warn() : show the warning 

//console.warn("Using warn() method");

// table()  : if we have multiple key-value to print the this method is use

var var0={name: "Sai", age:27 }
var var1={name: "Kiran", age:28 }
var var2={name: "Prasad", age:24 }

console.table({var0,var1,var2});

// time() and timeEnd(): it used check how many time is required to complete the task
console.time()

var x=10;
var y=20;
console.log({x,y})

console.timeEnd()

