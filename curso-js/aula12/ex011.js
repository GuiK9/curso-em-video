var idade = 13
if (idade > 18 && idade < 65) {
    console.log('maior de idade, tem que votar!')
} else if (idade > 16 && idade < 18 ) {
    console.log('Menor de idade de idade, entretanto, tem mais que 16 então pode votar, se quiser!')
    } else if (idade < 16){
        var tempo = 18 - idade
        console.log(`Você tem ${idade} anos, é menor de idade e não pode votar, volte daqui a ${tempo} anos!`)
        } else { 
            console.log(`Você tem mais de 65 e no Brasil o voto para você passa a ser opcional!`)
            }
