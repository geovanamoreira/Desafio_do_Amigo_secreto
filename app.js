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

    if(nome === ''){
        exibirTextoNaTela('h2', 'Por favor, digite um nome');
        return;
    }

    //confere se o nome foi repetido
    else{
        if(listaAmigos.includes(nome)){
            exibirTextoNaTela('h2', 'Esse nome ja foi inserido');
            return;
        }
    }

    listaAmigos.push(nome);
    console.log(listaAmigos);
    limparCampo();
}

function sortearAmigo() {

    if (listaAmigos.length < 4) {
        exibirTextoNaTela('h2', 'Insira ao menos 4 nomes');
    }
   
    else{
    }
}

function limparCampo(){
    nome = document.querySelector('input');
    nome.value = '';
}