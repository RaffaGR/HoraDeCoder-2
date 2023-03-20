function mediaA() {
    var numero1 = parseFloat(prompt("Insira os pontos do bairro A."));
    var numero2 = parseFloat(prompt("Insira os pontos do bairro B."));
    var numero3 = parseFloat(prompt("Insira os pontos do bairro C."));
    var numero4 = parseFloat(prompt("Insira os pontos do bairro E."));
    var numero5 = parseFloat(prompt("Insira os pontos do bairro F."));
    var numero6 = parseFloat(prompt("Insira os pontos do bairro G."));

    var mA = (numero1 + numero2 + numero3 + numero4 + numero5 + numero6) / 6
    if (isNaN(mA)) {
        alert("'Por favor, digite um numero...'");
        mediaA()
    } else {
        document.write(`A média aritmética da cidade é ${mA}`);
    }
}

mediaA(); /* Ele stopa(para) o código e busca a function para finalmente abrir e executar ela */