function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('image')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
        msg.innerHTML = `Agora são ${hora}:${minuto} minutos.`
    if (hora >= 0 && hora <= 12){
        //BOM DIA!
        img.src = "./imgg/manha.jpg"
        document.body.style.background = '#ffbe4d'
    } else if (hora >= 12 && hora <= 18){
        //BOA TARDE!
        img.src = "./imgg/tarde.jpg"
        document.body.style.background = '#7b90ad'
    } else {
        //BOA NOITE!
        img.src = "./imgg/noite.jpg"
        document.body.style.background = '#1a272d'
    }
    
}