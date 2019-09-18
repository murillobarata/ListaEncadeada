lista = {
    no_inicial: null
}

function criarNo() {
    no = {
        valor: Math.floor(Math.random() * 20),
        proximo: null,
    }

    // console.log(no);
    return no;
}

function inserirInicio() {
    var novo_no = criarNo();

    if (lista.no_inicial == null) {
        lista.no_inicial = novo_no;
    } else {
        novo_no.proximo = lista.no_inicial;
        lista.no_inicial = novo_no;
    }

    console.log(lista);

    addInicioListaHTML();
}

function inserirOrdenado() {
    var novo_no = criarNo();
    console.log("Novo valor: ", novo_no.valor);

    if (lista.no_inicial == null) { //se a lista for vazia
        lista.no_inicial = novo_no;
        console.log(lista);
    } else { 
        var no_aux = lista.no_inicial;

        if (no_aux.proximo == null) { //se a lista tiver apenas um elemento
            if (novo_no.valor < no_aux.valor) {
                novo_no.proximo = no_aux;
                lista.no_inicial = novo_no;
                console.log(lista);
            } else {
                no_aux.proximo = novo_no;
                console.log(lista);
            }
        } else { //se a lista tiver mais de dois elementos

            while(no_aux.proximo != null) { //percorrer a lista
                if (novo_no.valor > no_aux.valor) {
                    if (novo_no.valor <= no_aux.proximo.valor) {
                        novo_no.proximo = no_aux.proximo;
                        no_aux.proximo = novo_no;
                        break;
                    } else{
                        if (no_aux.proximo.proximo == null) { //o novo_no é maior que o no_aux e maior que o proximo do no_aux.
                            //porém, o próximo do no_aux, é o último da lista.
                            no_aux.proximo.proximo = novo_no;
                            break;
                        } else {
                            no_aux = no_aux.proximo;
                        }
                    }
                } else {
                    novo_no.proximo = no_aux;
                    lista.no_inicial = novo_no;                                  
                    break;
                }
    
            }
        }
    }
    imprimirLista();
}

function imprimirLista() {
    var no_aux = lista.no_inicial;
    var lista_str = "";

    while (no_aux != null) {
        lista_str = lista_str + no_aux.valor + "; ";
        no_aux = no_aux.proximo; 
    }
    
    console.log("Lista:", lista_str);
}

function tamanho() {
    if (lista.no_inicial == null) {
        var tam = 0;
    } else {
        var tam = 1;
        var no_aux = lista.no_inicial;
    
        while(no_aux.proximo != null) {
            tam++;
            no_aux = no_aux.proximo;
        }
    }

    alert("O tamanho da lista é: " + tam);
    return tam;
}

function tamanhoRecursivo() {

}

function addInicioListaHTML() {
    div = "<div class=\"lista-no\">"+lista.no_inicial.valor+"</div>";
    document.getElementById("lista").innerHTML = div + document.getElementById("lista").innerHTML;    
}