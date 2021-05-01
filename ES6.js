"use strict";

const options = {
    name: "test",
    width: 1024,
    heigth: 1024,
    colors: {
        border: "black",
        bg: "red"
    }
};
console.log(options.name);

delete options.name;
console.log(options.name);