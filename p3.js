const login = prompt("Insira o login");
const senha = prompt("Insira a senha");

if (
  (login === "aluno" && parseInt(senha) === 123) ||
  (login === "professor" && parseInt(senha) === 456)
) {
  alert("Login efetuado com sucesso!!");
} else {
  alert("Login não efetuado, verefique seus dados!!");
}
