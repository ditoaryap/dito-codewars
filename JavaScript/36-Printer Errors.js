function printerError(s) {
    let result = 0
    for (let a of s) {
        if (a >= 'n' && a <= 'z') {
            result++
        }
    }
    return `${result}/${s.length}`;
}


console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"))