/* 
    O comando switch é uma estrutura de controle que permite executar diferentes blocos de código com base no valor de uma expressão.
    Ele é composto por vários casos (case) que são comparados com o valor da expressão.
    Se o valor da expressão corresponder a um dos casos, o bloco de código associado a esse caso será executado.
    O comando switch é uma alternativa mais legível e fácil de entender do que uma série de instruções if/else if/else.
*/

// Declaramos uma variável 'mes' com o valor 1
let mes = 1;

// Iniciamos a estrutura switch que vai avaliar o valor da variável 'mes'
switch (mes) {
    // Cada 'case' representa um mês do ano
    case 1: // Se mes for igual a 1
        console.log("Janeiro"); // Imprime "Janeiro"
        break; // Break é necessário para sair do switch após executar o código
    case 2: // Se mes for igual a 2
        console.log("Fevereiro"); 
        break;
    case 3: // Se mes for igual a 3
        console.log("Março");
        break;
    case 4: // Se mes for igual a 4
        console.log("Abril");
        break;
    case 5: // Se mes for igual a 5
        console.log("Maio");
        break;
    case 6: // Se mes for igual a 6
        console.log("Junho");
        break;
    case 7: // Se mes for igual a 7
        console.log("Julho");
        break;
    case 8: // Se mes for igual a 8
        console.log("Agosto");
        break;
    case 9: // Se mes for igual a 9
        console.log("Setembro");
        break;
    case 10: // Se mes for igual a 10
        console.log("Outubro");
        break;
    case 11: // Se mes for igual a 11
        console.log("Novembro");
        break;
    case 12: // Se mes for igual a 12
        console.log("Dezembro");
        break;
    default: // Se mes não corresponder a nenhum dos casos acima
        console.log("Mês inválido"); // Imprime mensagem de erro
}