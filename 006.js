var fullname = "Tanish Singhal";

var obj = {
  fullname: "Hacked full name",

  prop: {
    fullname: "Inside Prop",
    getFullname: function() {
      return this.fullname;
    },
  },

  getFullname: function() {
    return this.fullname;
  },

  getFullnameV2: () => this.fullname,     // "this" will reffer to window object in browser

  // iife
  getFullnameV3: (function() {
    return this.fullname;
  })(),
};

console.log(obj.prop.getFullname());
console.log(obj.getFullname());
console.log(obj.getFullnameV2());
console.log(obj.getFullnameV3());



// output: 
// Inside Prop
// Hacked full name
// undefined
// Error              => as iffe is executed immediately and the output is stored in getFullnameV3
//                       so getFullnameV3 is not a function, getFullnameV3 is a property of "obj" object



// Explanation:
// the output of the arrow function is undefined because,
// in arrow functions, this referred to "window object"

// it throws error in last function as,
// iffe is not a function, it is a property