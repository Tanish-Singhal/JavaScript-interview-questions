const tanish = {
  name: "Tanish Singhal",
  sayName: function() {
    console.log(this.name);
  },
};

setTimeout(() => {
  tanish.sayName
}, 3*1000);