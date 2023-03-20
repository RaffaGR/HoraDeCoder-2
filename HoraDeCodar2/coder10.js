var s = parseInt(prompt("Digite; \n1: Feminino \n2: Masculino"));
var h = prompt("Informe a altura.(Exemplo: 1.70 = 1 Metro e 70 cm)ou então(170)");

/* Altera alguns caracteres da String */
var altura = h.toString().replace(",", ".");

var altura = parseFloat(altura);
console.log(altura)

/* Verifica se tem caractere */
if (!altura.toString().includes(".")) { // se não tiver o ponto, divida por 100
    altura = altura / 100;
    switch (s) {
        case 1:
            let pM = 62.1 * h - 44.7;
            alert(`O peso ideal para uma mulher de altura ${altura} é: ${pM.toFixed(2)} kg`);
            break;
        case 2:
            let pH = 72.7 * h - 58;
            alert(`O peso ideal para um homem de altura ${altura} é: ${pH.toFixed(2)} kg`);
            break;
        default:
            alert("Por favor, digite um valor válido...");
            break;
    }
} else {
    switch (s) {
        case 1:
            let pM = 62.1 * altura - 44.7;
            alert(`O peso ideal para uma mulher de altura ${altura} é: ${pM.toFixed(2)} kg`);
            break;
        case 2:
            let pH = 72.7 * altura - 58;
            alert(`O peso ideal para um homem de altura ${altura} é: ${pH.toFixed(2)} kg`);
            break;
        default:
            alert("Por favor, digite um valor válido...");
            break;
    }
}