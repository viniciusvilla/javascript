function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.querySelector('input#txtano')
    var res = window.document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
       
        if (fsex[0].checked){
            genero = 'homem'
        } else if (fsex[1].checked){
            genero = 'mulher'
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos`

    }
    }