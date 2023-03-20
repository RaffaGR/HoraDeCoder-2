'use strict'

var pri = parseFloat(prompt("Informe o primeiro numero"));
var sec = parseFloat(prompt("Informe o segundo numero"));

if (pri > sec) {
    document.write(`O ${pri} numero é maior que o ${sec}`);
} else if (sec > pri) {
    document.write(`O ${sec} numero é maior que o ${pri}`);
} else if (pri == sec) {
    document.write(`O ${pri} é igual ${sec} ou o ${sec} é igual ao ${pri}`);
} else {
    document.write(`Por favor, digite um numero.`);
};