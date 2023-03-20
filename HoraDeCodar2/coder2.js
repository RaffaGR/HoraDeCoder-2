

var n = parseInt(prompt("Informe um número, positivo ou negativo"));

if (n > 0) {
    document.write(`Esse numero é positivo`);
} else if (n < 0) {
    document.write(`Esse numero é negativo`);
} else if (n == 0) {
    document.write(`Esse numero é igual a 0`);
} else {
    document.write(`Por favor, digite um numero.`);
};