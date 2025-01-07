let hora = 18

if (hora > 5 && hora < 12) {
    console.log("Bom dia!")
}
else if (hora > 12 && hora < 18) {
    console.log("Boa tarde!")
}
else if(hora > 18 && hora < 24) {
    console.log("Boa noite!")
}


switch (diaDaSemana) {
    case 1:
        console.log("Segunda-Feira")
        break
    case 2:
        console.log("Terça-Feira")
        break
    case 3:
        console.log("Quarta-Feira")
        break
    case 4: 
        console.log("Quinta-Feira")
        break
    case 5:
        console.log("Sexta-Feira")
        break
    case 6:
        console.log("Sábado")
        break
    case 7:
        console.log("Domingo")
        break
    case diaDaSemana > 7:
        console.log("Dia da semana inválido")
        break
}