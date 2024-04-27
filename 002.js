myFun();

var myFun = function() {
  console.log("First");
}

myFun();

function myFun() {
  console.log("Second");
}

myFun();



// output: 
// second
// first
// first



// in javascript, hoisting is not not applied to varibales, it was also applied to functions also

// execution context
//      Memory phase          Code phase
//    myFun: undefined
//    myFun: ("second")         second
//    myFun: ("first")          first
//                              first         