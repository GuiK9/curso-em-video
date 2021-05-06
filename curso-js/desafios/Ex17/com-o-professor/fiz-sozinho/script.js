var arr = []
function add(){
    var numero = Number(document.getElementById('numero').value)
    var sele = document.getElementById('tab')
    //Para criar e adicionar os valores (button: adicionar)
    if (numero < 1 || numero > 100) {
        window.alert('O número está fora dos parâmetros!!')
    } else {
        var t = arr.indexOf(numero)
        arr.push(numero)
        if (t == -1){
            var op = document.createElement('option')
            op.innerHTML = (`Valor  ${numero} adicionado`)
            sele.appendChild(op)
        } else {
            window.alert('O número inserido é igual a um já inserido, por favor insira outro!!')
        }
    }
    if (arr.indexOf(0) > 0){
        window.alert('aaaaa')
    }
}

function finalizar() {
    var nl = arr.length
    var soma = 0
    var trat = [Math.max(...arr), Math.min(...arr)]
    for(var i = 0; i < nl; i++) {
        soma += arr[i];
    }
    var media = soma / arr.length
    if (nl == 0){
        window.alert('O número está fora dos parâmetros!!')
    } else {
        ret.innerHTML = (`Ao todo temos ${nl} números cadastrados <br>`)
        ret.innerHTML += (`O maior valor informado é ${trat[0]} <br>`), ret.innerHTML += (`O menor valor informado é ${trat[1]} <br>`), ret.innerHTML += (`A soma dos valores é ${soma} <br>`), ret.innerHTML += (`a média dos valores informados é ${media} <br>`) 
    }
}