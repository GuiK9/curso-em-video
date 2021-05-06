let amigo = {nome: 'josé',
sexo: 'M',
peso: 85.5,
engordar(p){
    console.log('engordou')
    this.peso += p
}}
amigo.engordar(2)
console.log(`${amigo.nome} tem ${amigo.peso}`)
