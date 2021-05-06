//Copiei do professor
let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
console.log(valores)
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
//Fiz durante a aula 
/*var num = [2, 4, 5, 6, 7, 4, 3, 5, 3, 7, 9]

for (poss = 0; poss < num.length; poss++){
    console.log(`O número da posição ${poss} é o ${num[poss]}`)
}

for (let poss in num){
    console.log(num[poss])
}
 -------- Teste de array dentro de array--------
var t = [1, 23, 41]
var b = [123, 15, 12 , 34, t]
var m = [8, 9, 8, 12, 12, b]
console.log(m)
console.log(m[5][4][2])
*/
