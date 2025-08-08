/* 
    Escopo é o local onde uma variável pode ser acessada.
    Global: variável pode ser acessada em qualquer parte do código.
    Local: variável pode ser acessada apenas dentro do bloco onde foi declarada.
*/

// Declaramos uma variável 'nome' no escopo global com o valor "João"
let nome = "João";
// Imprimimos o valor da variável 'nome' global
console.log("Escopo global:")
console.log(nome);

// Criamos uma função que demonstra o escopo local
function minhaFuncao() {
    // Aqui declaramos outra variável 'nome' mas no escopo local da função
    // Esta variável é diferente da variável global, mesmo tendo o mesmo nome
    let nome = "Maria";
    console.log("Escopo local:")
    // Imprimimos o valor da variável 'nome' local
    console.log(nome);
}

// Chamamos a função para executar o código dentro dela
minhaFuncao();

