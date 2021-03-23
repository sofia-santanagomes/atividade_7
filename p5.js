const nome = prompt("Insira seu nome");
const idade = prompt("Insira sua idade");

calculaTempo(idade);

function calculaTempo(idade) {
  if (idade < 65) {
    return console.log("Sua aposentadoria está indisponivel!");
  } else {
    return console.log("Aposentado com sucesso!");
  }
}