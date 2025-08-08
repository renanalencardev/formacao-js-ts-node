function nomeFunc(){
    return "Função normal"
}

console.log(nomeFunc()) // Função normal

const nomeFuncArrow = () => {
    return "Arrow function"
}

console.log(nomeFuncArrow()) // Arrow function

const nomeFuncArrowReturn = () => "Arrow function com retorno implícito";
console.log(nomeFuncArrowReturn()) // Arrow function com retorno implícito

// o hositing não funciona com arrow function
// console.log(nomeFuncArrowParams()) // ReferenceError: Cannot access 'nomeFuncArrowParams' before initialization
//console.log(nomeFuncArrowParams())
//const nomeFuncArrowParams = param => param;

// arrow function com parâmetros
const nomeFuncArrowParams2 = param1 => param1 + 2; // Arrow function com parâmetro
console.log(nomeFuncArrowParams2(2)) // 4

// Não pode ser invocada com o operador new
// const nomeFuncArrowNew = new nomeFuncArrowParams2() // TypeError: nomeFuncArrowParams is not a constructor
// console.log(nomeFuncArrowNew()) // TypeError: nomeFuncArrowParams is not a constructor

// Criando uma classe com uma função construtora
class newFunc {
    constructor(nome){
        this.nome = nome
    }
}
// instanciando a classe newFunc
const classeNome = new newFunc("Renan Alencar")
console.log(classeNome.nome) // Renan Alencar

// Contexto
// Arrow functions possuem this lexical, ou seja, o valor de this é determinado pelo contexto em que a função 
// foi definida, e não pelo contexto em que ela é chamada. Isso significa que o valor de this dentro de uma 
// arrow function é o mesmo que o valor de this fora dela.
// Isso é diferente das funções normais, onde o valor de this é determinado pelo contexto em que a função 
// é chamada. Isso pode levar a comportamentos inesperados se você não estiver ciente disso.
const lanches = {
    cardapio: [
        { nome: "Hamburguer", preco: "R$ 10" },
        { nome: "Batata frita", preco: "R$ 8" },
        { nome: "Refrigerante", preco: "R$ 15" }
    ],
    // O select é o índice do array cardapio, que está no contexto do objeto lanches
    // O this se refere ao objeto lanches, e o select é o índice do array cardapio
    meuPedidoFunc: function(select) {
        return console.log(this.cardapio[select]);
    },  
    // Neste caso (arrow funcion) o this não se refere mais ao objeto lanches, mas sim ao contexto 
    // em que a função foi chamada.  
    // Um erro é lançado porque o this não está definido no contexto da função.
    // Se o array cardapio estiver dentro do contexto da função meuPedidoArrowFunc, o this não se refere 
    // mais ao objeto lanches, mas sim ao contexto em que a função foi chamada.
    meuPedidoArrowFunc: (select) => {
        return console.log(this.cardapio[select]);
    }
}

lanches.meuPedidoFunc(2) // { nome: 'Refrigerante', preco: 'R$ 15' }
lanches.meuPedidoArrowFunc(2) // TypeError: Cannot read properties of undefined (reading 'cardapio')