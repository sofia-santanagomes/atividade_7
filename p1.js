const nomePessoa1 = prompt("Digite nome da primeira pessoa");
const pesoPessoa1 = prompt("Digite peso da primeira pessoa");
const alturaPessoa1 = prompt("Digite altura da primeira pessoa");

const nomePessoa2 = prompt("Digite nome da segunda pessoa");
const pesoPessoa2 = prompt("Digite peso da segunda pessoa");
const alturaPessoa2 = prompt("Digite altura da segunda pessoa");

const imcPessoa1 = pesoPessoa1 / (alturaPessoa1 * alturaPessoa1);
const imcPessoa2 = pesoPessoa2 / (alturaPessoa2 * alturaPessoa2);

if (imcPessoa1 > imcPessoa2) {
  console.log(
    `O IMC de ${nomePessoa1} (${imcPessoa1}) é maior que o de ${nomePessoa2} (${imcPessoa2})`
  );
} else if (imcPessoa2 > imcPessoa1) {
  console.log(
    `O IMC de ${nomePessoa2} (${imcPessoa2}) é maior que o de ${nomePessoa1} (${imcPessoa1})`
  );
} else {
  console.log("IMC´s iguais");
}

