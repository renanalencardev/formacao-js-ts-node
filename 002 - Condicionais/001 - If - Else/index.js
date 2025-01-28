/* 
    Condicionais são estruturas de controle que permitem executar diferentes blocos de código com base em certas condições.
    If: executa um bloco de código se uma condição for verdadeira.
    Else: executa um bloco de código se uma condição for falsa.
*/

let soma = 10;

if (soma > 0) {
    console.log("Soma é maior que 0");
} else {
    console.log("Soma é menor ou igual a 0");
}

// Exemplo com if/else aninhados
let nota = 75;

if (nota >= 90) {
    console.log("Nota A - Excelente!");
} else {
    if (nota >= 80) {
        console.log("Nota B - Muito bom!");
    } else {
        if (nota >= 70) {
            console.log("Nota C - Bom!");
        } else {
            if (nota >= 60) {
                console.log("Nota D - Regular!");
            } else {
                console.log("Nota F - Reprovado!");
            }
        }
    }
}

