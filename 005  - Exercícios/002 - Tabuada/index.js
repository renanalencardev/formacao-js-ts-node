let num1 = 5;
let num2 = 10;
let resultado = multiplicar(num1, num2);

imprimirResultado(resultado);

function multiplicar (num1, num2) {
    return num1 * num2
}

function imprimirResultado(resultado){
    console.log(resultado)
}

let multiplicador = 150;
tabuada(multiplicador); //resultado: 150 x 1 = 150, 150 x 2 = 300, ..., 150 x 10 = 1500
// Função para calcular e imprimir a tabuada
function tabuada(multiplicador) {
    // Loop para calcular e imprimir a tabuada
    for (let i = 1; i <= 10; i++) {
        let resultado = multiplicador * i;
        console.log(`${multiplicador} x ${i} = ${resultado}`);
    }
}