
function calc(){
    var data = new Date()
    var ano = data.getFullYear()

    var nasc = window.document.getElementById('nasc')
    var res = window.document.getElementById('res')

    var idade = ano - Number(nasc.value)
    var genero = ''

    if (nasc.value.length == 0 || nasc.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else{
        var fsex = window.document.getElementsByName('radsex')

        if(fsex[0].checked){
            genero = 'Homem'
        } else if (fsex[1].checked){
            genero = 'Mulher'
        }

        res.innerHTML = `Foi detectado ${genero} de ${idade} anos`
    }

}