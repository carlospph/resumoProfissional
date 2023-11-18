function verPerfil() {
/****pegar o espaço para imagem e poder colocar a imagem***/
var img = document.getElementById('imagem');

/***pegar o campo age /ano de nascimento/ ***/
var age = document.getElementById('age').value;

/***pegar genero feminino***/
var bolinhaFem = document.getElementById('genero_fem').checked;

/****pegar genero masculino****/
var bolinhaMasc = document.getElementById('genero_masc').checked;


/***Verificadno ***/
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
        alert(generoAtualizado);
        img.src='images/menina2636.png';
    }
    else{
        var generoAtualizado = "Masculino";
        alert(generoAtualizado);
        img.src='images/homem5065.png';
    }
}
//alert(bolinhaMasc);

}



    /****   
       id = age 
       id = fem 
       id = masc
       id = imagem ***/

 
      /*** 
    if (age === '') {
        alert("Campo obrigatório")
    }
    else {
        var yearAtual = 2023;
        var ageCalculed;
    
        ageCalculed = yearAtual - age;

        if (ageCalculed >= 101) {
            alert("Essa DATA DE NASCIMENTO não condiz com a realidade humana");
        }
        else if(ageCalculed <0 ){
            alert("DATA DE NASCIMENTO maior do que a data atual");
        }
        else{
            alert("Perfil pesquisado tem  " + ageCalculed + " Anos");

        }
        ****/

    //    var fem = document.getElementById('fem').value;
    //    var masc = document.getElementById('masc').value;
