// Code Wars - Even or Odd (8 Kyu)
// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe

// function evenOrOdd(number) {
//     if (number % 2 === 0) {
//         return "Even"
//     } else if (number % 2 === 1 || number % 2 === -1) {
//         return "Odd"
//     }
// }

function evenOrOdd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
}

console.log(evenOrOdd(2));