"use strict";

const arr = [0, 1, 22, 53, 14, 55, 36, 7, 8, 9];
// arr[99] = 0;
//arr.pop();
//arr.push();
arr.sort(compareNum );
console.log(arr);

function compareNum(a, b) {
    return a - b;
}
// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} inside array ${arr}`);
// });

// let j = arr.length;
// for(let i = 0; i < j; i++) {
//     console.log(arr[i]);
// } WE CAN USE BREAK AND CONINUE HERE

// for (let value of arr) {
//     console.log(value);
// }
// const str = prompt('WAT?','');
// const products = str.split(', ');
// products.sort();
// console.log(products.join('; '));
