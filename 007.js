const tanish = {
  name: "Tanish Singhal",
  sayName: function() {
    console.log(this.name);
  },
};

const jhon = {
  name: "John Doe",
  sayName: function() {
    console.log(this.name);
  },
};

jhon.sayName();
jhon.sayName.call(tanish);



// output: 
// John Doe
// Tanish Singhal