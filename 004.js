variable = 10;

(() => {
  foo = 100;
  console.log(variable);
  var foo = 100;
  variable = 20;
  console.log(variable);
})();

console.log(foo);
console.log(variable);
var variable = 30;



// output:
// Error



// in this code, when the javascript first scan the file, then only variable was initialized only because the variable inside the function was not initialized (in memory phase).
// this throw error because, the foo is declared in the local scope