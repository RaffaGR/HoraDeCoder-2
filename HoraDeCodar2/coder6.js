/* var n1 = parseFloat(prompt("Informe 4 numeros, sendo esse o Primeiro"));
var n2 = parseFloat(prompt("Este o Segundo"));
var n3 = parseFloat(prompt("Esse o Terceiro"));
var n4 = parseFloat(prompt("E por fim o Quarto")); */

var ArrayDeN = [parseFloat(prompt("Todos numeros devem ser diferentes. Digite o 1º")), parseFloat(prompt("Digite o 2º")), parseFloat(prompt("Digite o 3º")), parseFloat(prompt("Digite o 4º"))];

/* console.log(ArrayDeN[0]);
console.log(ArrayDeN); */

function VerificarSeTemIgualdadeNumerica(Array) {
    for (let indice = 0; indice < Array.length; indice++) { /* Vai percorrer todos os itens do array */
        for (let iComparation = indice + 1; iComparation < Array.length; iComparation++) { /* Vai percorrer todos os itens diferente do indice inicial, sem contar os que estão atraz do indice inicial tambem. */
            if (Array[indice] === Array[iComparation]) {
                return true;
            } else {
                return false;
            }
        }
    }
}

// isNaN() tenta converter o argumento para um número antes de verificar se é NaN
    if (Number.isNaN(ArrayDeN[0]) && Number.isNaN(ArrayDeN[1]) && Number.isNaN(ArrayDeN[2]) && Number.isNaN(ArrayDeN[3])) {
        alert("Por favor, digite um numeros...");
    } else if (VerificarSeTemIgualdadeNumerica(ArrayDeN)) {
        alert("Os numeros não devem repetir!")
    } else {
        let primeiro = ArrayDeN[ArrayDeN.length - ArrayDeN.length]; /* = 4 = index 0 */
        let ultimo = ArrayDeN[ArrayDeN.length - 1]; /* ArrayDeN[-1] - tambem funfa */
        let maior = ArrayDeN[0];
        for (let i = 0; i < ArrayDeN.length; i++) {
            if (ArrayDeN[i] > maior) {
                maior = ArrayDeN[i];
            }
        }
        alert(`o primeiro numero é ${primeiro}, o ultimo seria ${ultimo} e o maior só pode ser ${maior}. xD`)
    }

// Number.isNaN() não faz a conversão por que já está dizendo que é numero, na verdade isNaN() é uma função parecida ela converte em numero, enquanto Number.isNaN() é outra função por ser do Number.
// Extra - isNaN(Number("10")) tambem funciona, por que se o "10" não pode ser retornado como NaN para dentro do isNaN, ele vira necessariamente um numero oque traz um false no isNaN..