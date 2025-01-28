/* 
    Number é um tipo de dado que representa um número.
    Pode ser representado por um número literal ou por um número criado com o construtor Number.
*/

// Number literal
let numero = 10;
console.log(numero);

// Number criado com o construtor Number
let numero2 = new Number(10);
console.log(numero2);

// Concatenação de string com número
console.log("123" + 1);

// Subtração de string com número
console.log("123" - 1);

// Multiplicação de string com número
console.log("123" * 2);

// Divisão de string com número
console.log("123" / 2);

// Usando o método Number() para converter uma string em número
console.log(Number("123") + 1);

// Valor inválido para Number, retorna NaN
console.log(Number("123a") + 1);

console.log("******typeof******");

// typeof retorna o tipo de dado de uma variável
console.log(typeof 123);

// typeof retorna o tipo de dado de uma variável
console.log(typeof "123");

// typeof retorna o tipo de dado de uma variável
console.log(typeof Number("123"));
