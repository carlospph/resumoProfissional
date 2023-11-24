 

let btnAction = document.getElementById('btn');
btnAction.addEventListener('click', () => {
    let numberOne = document.querySelector('.campo__number__one').value;
    let numberTwo = document.querySelector('.campo__number__two').value;
    let resultado = document.querySelector('.campo__resultado').value;

    if(numberOne ==="" || isNaN(numberOne)){
        alert("Preencher 1o campo com numero");
        document.querySelector('.campo__number__one').focus();
        document.querySelector('.campo__number__one').value ="";
    }
    else if(numberTwo ==="" || isNaN(numberOne)){
        alert("Preencher 2o campo com numero");
        document.querySelector('.campo__number__two').focus();
        document.querySelector('.campo__number__two').value = "";
    }

      else{
        
        let soma = Number(numberOne) + Number(numberTwo);

        let item = document.querySelector('.campo__resultado').
        innerHTML = `<h2> Resultado : ${soma}<hr>
        <h2>Calculando...</h2>
        </h2> <h4>${numberOne}  +  ${numberTwo}  =  ${soma}</h4> `;


        
      }
});
