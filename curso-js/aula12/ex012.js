var agora = new Date()
var hora = agora.getHours()
if (hora > 23) {
    console.log ('O dia não tem tanta hora assim brother!')
} else if (hora > 18) {
    console.log(`Boa noite`)
} else if (hora > 11) {
    console.log(`Boa tarde`)
} else if (hora > 4) {
    console.log(`Bom dia`)
} else if (hora > 0){
    console.log(`Boa madrugada`)
} else {
    console.log(`Hora negativa irmão? ta brincando comigo?`)
}