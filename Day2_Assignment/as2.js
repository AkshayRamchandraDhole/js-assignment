console.log("String and Array Mehthod");

// String Method :

// subString() : print the string given in the parameter 

// it takes two parameter first staring index from to print and second one is ending index
// it does not take negative parmeter like splice

let str = "I Am Learning Javascript from Letsupgrade";
console.log(str.substring(5,13)); // print learning

// slice(start , end):
/*
    1) it extract part of string and return a new string
    2) it takes 2 parameter star and end (end - 1)
    3) if parameter is negative then it counted from end of string
    4) if we give 1 parameter then it print from that parameter to end of string

*/ 

console.log(str.slice(5));
console.log(str.slice(1,10));
console.log(str.slice(-5,-1));


// replace (search , replaceValue) :  replaces a specified value with another value in a string.
// 1)it does not change the string it is called on. It returns a new strin


s1 = str.replace("Learning","Learn");
console.log(s1);

// substr() : 
/*
    1) it takes 2 parameter  
    2) the second parameter specifies the length of the extracted part.
    3) If miss the second parameter, substr() will slice out the rest of the string.
    4) If the first parameter is negative, the position counts from the end of the string.


*/
console.log(str.substr(0));
console.log(str.substr(0,6));
console.log(str.substr(-10));



// Array Method 


arr1 = ["I","Am","Learning","javascript"];
console.log(arr1);

// sort () : sort the array according to element present in the array

a=arr1.sort()
console.log(a)

//splice() : The splice() method adds/removes items to/from an array, and returns the removed item(s


 b = arr1.splice(2,2,"I","Am");
 console.log(b);



