
function adicionaCliente(){

    let matricula = document.getElementById(`inputMatricula`).value
    let nome = document.getElementById(`inputnome`).value
    let idade = document.getElementById(`inputidade`).value
    let cidade = document.getElementById(`inputcidade`).value
    let banco = document.getElementById(`inputbanco`).value
    let poupanca = document.getElementById(`inputpoupanca`).value


    if(matricula == '' || nome == '' || idade == '' || cidade == ''){
        alert("Preencher campo vazio")
    }else{
        let elemento = document.createElement("tr")
        let elemento2 = document.createElement("tr")
        let elemento3 = document.createElement("tr")
        let elemento4 = document.createElement("tr")
        let elemento5 = document.createElement("tr")
        let elemento6 = document.createElement("tr")

        elemento.innerHTML = matricula
        elemento2.innerHTML = nome 
        elemento3.innerHTML = idade
        elemento4.innerHTML = cidade
        elemento5.innerHTML = banco
        elemento6.innerHTML = poupanca

        document.getElementById(`matricula1`).appendChild(elemento);
        matricula.value = ''
        document.getElementById(`nome`).appendChild(elemento2);
        nome.value = ''
        document.getElementById(`idade`).appendChild(elemento3);
        idade.value = ''
        document.getElementById(`cidade`).appendChild(elemento4);
        cidade.value = ''
        document.getElementById(`banco`).appendChild(elemento5);
        banco.value = ''
        document.getElementById(`poupanca`).appendChild(elemento6);
        poupanca.value = ''

    }
 
}
