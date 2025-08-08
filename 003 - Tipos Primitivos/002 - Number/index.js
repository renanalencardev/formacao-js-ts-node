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
console.log("123" + 1); // resultado: "1231"

// Subtração de string com número
console.log("123" - 1); // resultado: 122 (a string é convertida para número)

// Multiplicação de string com número
console.log("123" * 2); // resultado: 246 (a string é convertida para número)

// Divisão de string com número
console.log("123" / 2); // resultado: 61.5 (a string é convertida para número)

// Usando o método Number() para converter uma string em número
console.log(Number("123") + 1); // resultado: 124 (a string é convertida para número)

// Valor inválido para Number, retorna NaN
console.log(Number("123a") + 1); // resultado: NaN (Not a Number, pois a string não pode ser convertida para número)

console.log("******typeof******");

// typeof retorna o tipo de dado de uma variável
console.log(typeof 123); // number

// typeof retorna o tipo de dado de uma variável
console.log(typeof "123"); // string

// typeof retorna o tipo de dado de uma variável
console.log(typeof Number("123")); // number
