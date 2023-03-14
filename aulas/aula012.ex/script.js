
function carregar (){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var horat = window.document.getElementById('hora')
    var data = new Date()
    var hora = data.getHours()
    
    horat.innerHTML = `Agora são ${hora} horas`
    

    if(hora >=0 && hora <= 12){
        //BOM DIA
        img.src = 'imagens/narutom2.png'
        msg.innerHTML = `Bom dia!`
        document.body.style.background = '#d2d6bf'
        
        

    } else if (hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = 'imagens/narutot.png'
        msg.innerHTML = `Boa Tarde!`    
        document.body.style.background = '#97b1b8'
        //#b6bca8 d2d6bf 3b4a45 97b1b8 data.getHours()
    } else {
        //BOA NOITE
        img.src = 'imagens/naruton3.png'
        msg.innerHTML = `Boa Noite!`
        document.body.style.background = '#3b4a45'
    }
}
