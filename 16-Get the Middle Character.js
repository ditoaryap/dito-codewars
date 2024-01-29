// Code Wars - Get the Middle Character
// https://www.codewars.com/kata/56747fd5cb988479af000028

function getMiddle(s) {
    a = s.length
    if (s.length % 2 === 0) {
        return s.slice(a / 2 - 1, a / 2 + 1)
    } else {
        return s.slice(a / 2, a / 2 + 1)
    }
}
console.log(getMiddle('testing'))