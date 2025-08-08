/*
    Precedência de operadores
    A precedência de operadores determina a ordem de avaliação de operadores em uma expressão.
    Operadores com maior precedência são avaliados primeiro.
    Operadores com a mesma precedência são avaliados da esquerda para a direita.
    A precedência de operadores em JavaScript segue a ordem matemática padrão.
    Precedência de operadores em JavaScript:
        1. Parênteses
        2. Incremento (++) e Decremento (--)
        3. Multiplicação (*), Divisão (/) e Resto da divisão (%)
        4. Adição (+) e Subtração
*/

console.log(2 + 3 * 4); // 14

// Parênteses têm a maior precedência, seguidos por multiplicação, divisão, resto da divisão, adição e subtração.
console.log((2 + 3) * 4); // 20
console.log(15 * (20 / 10)); // 30
console.log((15 * 10) / 10 === 15 && 10 * 10 === 14); // false 
console.log((15 * 10) / 10 === 15 || 10 * 10 === 14); // true


