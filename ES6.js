"use strict";

const options = {
  name: "test",
  width: 1024,
  heigth: 1024,
  colors: {
    border: "black",
    bg: "red",
  },
  makeTest: function() {
     console.log(Object.keys(options.colors).length);
  }
};

options.makeTest();

const {border, bg} = options.colors;
console.log(border);
// console.log(options.name);

// delete options.name;
// console.log(options.name);
// let counter = 0;
// for (let key in options) {
//   if (typeof options[key] === "object") {
//     for (let i in options[key]) {
//       console.log(`properties ${i} value ${options[key][i]}`);
//       counter++;
//     }
//   } else {
//     console.log(`properties ${key} value ${options[key]}`);
//     counter++;
//   }
// }
// console.log(counter);
