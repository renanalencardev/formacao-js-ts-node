/* 
    Hoisting é um comportamento do JavaScript onde variáveis e funções são movidas para o topo de seu escopo antes da execução do código. 
    Isso significa que você pode usar variáveis e funções antes de declará-las no código.

*/
let num1 = 2;
let num2 = 2;

console.log(soma(num1, num2)); // 4
// A função soma é declarada após sua chamada, mas ainda assim funciona devido ao hoisting
console.log(soma(2, 3)) // 5

var num3 = 3;
var num4 = 4;
console.log(soma(num3, num4)); // 7

function soma(num1, num2) {
    return num1 + num2
}

