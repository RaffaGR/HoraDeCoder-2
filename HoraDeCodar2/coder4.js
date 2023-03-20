var pri = parseFloat(prompt("Digite o primeiro valor. Por favor não digite valores iguais."));
var sec = parseFloat(prompt("Digite o segundo valor. Por favor não digite valores iguais."));
var ter = parseFloat(prompt("Digite o terceiro valor. Por favor não digite valores iguais."));

if (isNaN(pri) || isNaN(sec) || isNaN(ter)) { 
    document.write(`Por favor, digite um número...`);
}else if (pri == sec || pri == ter || sec == ter) {
    document.write(`Não é aceito NENHUM valor igual!`);
} else if (pri > sec && pri > ter) {
    if (sec > ter) {
        let soma = pri + sec;
        document.write(`A soma dos maiores valores é igual a ${soma}`);
    } else {
        let soma = pri + ter;
        document.write(`A soma dos maiores valores é igual a ${soma}`);
    }
} else if (sec > pri && sec > ter) {
    if (pri > ter) {
        let soma = pri + sec;
        document.write(`A soma dos maiores valores é igual a ${soma}`);
    } else {
        let soma = sec + ter;
        document.write(`A soma dos maiores valores é igual a ${soma}`);
    }
} else {
    if (pri > sec) {
        let soma = pri + ter;
        document.write(`A soma dos maiores valores é igual a ${soma}`);
    } else {
        let soma = sec + ter;
        document.write(`A soma dos maiores valores é igual a ${soma}`);
    }
}