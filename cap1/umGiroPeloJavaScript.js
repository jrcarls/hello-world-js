x = 0; // Declaração de váriavel modo não estrito (sloppy mode) é meio que uma váivel global "solta"
console.log(x);

x = 1; // Número
console.log(x, typeof x);

x = 0.01; // Números podem ser inteiros ou reais
console.log(x, typeof x);

x = "Olá, Mundo!"; // também pode ser usado '' (Apóstrofos, mas é melhor usar aspas mesmo)
console.log(x, typeof x);

x = true;
console.log(x, typeof x);

x = false;
console.log(x, typeof x);

x = null; //null é valor especial, significa "nenhum valor" semelhante ao NULL do python
console.log(x, typeof x); // é do tipo object, porém sem nenhum valor

x = undefined; // é um valor especial assim como null
console.log(x, typeof x); // o tipo é undefined, não assume nenhum tipo real por padrão

console.log("==========");

// Tipo de dado mais importanten o JS é o object (objeto)
// Um objeto é uma coleção de  pares nome/valor ou string para mapa de valores

let book = {
  nome: "JavaScript: O Guia Definitivo",
  autor: "David Flanagan",
};

console.log(book);

console.log(book.nome); // Acessando o valor
console.log(book["autor"]); // Outra forma de acessar o valor do objeto

book.ano = 2025; // atribuição de nova propriedade (ano)
console.log(book.ano);

book.conteudo = {};
console.log(book.conteudo); // objeto vazio sem qualquer propriedade

console.log(book.conteudo?.pagina); //acessa condicionalmente propriedade com ?

console.log("==========");

let primos = [2, 3, 5, 7];

console.log(primos[0]); // pega o primeiro elemento
console.log(primos.length); // mostra quantidade de itens do array
console.log(primos[primos.length - 1]); // pega o ultimo valor da lista
console.log(primos[4]); // nenhum valor nesse indice

console.log((primos[4] = 4)); // adicionando novo valor na lista indice 4
console.log(primos); // lista completa
console.log((primos[4] = 11)); // alterando o valor pelo indice (4)
console.log(primos); // lista completa, valor corrigido

let vazio = [];
console.log(vazio.length); // array vazio
