console.log("value of age is ", age);

var age = 20;

// let age = 20;    => in this case it is Temporal Dead Zone was formed above it, that's why the first console.log throws error

console.log("value of age is ", age);



// output:
// value of age is  undefined
// value of age is  20



// Explaination
// this is beacuse of hoisting. in hoisting, all the declaration was at the starting of the file

// technically, when he js file execute, first the node scan the whole file and defined all the variables in the "memory phase"
// here it is (var age = undefined)