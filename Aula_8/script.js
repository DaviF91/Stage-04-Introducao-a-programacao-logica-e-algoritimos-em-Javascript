/* 
  
** Jogo da advinhação **
  "Advinhe um número que estou pensando? Esta entre 0 e 10"

  Crie uma lógica para gerar um número aleatório e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

  Enquanto p usuário não advinhar o número, mostrar a mensagem: "Erro, tente novamente:"

  Caso o usuário acerte o número, apresentar a mensagem:
  "Parabéns! Você advinhou o número em x tentativas"

  Substitua o "x" da mensagem, pelo número de tentativas

*/

let result = prompt("Advinhe um número que estou pensando? Esta entre 0 e 10")
const randomNumber = Math.round(Math.random() * 10)
// const match = Number(result) == randomNumber

let xAttempts = 1;

while(Number(result) != randomNumber) {
  result = prompt("Erro, tente novamente: ")
  xAttempts++
}

if (xAttempts > 1) {
  alert(`Parabéns! O número que eu pensei foi ${randomNumber} e você advinhou em ${xAttempts} tentativas`)
} else {
  alert(`Parabéns! O número que eu pensei foi ${randomNumber} e você advinhou em ${xAttempts} tentativa`)
}