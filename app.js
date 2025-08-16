let listaAmigos = [];

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Amigo Secreto');
    exibirTextoNaTela('h2', 'Digite o nome dos seus amigos');
}

exibirMensagemInicial();

function adicionarAmigo() {
    let nome = document.querySelector('input').value;


    if (nome === '') {
        exibirTextoNaTela('h2', 'Por favor, digite um nome');
        return;
    }

    //confere se o nome foi repetido
    else {
        if (listaAmigos.includes(nome)) {
            exibirTextoNaTela('h2', 'Esse nome ja foi inserido');
            limparCampo();
            return;
        }
    }

    listaAmigos.push(nome);
    arrumarLista();

    console.log(listaAmigos);
    limparCampo();
}

function arrumarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    // adiciona os nomes no formato certo de lista
    listaAmigos.forEach((nome) => {
        let item = document.createElement('li');
        item.textContent = nome;
        lista.appendChild(item);
    });
}

function sortearAmigo() {

    //se tiver menos de 4 pessoas ele pede por mais nomes
    if (listaAmigos.length < 4) {
        exibirTextoNaTela('h2', 'Insira ao menos 4 nomes');
    }

    else {
        let sorteioNome = Math.floor(Math.random() * listaAmigos.length);
        
        //pega pelo nome, nao pelo número do indice
        let nomeSorteado = listaAmigos[sorteioNome];

        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `O nome sorteado foi ${nomeSorteado}`;

        document.getElementById('reiniciar').removeAttribute('disabled');
    }
}

function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}

function reiniciarTudo() {
    document.getElementById('resultado').innerHTML = '';
    listaAmigos = [];
    arrumarLista();
    exibirMensagemInicial();
}