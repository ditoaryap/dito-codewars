// Code Wars - Lost Without a Map
// https://www.codewars.com/kata/57f781872e3d8ca2a000007e


// Given an array of integers, return a new array with each value doubled.
// For example:
// [1, 2, 3] --> [2, 4, 6]


// Answer 1
// function maps(x) {
//     return x.map(x => x + x);
// }

// console.log(maps([1, 2, 3]));

// Answer 2
function maps(x) {
    let k = []
    for (let i = 0; i < x.length; i++) {
        k.push(x[i] + x[i])
    }
    return k
}
console.log(maps([1, 2, 3]))