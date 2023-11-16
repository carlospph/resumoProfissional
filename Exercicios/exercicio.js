
//document.getElementById('item').style.color = "red";

//document.querySelector('#item').style.color = "blue";

//document.querySelector('.item').style.backgroundColor = "pink";

function carregar(){
    var msgHora =  document.getElementById('hora');
    var img =  document.getElementById('imagem');

    var data = new Date();
        hora = data.getHours();    msgHora.innerHTML = `São mais de ${hora} horas`;

    if(hora <= 12){
        document.body.style.backgroundColor = "#D2CBB1";
        img.src="images/manha.png";
    }
    else if(hora >= 13 && hora <=  18){
        document.body.style.backgroundColor = "#F3DFD6";
        img.src="images/tarde.png";
    }
    else{
        document.body.style.backgroundColor = "#01308C";
        img.src="images/noite.png";
    }

}