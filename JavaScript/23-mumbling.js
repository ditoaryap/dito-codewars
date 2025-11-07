// example 

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"



function accum(s) {
    return test = s.split('').map((a, b) => a.toUpperCase() + a.toLowerCase().repeat(b)).join('-')
}

console.log(accum("abcd"))

