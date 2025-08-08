/*
    IIFE - Immediately Invoked Function Expression
    Uma função que é invocada imediatamente após ser definida.

*/

// IIFE com parâmetros
(function(num1, num2) {
    const calc = num1 + num2;
    console.log("IIFE com parâmetros")
    console.log(calc) // 3
}(1,2));

// IIFE com arrow function
(() => {
    var teste = "IIFE com arrow function"
    console.log(teste) // IIFE com arrow function
})();

// IIFE com parâmetros e arrow function
((nome) => {
    console.log("IIFE com parâmetros e arrow function")
    console.log(nome)
})("Renan Alencar") // Renan Alencar;


const testeWilliam = () => {
    console.log("Teste William")
}

