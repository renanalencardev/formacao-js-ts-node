/*
    Preciso mostrar quantas letras repetidas aparecem uma string.
    Exemplo: "banana" -> {b: 1, a: 3, n: 2}
    Exemplo: "abacaxi" -> {a: 3, b: 1, c: 1, i: 1, x: 1}
*/

function contarLetrasRepetidas(palavra) {
    // Cria um objeto vazio para armazenar as letras e a quantidade de vezes que elas aparecem
    const letrasRepetidas = {};

    // Divide a palavra em um array de letras individuais
    // Exemplo: "casa" vira ["c", "a", "s", "a"]
    const letras = palavra.split("");

    // Percorre cada letra do array
    for (let letra of letras) {
        // Verifica se a letra já foi registrada no objeto 'letrasRepetidas'
        if (letrasRepetidas[letra]) {
            // Se já foi registrada, incrementa o contador dessa letra
            letrasRepetidas[letra]++;
        } else {
            // Se ainda não foi registrada, adiciona a letra ao objeto com o valor inicial 1
            letrasRepetidas[letra] = 1;
        }
    }

    // Retorna o objeto com as letras e suas respectivas quantidades
    return letrasRepetidas;
}
// Testando a função
const palavra1 = "banana";
const palavra2 = "abacaxi"; 
const resultado1 = contarLetrasRepetidas(palavra1);
const resultado2 = contarLetrasRepetidas(palavra2);
console.log(`Letras repetidas em "${palavra1}":`, resultado1);
console.log(`Letras repetidas em "${palavra2}":`, resultado2);