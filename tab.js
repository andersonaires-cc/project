

function adicionaCliente(e){
    e.preventDefault();
    let toadd = {
        matricula:  document.getElementById(`inputMatricula`).value,
        nome: document.getElementById(`inputnome`).value,
        idade: document.getElementById(`inputidade`).value,
        cidade: document.getElementById(`inputcidade`).value,
        banco: document.getElementById(`inputbanco`).value,
        poupanca: document.getElementById(`inputpoupanca`).value
    }

    let vazio = false;

    for (i in toadd){
        if(toadd[i] === ''){
          alert("Preencher "+i+".");
          vazio = true;
          break;
        }
    }

    if(!vazio){

        let tr = document.createElement("tr")
        for(i in toadd){
            let td = document.createElement('td');
            td.innerHTML = toadd[i];
            tr.appendChild(td);
        }
        
        $('table:first tbody').append(tr);

        if(toadd.poupanca<100)
            $('table:eq(1) tbody').append($(tr).clone());
    }
 
}
