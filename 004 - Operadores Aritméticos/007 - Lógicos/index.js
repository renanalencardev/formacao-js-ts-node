/*
    Operadores Lógicos
    Os operadores lógicos são usados para determinar a lógica entre variáveis ou valores. 
    Eles retornam um valor booleano: true ou false.
    Operadores Lógicos:
        E (&&): Retorna true se ambos os valores forem verdadeiros.
        OU (||): Retorna true se um dos valores for verdadeiro.
        NÃO (!): Retorna true se o valor for falso e false se o valor for verdadeiro.
*/

// E (&&)
console.log(true && true); // true
console.log(1 === 1 && 2 === 2); // true
console.log(1 === 1 && 2 === 3); // false
console.log(1 === 1 && 2 >= 1); // true

// OU (||)
console.log(true || true); // true
console.log(1 === 1 || 2 === 2); // true
console.log(1 === 1 || 2 === 3); // true
console.log(1 === 2 || 2 === 3); // false

// NÃO (!)
console.log(!true); // false
console.log(!false); // true
console.log(!(1 === 1)); // false