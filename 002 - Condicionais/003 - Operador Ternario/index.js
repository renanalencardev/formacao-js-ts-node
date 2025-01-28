/* 
    Operador ternário é uma forma concisa de escrever uma instrução if/else.
    Ele é composto por três partes:
    - Condição: a expressão que será avaliada.
    - Expressão1: o valor retornado se a condição for verdadeira.
    - Expressão2: o valor retornado se a condição for falsa.
*/

// Exemplo com idade
let idade = 18;
let resultado = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(resultado);

// Exemplo com número positivo ou negativo
let numero = 10;
let resultado2 = numero > 0 ? "Positivo" : "Negativo";
console.log(resultado2);

// Exemplo com número par ou ímpar
let numero2 = 10;
let resultado3 = numero2 % 2 === 0 ? "Par" : "Ímpar";
console.log(resultado3);