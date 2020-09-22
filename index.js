// Permite adicionar os valores no ecra

function calcNum(num) {
    if (typeof gvisor == 'undefined') {
        document.forma_calculadora.visor.value = ' ';
    }
    document.forma_calculadora.visor.value = document.forma_calculadora.visor.value + num;
    gvisor = 1;
}

// Esta funcao limpa os valores da calculadora 

function calcLimpar() {
    document.forma_calculadora.visor.value = ' ';
    delete gvalor;
    delete goper;
    delete gvisor;
}

// funcao que executa as aperacoes de soma, subtracao, multiplicacao e divisao

function calcOper(operador, valor1, valor2) {
    if (operador == "somar") {
        var valor = parseFloat(valor1) + parseFloat(valor2);
    } else {
        if (operador == "subtrair") {
            var valor = valor1 - valor2
        } else {
            if (operador == "multiplicacao") {
                var valor = valor1 * valor2;
            } else {
                var valor = valor1 / valor2
            }
        }
    }
    return (valor);
}

// funcao que permite a realizacao do processo visual e do calculo da operacao

function calcParse(operador) {
    var valor = document.forma_calculadora.visor.value;
    delete gvisor;

    if (typeof goper != 'undefined' && operador == 'resultado') {
        gvalor = calcOper(goper, gvalor, valor);
        document.forma_calculadora.visor.value = gvalor;
        delete operador;
        delete gvalor;
        return (0);
    }

    if (typeof gvalor != 'undefined') {
        gvalor = calcOper(goper, gvalor, valor);
        gvalor = valor;
        document.forma_calculadora.visor.value = gvalor;
    } else {
        gvalor = valor;
        goper = operador;
    }
}