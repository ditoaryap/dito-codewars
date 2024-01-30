// Code Wars - Array.diff (6 Kyu)
// https://www.codewars.com/kata/523f5d21c841566fde000009

function arrayDiff(a, b) {
    return a.filter(a => !b.includes(a));
}

console.log(arrayDiff([1, 2, 3], [1, 2]))