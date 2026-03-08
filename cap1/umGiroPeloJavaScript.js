x = 0; // Declaração de váriavel modo não estrito (sloppy mode) é meio que uma váivel global "solta"
console.log(x);

x = 1; // Número
console.log(typeof x);

x = 0.01; // Números podem ser inteiros ou reais
console.log(typeof x);

x = "Olá, Mundo!"; // também pode ser usado '' (Apóstrofos, mas é melhor usar aspas mesmo)
console.log(typeof x);

x = true;
console.log(typeof x);

x = false;
console.log(typeof x);

x = null; //null é valor especial, significa "nenhum valor" semelhante ao NULL do python
console.log(typeof x); // é do tipo object, porém sem nenhum valor

x = undefined; // é um valor especial assim como null
console.log(typeof x); // o tipo é undefined, não assume nenhum tipo real por padrão

console.log("==========");

// Tipo de dado mais importanten o JS é o object (objeto)
// Um objeto é uma coleção de  pares nome/valor ou string para mapa de valores

let book = {
  nome: "JavaScript: O Guia Definitivo",
  autor: "David Flanagan",
};

console.log(book.nome);
