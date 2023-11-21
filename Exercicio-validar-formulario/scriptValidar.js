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




    /*****
     * 
     * DOCUMENTANDO
     * 
     * Tipos de inputs
     * 
     * Tamanhos MINIMOS E MAXIMOS dos campos
     * 
     * 
     */
}