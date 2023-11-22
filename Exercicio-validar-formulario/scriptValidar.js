/***
function validarFields() {

    let nomeCliente = document.getElementById('nomeCliente').value;

    document.getElementById('erro01').innerHTML = "Campo Obrigatório";
    document.getElementById('erro02').innerHTML = "Campo Obrigatório";
    document.getElementById('erro03').innerHTML = "Campo Obrigatório";
    document.getElementById('erro04').innerHTML = "Campo Obrigatório";
    document.getElementById('erro05').innerHTML = "Campo Obrigatório";

    let emailCliente = document.getElementById('emailCliente');
    emailCliente.style.backgroundColor = "pink";

    let rgCliente = document.getElementById('rgCliente');
    rgCliente.style.backgroundColor = "pink";

    let cpfCliente = document.getElementById('cpfCliente');
    cpfCliente.style.backgroundColor = "pink";

    let dataNascimentoCliente = document.getElementById('dataNascimentoCliente');


    ****/

    const camposDoFormulario = document.querySelectorAll("[required]");
    console.log(camposDoFormulario);

    camposDoFormulario.forEach((campo)=> {
        campo.addEventListener("blur",()=>verificaCampo(campo));
    })

    function verificaCampo(campo){

    }
    /*****
     * 
     * DOCUMENTANDO
     * 
     * Definir tipos para campos de digitação;
     * Limitar a quantidade de caracteres em um elemento input;
     * Controlar a quantidade mínima de caracteres do input;
     * Transformar um campo em obrigatório.
     * 
     *  Utilizar patterns;
        Criar expressões regulares;
        Selecionar vários elementos ao mesmo tempo;
        Construir funções para cada elemento de uma lista;
        Detectar eventos do usuário;
        Importar funções de outros arquivos;
        Verificar CPFs com números repetidos.
     * 
     * 
     * 
     * Validar os dígitos verificadores do CPF;
Transformar fórmulas matemáticas em código;
Lidar com datas em JavaScript;
Construir comparações de datas para verificar maioridade.

     * 
     * 
     *
}****/