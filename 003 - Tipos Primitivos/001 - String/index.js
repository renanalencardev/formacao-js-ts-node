/* 
    String é um tipo de dado que representa uma sequência de caracteres.
    Pode ser representada por uma string literal ou por uma string criada com o construtor String.
*/

// String literal
let nome = "Olá, mundo!";
console.log(nome);

// String criada com o construtor String
let nome2 = new String("João");
console.log(nome2);

/* Como podemos escrever uma string?
    - Usando aspas simples
    - Usando aspas duplas
    - Usando template literals (criadas com crases)
*/

// Usando aspas simples
let nome3 = 'Aspas Simples';
console.log(nome3);

// Usando aspas duplas
let nome4 = "Aspas Duplas";
console.log(nome4);

// Usando template literals
let nome5 = `Template Literal`;
console.log(nome5);

// Usando template literals com variáveis
let nome6 = `Olá, ${nome5}!`;
console.log(nome6);

// Usando o método String() para converter um número em string
console.log(String(123));