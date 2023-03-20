/* Só nesse escopo - let */
let pri = parseFloat(prompt("Digite o primeiro valor. Por favor não digite valores iguais."));
let sec = parseFloat(prompt("Digite o segundo valor. Por favor não digite valores iguais."));
let ter = parseFloat(prompt("Digite o terceiro valor. Por favor não digite valores iguais."));

if (isNaN(pri) || isNaN(sec) || isNaN(ter)) { 
    // quando, Isso Não É Numero, volta como true, por sua vez o if termina aqui!
    document.write(`Por favor, digite um número...`);
    // quanto ele volta como false, significa que temos numero, ele volta como false e continue o código!
}else if (pri == sec && pri == ter) {
    document.write(`Não é aceito valores iguais!`);
} else if (pri > sec && pri > ter) {
    document.write(`Primeiro numero é o maior: ${pri}`);
} else if (sec > pri && sec > ter) {
    document.write(`Segundo numero é o maior: ${sec}`);
} else {
    document.write(`Terceir número é o maior: ${ter}`);
}