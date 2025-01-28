/* 
    Falsy: valores que são considerados falsos em contextos booleanos.
    Truthy: valores que são considerados verdadeiros em contextos booleanos.
    
    Falsy: false, 0, "", null, undefined, NaN
    Truthy: true, 1, "João", [1, 2, 3], {nome: "João"}
*/

// Exemplo com string - valores não vazios são truthy
let nome = "João";
if (nome) {
    console.log("Nome é verdadeiro"); // Será executado pois nome contém um valor
} else {
    console.log("Nome é falso");
}

// Exemplo com número - zero é falsy, outros números são truthy
let numero = 0;
if (numero) {
    console.log("Número é verdadeiro");
} else {
    console.log("Número é falso"); // Será executado pois 0 é falsy
}

// Exemplo com array - arrays vazios ou não são truthy
let lista = [];
if (lista) {
    console.log("Lista é verdadeira"); // Será executado pois array é truthy
} else {
    console.log("Lista é falsa");
}

// Exemplo com null - null é falsy
let valorNulo = null;
if (valorNulo) {
    console.log("Valor é verdadeiro");
} else {
    console.log("Valor é falso"); // Será executado pois null é falsy
}

// Usando o operador de negação (!) para verificar se o valor é falsy
if(!valorNulo) {
    console.log("Valor é falso"); // Será executado pois null é falsy
}

// Exemplo com undefined - undefined é falsy
let valorIndefinido;
if (valorIndefinido) {
    console.log("Valor é verdadeiro");
} else {
    console.log("Valor é falso"); // Será executado pois undefined é falsy
}