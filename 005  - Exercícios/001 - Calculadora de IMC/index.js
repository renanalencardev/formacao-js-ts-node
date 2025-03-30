// Questão: Crie uma função chamada `calcularIMC` que receba dois parâmetros: peso (em kg) e altura (em metros). 
// A função deve calcular e retornar o Índice de Massa Corporal (IMC) com base na fórmula: IMC = peso / (altura * altura).
// Além disso, crie uma função adicional chamada `classificarIMC` que receba o valor do IMC e retorne uma string indicando a classificação:
// - "Abaixo do peso" para IMC < 18.5
// - "Peso normal" para IMC entre 18.5 e 24.9
// - "Sobrepeso" para IMC entre 25 e 29.9
// - "Obesidade grau 1" para IMC entre 30 e 34.9
// - "Obesidade grau 2" para IMC entre 35 e 39.9
// - "Obesidade grau 3" para IMC >= 40

let peso = 124; // Peso em kg
let altura = 1.68;
let imc = calcularIMC(peso, altura);
console.log("Seu IMC é: " + imc);
console.log("Classificação: " + classificarIMC(imc));

// Funções para calcular o IMC e classificar o resultado
function calcularIMC(peso, altura) {
    return Number((peso / (altura * altura)).toFixed(2)); // Arredondando para duas casas decimais e convertendo para número
}

function classificarIMC(imc) {
    switch (true) {
        case imc < 18.5:
            return "Abaixo do peso";
        case imc >= 18.5 && imc <= 24.9:
            return "Peso normal";
        case imc >= 25 && imc <= 29.9:
            return "Sobrepeso";
        case imc >= 30 && imc <= 34.9:
            return "Obesidade grau 1";
        case imc >= 35 && imc <= 39.9:
            return "Obesidade grau 2";
        default:
            return "Obesidade grau 3";
    }
}