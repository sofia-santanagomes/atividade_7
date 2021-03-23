const nome = prompt("Insira seu nome");
const peso = prompt("Insira seu peso");
const altura = prompt("Insira sua altura");

const imc = peso / (altura * altura);

if (imc < 17) {
  console.log("Extremamente a baixo do peso");
} else if (imc >= 17 && imc <= 18.5) {
  console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc < 25) {
  console.log("Peso normal");
} else if (imc >= 25 && imc < 30) {
  console.log("Acima do peso");
} else if (imc >= 30 && imc < 35) {
  console.log("Muito acima do peso");
} else if (imc >= 35 && imc < 40) {
  console.log("Obeso");
} else {
  console.log("Muito obeso");
}