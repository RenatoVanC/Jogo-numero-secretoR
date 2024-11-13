let listaNumerosSorteados = [];
let numeroSecretoMaximo = 10
let numeroSecreto = gerarNumeroAleatorio ();
let tentativas = 1;


function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;    
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}

function mensagemInicial () {
    exibirTextoNaTela ("h1", "Jogo do Número Secreto!");
    exibirTextoNaTela ("p", "Escolha uma numero entre 1 e 10!");
}

mensagemInicial();

function verificarChute () {
    let chute = document.querySelector ("input").value;

    if (chute == numeroSecreto) { 
        exibirTextoNaTela ("h1", "Acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        exibirTextoNaTela ("p", `Você descobriu o Número Secreto com ${tentativas} ${palavraTentativa}!`);
        document.getElementById ("reiniciar").removeAttribute ("disabled");
    } else { 
        if (chute < numeroSecreto) {
        exibirTextoNaTela ("h1", "Tente novamente!"); 
        exibirTextoNaTela ("p", `O Número Secreto é maior.`);
    } else {
        exibirTextoNaTela ("h1", "Tente novamente!"); 
        exibirTextoNaTela ("p", `O Número Secreto é menor.`);
    }
    limparCampo();
}
tentativas++;
}

function gerarNumeroAleatorio () {
   let numeroEscolhido = parseInt(Math.random () * numeroSecretoMaximo + 1);
   let quantidadeDeNumerosSorteados = listaNumerosSorteados.length;
   if (quantidadeDeNumerosSorteados == numeroSecretoMaximo) {
        listaNumerosSorteados = [];
   }
   if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio ();
   } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log (listaNumerosSorteados);
        return numeroEscolhido;
   }
}
console.log (numeroSecreto);

function limparCampo () {
    chute = document.querySelector ("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio ();
    console.log (numeroSecreto);
    limparCampo();
    tentativas = 1;
    mensagemInicial ();
    document.getElementById ("reiniciar").setAttribute ("disabled",true);
}