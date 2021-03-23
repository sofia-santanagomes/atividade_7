const tamanho = prompt("Insira tamanho do Array:");
const palavras = [];

for (let i = 0; i <= tamanho; i++) {
  const element = prompt("Insira uma palavra:");
  palavras.push(element);
}

console.log(palavras);
console.log(palavras.reverse());


