/*
    Arguments - Arguments são os valores passados para uma função quando ela é chamada.
    Eles podem ser acessados dentro da função usando o objeto arguments.
    O objeto arguments é uma lista semelhante a um array que contém todos os argumentos passados para a função.

*/
// 1- Arguments
function soma(num1, num2) {
    console.log("Arguments: " + arguments) // [Arguments] { '0': 2, '1': 3 }
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "Os parâmetros devem ser números"
    }
    return num1 + num2
    
}
console.log(soma(true, 3)) // Os parâmetros devem ser números

console.log(soma(2, soma(5,1))) // 8

// arguments é um objeto semelhante a um array que contém todos os argumentos passados para a função.
// Ele é acessível dentro da função e pode ser usado para manipular os argumentos passados.
function argumentos(){
    return arguments;
}

console.log(argumentos(2, 3, 4, 5)) // [Arguments] { '0': 2, '1': 3, '2': 4, '3': 5 }
console.log(argumentos()) // [Arguments] { }