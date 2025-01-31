let listaDeSorteados = [];
let maxPossibilidades = 500;
let numeroSecreto = gerarRNG();
let tentativas = 1;
console.log(numeroSecreto);

exibirMsgInicial();

//FUNÇÃO PARA ATRIBUIR TEXTOS NA PAGINA DE JOGO
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
    // if ('speechSynthesis' in window) {
    //     let utterance = new SpeechSynthesisUtterance(texto);
    //     utterance.lang = 'pt-BR';
    //     utterance.rate = 1.2; 
    //     window.speechSynthesis.speak(utterance); 
    // } else {
    //     console.log("Web Speech API não suportada neste navegador.");
    // }
}

//FUNÇÃO QUE VERIFICA SUA TENTATIVA DE DESCOBRIR O NUMERO
function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas':'tentativa';
        let mensagemtentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        document.getElementById('reiniciar').disabled = false; //Habilida o botão de reiniciar o jogo
        document.getElementById('botaochute').disabled = true; //Desabilita o botão de tentativas
        document.querySelector('input').disabled = true; //Desabilita entrada de tentativa
        exibirTextoNaTela('p', mensagemtentativas);
    }
        else {
            if (chute > numeroSecreto){
                exibirTextoNaTela('p', 'O número secreto é menor.');
            }   else {
                exibirTextoNaTela('p', 'O número secreto é maior');
                }
            exibirTextoNaTela('h1', 'Você errou, tente de novo');
            tentativas++;
            limpaCampo();
        }
}


function limpaCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}


function gerarRNG(){
    let numeroEscolhido = parseInt(Math.random() * maxPossibilidades + 1)
    let quantElementosSorteados = listaDeSorteados.length;
    //VERIFICA E RESETA QUANTIDADE DE SORTEADOS
    if (quantElementosSorteados == maxPossibilidades){
        listaDeSorteados = [];
    }
    //INSERE NA LISTA O NUMERO SORTEADO OU CASO JA ESTEJA NELA, GERA UM NOVO
    if (listaDeSorteados.includes(numeroEscolhido)){
        return gerarRNG();

    } else {
        listaDeSorteados.push(numeroEscolhido)
        console.log(`Elementos na lista são: [${listaDeSorteados}] `)
        return numeroEscolhido;
      }
}


//FUNÇÃO PARA RESETAR O JOGO QUANDO O JOGO ACABA
function resetJogo(){
    numeroSecreto = gerarRNG();
    document.getElementById('reiniciar').disabled = true; //Desabilita o botão de reiniciar o jogo
    document.getElementById('botaochute').disabled = false; //Habilita o botão de tentativas
    document.querySelector('input').disabled = false; //Desabilita entrada de tentativa
    console.log(numeroSecreto);
    exibirMsgInicial();
    limpaCampo();
    tentativas = 1;
}


function exibirMsgInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${maxPossibilidades}`);
}














//  FUNÇÃO TABUADA

// let fator = 8;
// contador = 1
// function tabuada(fator){
//     while (contador <= 10) {
//         let produto = (contador * fator);
//         console.log(`${fator} x ${contador} = ${produto}.`)
//         contador++;
//     }
// }
// tabuada(fator);


//---------------------------------------------------------------

//FUNÇÃO AREA DO CIRCULO

// let raio = 3.97;

// function areaCirculo(raio) {
//     let area = (3.14 * (raio ** 2));
//     console.log(`A área do círculo é ${area.toFixed(2)}cm³.`)
// }
// areaCirculo(raio);

//---------------------------------------------------------------

// FUNÇÃO AREA DE QUADRADO OU RETANGULO

// let altura = 5;
// let largura = 5;

// function calcAreaPerimetro (largura, altura){
//     let perimetro = 2 * (altura + largura);
//     let area = altura * largura;
//     console.log(`A area sala é ${area}m².`);
//     console.log(`O perímetro da sala é ${perimetro}mts.`);
// }
// calcAreaPerimetro(largura, altura);

//---------------------------------------------------------------

//FUNÇÃO CONVERÇÃO DE MOEDA

// let cotacaoDolar = 4.8;
// let quantDolar = 766.61;

// function conversao(quantDolar){
//     let quantReal = (cotacaoDolar * quantDolar);
//     return quantReal;
// }
// let resultado = conversao(quantDolar);
// console.log(resultado.toFixed(2));


//---------------------------------------------------------------

//FUNÇÃO DE CALCULO DO IMC

// let peso = 90;
// let altura = 1.95;

// function calculaIMC(peso, altura){
//     return peso/(altura*altura);
// }
// let imc = calculaIMC(peso, altura);
// console.log(imc.toFixed(2));

//---------------------------------------------------------------

//FUNÇÃO CALCULA FATORIAL

// let numero = 7;
// function calcularFatorial(numero) {
//     // Se o número for 0 ou 1, retorna 1
//     if (numero <= 1) {
//         return 1;
//     }   
//         else{    
//         // Para outros números, calcula o fatorial
//         let resultado = 1;
//         let contador = numero;
//         while (contador > 0) {
//             resultado = resultado * contador;
//             contador--;
//         }   
//             return resultado;
//         }
// }
// let fatorial = calcularFatorial(numero);
// console.log(fatorial);

//---------------------------------------------------------------

// function mostrarOla(){
//     console.log('Olá mundo!');
// }
// mostrarOla();

//---------------------------------------------------------------

// function mostrarOla(nome){
//     console.log(`Olá ${nome}!`);
// }
// let nome = 'Jão'
// mostrarOla(nome);

//---------------------------------------------------------------

// function dobraValor(){
//     return numero * 2;
// }
// let numero = 50;
// console.log(dobraValor());

//---------------------------------------------------------------

// function mediaDe3(num1, num2, num3){
//     return (num1 + num2 +num3)/3;
// }
// console.log(mediaDe3(20,10,15));

//---------------------------------------------------------------

// function maiorNum(num1, num2){
//     return num1 > num2 ? num1 : num2;
// }
// console.log(maiorNum(200,14));

//---------------------------------------------------------------

// function numAoQuad(num1){
//     return num1 * num1;
// }
// console.log(numAoQuad(10));