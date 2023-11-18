function verPerfil() {
/****pegar o espaço para imagem e poder colocar a imagem***/
var img = document.getElementById('imagem');

/***pegar o campo age /ano de nascimento/ ***/
var age = document.getElementById('age').value;

/***pegar genero feminino***/
var bolinhaFem = document.getElementById('genero_fem').checked;

/****pegar genero masculino****/
var bolinhaMasc = document.getElementById('genero_masc').checked;


/***Verificando ***/
if(age == ''){
    alert("Preenchimento é obrigatório")
}
else if(age > 2023){
    alert("Ano de nascimento incompatível");
}
else if(bolinhaFem == false && bolinhaMasc == false){
    alert("Preenchimento obrigatorio");
}
else{
    if(bolinhaFem == true){
        var generoAtualizado = "Feminino";
        img.src='images/menina2636.png';
        /****passar a mensagem de resultado para imprimir na tela*****/
        var resultadoMsg = document.getElementById('resultado').innerHTML = generoAtualizado;
        var conta = 2023 - age;
        document.getElementById('resultAge').innerHTML = conta + ' anos';
    }
    else{
        var generoAtualizado = "Masculino";
        img.src='images/homem5065.png';
        /****passar a mensagem de resultado para imprimir na tela*****/
        var resultadoMsg = document.getElementById('resultado').innerHTML = generoAtualizado;
        var conta = 2023 - age;
        var resultAge = document.getElementById('resultAge').innerHTML = conta + ' anos';
    }
}

}