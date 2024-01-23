// function grow(x) {
//     let hasil = x[0];
//     for (let i = 1; i < x.length; i++) {
//         hasil *= x[i];
//     }
//     return hasil;
// }

// console.log(grow([1, 2, 3]))

// let x = [1, 2, 3, 4];

// function grow(x) {
//     let hasil = x[0]
//     for (let i = 1; i < x.length; i++) {
//         hasil *= x[i];
//     }
//     return hasil
// }

// console.log(grow(x))

const grow = (x) => result = x.reduce((a, b) => a * b)

// function grow(x) {
//     return result = x.reduce((a, b) => a * b)
// }

console.log(grow([1, 2, 3, 4]))