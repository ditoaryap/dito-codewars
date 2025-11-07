// Code Wars - Descending Order
// https://www.codewars.com/kata/5467e4d82edf8bbf40000155

function descendingOrder(n) {
    a = n.toString().split('').sort().reverse()
    return parseInt(a.join(''))
}

console.log(descendingOrder(1021))