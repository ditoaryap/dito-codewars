function stackHeight2d(layers) {
    if (layers === 1) {
        return 1;  // Jika hanya ada satu lapisan, tinggi = 1 kali diameter
    }
    if(layers === 0) { return 0}
    
    const sqrt3Over2 = Math.sqrt(3) / 2;  // Nilai trigonometri yang relevan
    return 1 + (layers - 1) * sqrt3Over2;  // Rumus untuk tinggi total
}

// Contoh penggunaan:
console.log(stackHeight2d(2));
