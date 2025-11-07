// Code Wars - Square Every Digit
// https://www.codewars.com/kata/546e2562b03326a88e000020

// Answer 1
// function squareDigits(num) {
//     a = []
//     c = num.toString().split('')
//     for (let i = 0; i < c.length; i++) {
//         a.push(Math.pow(c[i], 2))
//     }
//     b = parseInt(a.join(''))
//     return b
// }

// Answer 2
function squareDigits(num) {
    return +num.toString().split('').map(num => num * num).join('')
}

console.log(squareDigits(2112));