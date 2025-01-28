/* 
    Object é um tipo de dado que representa uma coleção de dados.
    Pode ser representado por um objeto literal ou por um objeto criado com o construtor Object.
*/

// Criamos um objeto chamado 'aluno' usando a notação literal de objeto {}
let aluno = {
    nome: "João",      // Propriedade que armazena uma string com o nome do aluno
    idade: 20,         // Propriedade que armazena um número com a idade
    notas: [10, 9, 8, 7, 6],  // Array que armazena as notas do aluno
    aprovado: true,    // Propriedade booleana que indica se o aluno está aprovado
    endereco: {        // Objeto aninhado com informações de endereço
        rua: "Rua de Teste",
        bairro: "Bairro de teste",
        cep: 5554443
    }
};

// Imprime o objeto aluno completo no console
console.log(aluno);

// Cria e imprime um array contendo dois objetos de alunos
console.log([
    // Primeiro objeto do array (aluno1)
    aluno1 = {
        // Estrutura similar ao objeto anterior
        nome: "Aluno 1",
        idade: 20,
        notas: [10, 9, 8, 7, 6],
        aprovado: true,
        endereco: {
            rua: "Rua de Teste",
            bairro: "Bairro de teste",
            cep: 5554443
        }
    },
    // Segundo objeto do array (aluno2)
    aluno2 = {
        // Mesma estrutura, apenas com nome diferente
        nome: "Aluno 2",
        idade: 20,
        notas: [10, 9, 8, 7, 6],
        aprovado: true,
        endereco: {
            rua: "Rua de Teste",
            bairro: "Bairro de teste",
            cep: 5554443
        }
    }
])