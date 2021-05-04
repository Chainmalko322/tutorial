'use strict';

let str = "some";
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1,2,3]);

const soldier = { 
    health: 400,
    ammo: 999,
    damage: 11,
    armor: 111,
    sayHello: function() {
        console.log("hello");
    }
};

const john = Object.create(soldier);


// const john = {
//     health: 100,

// };

// john.__proto__ = soldier;

// Object.setPrototypeOf(john, soldier);

// console.log(john.armor);
john.sayHello();