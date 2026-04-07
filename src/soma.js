function soma(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return false
    }
    return a + b
}

console.log(typeof 5)
module.exports = soma