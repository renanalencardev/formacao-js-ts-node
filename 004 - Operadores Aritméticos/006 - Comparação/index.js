/* 
    Comparações
    Os operadores de comparação são usados para comparar dois valores.
    Eles retornam um valor booleano: true ou false.
    Operadores de comparação:
        Igual (==): Retorna true se os valores forem iguais.
        Diferente (!=): Retorna true se os valores não forem iguais.
        Estritamente igual (===): Retorna true se os valores e os tipos forem iguais.
        Estritamente diferente (!==): Retorna true se os valores e os tipos não forem iguais.
        Maior que (>): Retorna true se o valor da esquerda for maior que o valor da direita.
        Maior ou igual que (>=): Retorna true se o valor da esquerda for maior ou igual ao valor da direita.
        Menor que (<): Retorna true se o valor da esquerda for menor que o valor da direita.
        Menor ou igual que (<=): Retorna true se o valor da esquerda for menor ou igual ao valor da direita.
*/

// Igual (== - ===)
console.log(2 == 2); // true
console.log(2 == "2"); // true
console.log(2 === 2); // true 
console.log(2 === "2"); // false

// Diferente (!=)
console.log(2 != 2); // false
console.log(2 != "2"); // false
console.log(2 !== 2); // false
console.log(2 !== "2"); // true

// Maior que (>)
console.log(2 > 2); // false
console.log(2 > 1); // true

// Maior ou igual que (>=)
console.log(2 >= 2); // true
console.log(2 >= 3); // false

// Menor que (<)
console.log(2 < 2); // false
console.log(2 < 3); // true

// Menor ou igual que (<=)
console.log(2 <= 2); // true
console.log(2 <= 1); // false

