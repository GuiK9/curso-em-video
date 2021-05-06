function fatorial(n) {
    fat = 1
    for (var c = n; c > 1; c-- ) {
        fat *= n
    }
    return fat
}
console.log(fatorial(15))