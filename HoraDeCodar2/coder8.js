

var n = [];

for (let index = 0; index < 4; index++) {
    quantidade = index + 1;
    n.push(parseFloat(prompt(`Digite algum número 4x - ${quantidade}/4`)));
    if (isNaN(Number(n[index])) || n[index] < 0 || n[index] > 10) {
        alert("Por favor, digite um numero! Sendo essencial ser menor que 10 e maior que 0 ;D");
        n.pop();
        index --;
    }
}
// Estou confundindo || com &&... lembre-se, existe !isNaN(), mas pode bugar, pelo fato de não voltar apenas string, podendo voltar null ou coisa do tipo...
var soma2 = 0;
n.forEach(function(valor/* , indice, outroarray?aSerpercorrido */) {
    /* console.log(indice); */
    return soma2 += valor;
});
/* var soma = n.reduce(function(total, adicionadoAoTotal) {
    return total + adicionadoAoTotal; 
}); */ 
/* console.log(soma);
console.log(soma2); */

var mA = soma2 / n.length;

if (mA > 5) {
    alert(`Você passou no teste!\nSua média foi: ${mA}`);
} else {
    alert(`Tente novamente.. \n'^' Sua nota foi: ${mA}`);
}