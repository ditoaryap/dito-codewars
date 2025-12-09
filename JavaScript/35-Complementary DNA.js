function dnaStrand(dna) {
    return dna
        .split('')
        .map(n => {
            if (n === "A") return "T";
            if (n === "T") return "A";
            if (n === "G") return "C";
            if (n === "C") return "G";
        })
        .join('')
}

console.log(dnaStrand("ATTGC"))