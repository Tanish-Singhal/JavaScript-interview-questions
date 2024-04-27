for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 0);
// }



// output: 
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10



// when we use var, setTimeout will run 10 times and they will also stack in a place, then i will become as the loop will run fior 10 times. 
// now all the settimeout will run (console.log) at the same time with the value i=10.
