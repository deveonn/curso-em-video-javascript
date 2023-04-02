function carregar() {

    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = (`Agora são ${hora} horas.`)

    if(hora >= 0 && hora <12){
        foto.src = 'manha.jpg'
        document.body.style.background = '#e2cd9f'
    } 
    
    else if( hora >= 12 && hora < 18) {
        foto.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
    } 
    
    else {
        foto.src = 'noite.jpg'
        document.body.style.background = '#515154'
    }
}