function contar() {
    var inicio = document.getElementById('inicio');
    var fim = document.getElementById('fim');
    var passo = document.getElementById('passo');
    var resultado = document.getElementById('res');

    var nInicio = Number(inicio.value);
    var nFim = Number(fim.value);
    var nPasso = Number(passo.value);

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
      window.alert('[Erro] Verifique os valores informados.')
      res.innerHTML = 'Impossivel contar.'
    }  
    
    else {
      res.innerHTML = "Contando: <br>"
        if (nPasso <= 0) {
          window.alert('[Erro]')
        }
        if( nInicio < nFim){
          for ( c = nInicio; c <= nFim; c+= nPasso ) {
            resultado.innerHTML += `${c} \u{1F449}` //codigos de emojis so funcionam dentro de crases!!!!!!!!!!!!!
          }
        }
        
      else {
        for(let c = nInicio; c >= nFim; c-= nPasso ){
          res.innerHTML += `${c} \u{1F449}`
      }
    }
    resultado.innerHTML += `\u{1F3C1}`
  }
}
/* Nunca se esqueça que para escrever varias coisas juntos com JS, use += no innerHTML, se não, em vez de concatenar as coisas e escrever varias coisas, vai só sobrescrever */