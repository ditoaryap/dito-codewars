// Code Wars - Sum without highest and lowest number (8 Kyu)
// https://www.codewars.com/kata/576b93db1129fcf2200001e6

function sumArray(array) {
    if (array == null) {
        return 0
    } else if (array.length < 2) {
        return 0
    } else {
        let max = Math.max(...array)
        let min = Math.min(...array)
        let sum = array.reduce((a, b) => {
            return a + b
        })
        return sum - (max + min)
    }
}

console.log(sumArray([]))