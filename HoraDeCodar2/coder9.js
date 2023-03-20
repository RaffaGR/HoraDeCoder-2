var anoNascimento = prompt("Qual é o seu ano de nascimento?(Apenas o ano)");

/* instancia um objeto dentro da variavel enquanto pega um valor dela(ano) e subtrai pela data de nascimento */
var idade = new Date().getFullYear() - anoNascimento; // consegui subtrair sem usar parse no prompt O.O, então ta né kk

if (anoNascimento.length > 4) {
    alert("Tem algo errado, tente novamente");
} else if (idade <= 18) {
    alert(`Como a sua idade é: ${idade}\nVoce não podera votar!`);
} else {
    alert(`Como a sua idade é: ${idade}\nVoce terá que votar.`);
}