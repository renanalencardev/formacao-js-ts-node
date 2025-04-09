/*
    O que é uma função?
    Uma função é um bloco de código que pode ser chamado em qualquer lugar do programa.
    Uma função pode receber parâmetros e retornar um valor.
    Executa uma tarefa ou calcula um valor.
    Uma função é definida usando a palavra-chave function, seguida pelo nome da função e parênteses.

*/

// 1- Functions declaration
function isValidDeclaration() {
    console.log("Function declaration")
    const soma = 2 + 2;
    if (soma === 3) {
        return true;
    }
    return false;
}
console.log(isValidDeclaration()) // 3

// 2- Function expression
const isValidExpression = function () {
    console.log("Funcion expression") 
    const soma = 2 + 2;
    if (soma === 3) {
        return true;
    }
    return false;
}
console.log(isValidExpression()) 

// 3- Arrow function
// Arrow function é uma forma mais concisa de escrever funções em JavaScript.
const isValidArrow = () => 2 * 2;
const isValidArrow2 = () => {
    console.log("Arrow function")
    const soma = 2 + 2;
    if (soma === 3) {
        return true;
    }
    return false;
}
console.log(isValidArrow()) // 4
console.log(isValidArrow2()) // false