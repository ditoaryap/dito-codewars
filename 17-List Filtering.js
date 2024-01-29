// Code Wars - List Filtering
// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd


// Answer 1
// function filter_list(l) {
//     a = []
//     for (i = 0; i < l.length; i++) {
//         if (typeof(l[i]) === 'number') {
//             a.push(l[i])
//         }
//     }
//     return a
// }

// Answer 2
function filter_list(l) {
    return l.filter(v => typeof v == "number")
}

console.log(filter_list([1, 2, "a", "b"]))