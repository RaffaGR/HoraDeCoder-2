

var numeros = [];

for (let index = 0; index < 6; index++) {
    quantidade = index + 1;
    numeros.push(parseFloat(prompt(`Digite algum número 6x - ${quantidade}/6`)));
    if (isNaN(Number(numeros[index]))) {
        alert("Por favor, digite um numero! de preferencia, menor que 72. -_-'");
        numeros.pop();
        index --;
    }
}

var sTotal = 0;
var adicionadas = [];
for (let index = 0; index < numeros.length; index++) {
    if (numeros[index] < 72) {
        sTotal += numeros[index];
        adicionadas.push(numeros[index]);
    }
}
alert(`A soma dos números, ${adicionadas} menores que 72, é igual a ${sTotal}`);