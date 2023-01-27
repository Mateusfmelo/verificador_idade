function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')

    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
            // Homem
        if (fsex[0].checked) {
            gênero = 'homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'bebe-h.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem-h.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adulto-h.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso-h.png')
            }

            // Mulher
        } else if (fsex[1]) {
            gênero = 'mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'bebe-m.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem-m.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adulto-m.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso-m.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero}
         com ${idade} anos!`
        res.appendChild(img)
    }
}