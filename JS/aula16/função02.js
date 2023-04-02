// no caso de algum parametro não ser passado, ira considerar a variavel como zero
// é isso que o n1=0 etc faz nessa situação, do contrario, soma normalmente

function soma(n1=0, n2=0) {
    return n1 + n2
}

let calculo = soma(3)

console.log(calculo)