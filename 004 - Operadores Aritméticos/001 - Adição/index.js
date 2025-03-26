/*
    Os operadores aritméticos em JavaScript são usados para realizar operações matemáticas básicas. 
    Operadores Aritméticos Básicos:
        Adição (+): Soma dois valores.
        Subtração (-): Subtrai um valor de outro.
        Multiplicação (*): Multiplica dois valores.
        Divisão (/): Divide um valor por outro.
        Resto da divisão (%): Retorna o resto de uma divisão.
        Exponenciação (**): Eleva um número a uma potência
 */

// Adição
console.log(2 + 2); // 4
console.log(25 + 50); // 75

//Concatenação
console.log("Renan" + " " + "Alencar"); // Renan Alencar
console.log("Renan" + "Alencar"); // RenanAlencar
console.log("Nome:" + "Renan Alencar" + ", Idade: " + 31 + 1); // Nome:Renan Alencar, Idade: 311
// Expressão dentro de parênteses é resolvida primeiro, não concatenando o número 1
console.log("Nome:" + "Renan Alencar" + ", Idade: " + (31 + 1)); // Nome:Renan Alencar, Idade: 32
