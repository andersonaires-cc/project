function adicionaCliente(e) {
  e.preventDefault();

  let toadd = {
    matricula: document.getElementById(`inputMatricula`).value,
    nome: document.getElementById(`inputnome`).value,
    idade: document.getElementById(`inputidade`).value,
    cidade: document.getElementById(`inputcidade`).value,
    banco: document.getElementById(`inputbanco`).value,
    poupanca: document.getElementById(`inputpoupanca`).value,
  };

  if ( hasEmptyAttributes(toadd) === true ) return;

  let tr = createTRsForItem(item);

  $("table:first tbody").append(tr);

  if ( toadd.poupanca < 100 ) $("table:eq(1) tbody").append( $(tr).clone() );
}

function hasEmptyAttributes(item) {
  for (i in item)
    if (item[i] === "") {
      alert("Preencher " + i + ".");
      return false;
    }
  return true;
}

function createTRsForItem(item) {
  let tr = document.createElement("tr");
  
  for (i in item) {
    let td = document.createElement("td");
    td.innerHTML = item[i];
    tr.appendChild(td);
  }

  return tr;
}
