function adicionaCliente(e) {
  e.preventDefault();

  let toadd = {
    
    matricula: document.getElementById(`inputMatricula`),
    nome: document.getElementById(`inputnome`),
    idade: document.getElementById(`inputidade`),
    cidade: document.getElementById(`inputcidade`),
    banco: document.getElementById(`inputbanco`),
    poupanca: document.getElementById(`inputpoupanca`),
  };
  

  if ( hasEmptyAttributes(toadd) === true ) return;

  let tr = createTRsForItem(toadd);

  $("table:first tbody").append(tr);

  if ( toadd.poupanca.value < 100 ) $("table:eq(1) tbody").append( $(tr).clone() );
  // nova função
  clearattributes(toadd);
}

// Nesta função estava retornando false (linha 30) quando o valor era nulo e isso causava erro no código

function hasEmptyAttributes(item) {
  for (i in item)
    if (item[i].value === "") {
      alert("Preencher " + i + ".");
      return true;
    }
  return false;
}

// Nova função clear para eliminar os campos do formulário
// atribuindo o valor nulo aos itens após a inserção para limpar os campos

function clearattributes(item) {
  for (i in item){
    item[i].value = ""
  }
}

function createTRsForItem(item) {
  let tr = document.createElement("tr");
  
  for (i in item) {
    let td = document.createElement("td");
    td.innerHTML = item[i].value;
    tr.appendChild(td);
  }

  return tr;
}
