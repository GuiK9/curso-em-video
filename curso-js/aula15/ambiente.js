//Códigos do professor
let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

let pos = num.indexOf(4)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`o valor está na posição ${pos}`)
}

//Testes que eu fiz durante a aula
/*let num = [5, 8, 9]
var b = 3
num.push(7)
num.push(1)
num[b] = 6
num.sort()
console.log(num)
console.log(`nosso vetor tem ${num.length}`)
console.log(`o primeiro valor é ${num[0]}`)
console.log(num[5])
var c = 123
var num = []
do {
    num.push(c)
    c--
} while (c > 0)
num.sort()
//console.log(num)

for (var i = 0 ; i < 126; i++){
    console.log(`hmmm: ${num[i]}`)
}
var t = 1
var num = [t]
while (t <= 126){
    num.push(t)
    console.log(num[t])
    t++
}*/