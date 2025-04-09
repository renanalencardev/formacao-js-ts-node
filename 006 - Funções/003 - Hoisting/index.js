/* 
    Hoisting é um comportamento do JavaScript onde variáveis e funções são movidas para o topo de seu escopo antes da execução do código. 
    Isso significa que você pode usar variáveis e funções antes de declará-las no código.

*/

console.log(soma(2, 3)) // 5

function soma(num1, num2) {
    return num1 + num2
}

//testei com var e não funcionou 