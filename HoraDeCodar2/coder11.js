escolhaValor()
function escolhaValor() {
var user = parseInt(prompt("Opções;\n1 = Adição, 2 = Subtração, 3 = Divisão, 4 = Multiplicação"))
switch(user) {
    case 1:
        adicao();
        break;
    case 2:
        subtracao();
        break;
    case 3:
        divisao();
        break;
    case 4:
        multiplicacao();
        break;
    default:
        alert("Digite um valor válido");
        escolhaValor()
        break;
}}

function adicao() {
    var soma = parseFloat(prompt("Primeiro valor a ser Somado?")) + parseFloat(prompt("Segundo valor a ser Somado?"));
    alert(soma);
}
function subtracao() {
    let subt = parseFloat(prompt("Valor a ser Subtraido?"))/* (Diminuendo) */ - parseFloat(prompt("E qual o Subtraendo?"));
    alert(subt);
}
function divisao() {
    let div = parseFloat(prompt("Escolha o Dividendo?")) / parseFloat(prompt("Agora o Divisor?"));
    alert(div);
}
function multiplicacao() {
    let mult = parseFloat(prompt("Primeiramente insira o primeiro Fator, Multiplicado?")) * parseFloat(prompt("Em diante coloque o 2º Fator, o Multiplicador?")); /* Incógnitas? Coeficiente(x)? Operando ou Operadores(+-*\)?  */
    alert(`Aqui está o Produto: ${mult}`);
}

/* 
var a = parseInt(prompt("Escolha o primeiro valor base para ser manipulado"))
var b = parseInt(prompt("Escolha o segundo valor base para ser manipulado"))
escolhaValor()
function escolhaValor() {
var user = parseInt(prompt("Opções\n1 = Adição, 2 = Subtração, 3 = Divisão, 4 = Multiplicação"))
switch(user) {
    case 1:
        adicao();
        break;
    case 2:
        subtracao();
        break;
    case 3:
        divisao();
        break;
    case 4:
        multiplicacao();
        break;
    default:
        alert("Digite um valor válido");
        escolhaValor()
        break;
}}

function adicao() {
    soma = a + b;
    document.write(soma);
}
function subtracao() {

}
function divisao() {

}
function multiplicacao() {

}
 */