var idade = 80

if (idade < 16 ) {
    console.log("Não pode votar")
} else if (idade > 16 && idade < 18){
    console.log("Voto opcional")
} else if (idade > 18 && idade < 65){
    console.log("Voto Obrigatório")
} else{
    console.log("Voto opcional, pois passou dos 65 anos.")
}