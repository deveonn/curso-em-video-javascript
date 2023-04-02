// RECURSIVIDADE
// uma função que tem o chamado dela dentro dela mesma

function fatorial(n){
    if(n == 2 ){
        return 1
    } else {
        return n * fatorial(n-1)
    }
}