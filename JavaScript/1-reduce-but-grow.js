// Code Wars - Reduce But Grow
// https://www.codewars.com/kata/57f780909f7e8e3183000078/javascript

// Answer 1
// function grow(x) {
//     let hasil = x[0];
//     for (let i = 1; i < x.length; i++) {
//         hasil *= x[i];
//     }
//     return hasil;
// }

// console.log(grow([1, 2, 3, 4]))


// Answer 2
// let x = [1, 2, 3, 4];

// function grow(x) {
//     let hasil = x[0]
//     for (let i = 1; i < x.length; i++) {
//         hasil *= x[i];
//     }
//     return hasil
// }

// console.log(grow(x))


// Answer 3
const grow = (x) => result = x.reduce((a, b) => a * b)

console.log(grow([1, 2, 3, 4]))