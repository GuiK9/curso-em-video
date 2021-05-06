function calc(){
    var num = Number(document.getElementById('numero').value)
    var tab = document.getElementById('tab')
    /*var testes = document.getElementById('ret')
    testes.innerHTML = num*/
    if (num == 0) {
        window.alert('Cheque a informação colocada na tabuada')
    } else {
        tab.innerHTML = ''
        for (let c = 1; c <= 10 ; c += 1) {
            let reti = num * c
            let dt = document.createElement('option')
            dt.value = `${c}`
            dt.text = `${num} X ${c} = ${reti}`
            tab.appendChild(dt)
        }
    }
}
