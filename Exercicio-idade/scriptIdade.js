function verPerfil() {
    /****pegar o espaço para imagem e poder colocar a imagem***/
    var img = document.getElementById('imagem');

    /***pegar o campo age /ano de nascimento/ ***/
    var age = document.getElementById('age').value;

    /***pegar genero feminino***/
    var bolinhaFem = document.getElementById('genero_fem').checked;

    /****pegar genero masculino****/
    var bolinhaMasc = document.getElementById('genero_masc').checked;

    /****pegar o ano de nascimento***/
    var calc = 2023 - age;

    /***Verificando as condições**/
    if (age == '') {
        alert("Preenchimento é obrigatório")
    }
    else if (age > 2023) {
        alert("Ano de nascimento incompatível");
    }
    else if (calc > 105) {
        alert('Idade máxima é 105');
    }
    else if (bolinhaFem == false && bolinhaMasc == false) {
        alert("Preenchimento obrigatorio");
    }
    else {
        if (bolinhaFem == true) {
            var generoAtualizado = "Feminino";

            if (calc <= 5) {
                img.src = 'images/menina05.png';
                resultadoMsg = document.getElementById('resultado').innerHTML = generoAtualizado + ' ' + calc + ' anos';
            }

            else if (calc <= 10) {
                img.src = 'images/menina10.png';
                resultadoMsg = document.getElementById('resultado').innerHTML = generoAtualizado + ' ' + calc + ' anos';
            }
            else if (calc <= 20) {
                img.src = 'images/menina20.png';
                resultadoMsg = document.getElementById('resultado').innerHTML = generoAtualizado + ' ' + calc + ' anos';
            }
            else if (calc <= 30) {
                img.src = 'images/menina30.png';
                resultadoMsg = document.getElementById('resultado').innerHTML = generoAtualizado + ' ' + calc + ' anos';
            }

            else if(calc <= 45){
                img.src = 'images/menina45.png';
                resultadoMsg = document.getElementById('resultado').innerHTML = generoAtualizado + ' ' + calc + ' anos';
            }
             
            else{
                img.src='images/menina46.png';
                resultadoMsg = document.getElementById('resultado').innerHTML = generoAtualizado + ' ' + calc + ' anos';
            }
        }
        else {
            var generoAtualizado = "Masculino";
            if (calc <= 5) {
                img.src = 'images/menino5.jpg';
                resultadoMsg = document.getElementById('resultado').innerHTML = generoAtualizado + ' ' + calc + ' anos';
            }

            else if (calc <= 10) {
                img.src = 'images/menino10.jpg';
                resultadoMsg = document.getElementById('resultado').innerHTML = generoAtualizado + ' ' + calc + ' anos';
            }
            else if (calc <= 20) {
                img.src = 'images/menino20.jpg';
                resultadoMsg = document.getElementById('resultado').innerHTML = generoAtualizado + ' ' + calc + ' anos';
            }
            else if (calc <= 30) {
                img.src = 'images/menino30.png';
                resultadoMsg = document.getElementById('resultado').innerHTML = generoAtualizado + ' ' + calc + ' anos';
            }

            else if(calc <= 45){
                img.src = 'images/menino45.jpg';
                resultadoMsg = document.getElementById('resultado').innerHTML = generoAtualizado + ' ' + calc + ' anos';
            }
             
            else{
                img.src='images/menino46.png';
                resultadoMsg = document.getElementById('resultado').innerHTML = generoAtualizado + ' ' + calc + ' anos';
            }
        }
    }

}