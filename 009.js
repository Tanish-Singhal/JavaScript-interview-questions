const obj = Object.create({
  height: 30,
});

console.log(obj.height);

delete obj.height;

console.log(obj.height);



// output:
// 30
// 30


// explaination:
// when we do Object.create, then the height was defined inside the prototype (object was empty), that's why when we try to delete obj.height it does not delete anything