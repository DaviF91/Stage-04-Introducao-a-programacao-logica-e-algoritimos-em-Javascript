/* Aula 4 - Operaçoes Matemáticas

  Capturar 2 números e fazer as operações matemáticas de soma, subtração, multiplicação, divisão e resto da divisão.
  
  E para cada operação mostrar um alerta com o resultado.
*/

let firstNumber = prompt('Digite o primeiro número')
let secondNumber = prompt('Digite o segundo número')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert('O resultado da soma é: ' + sum)
alert('O resultado da subtração é: ' + sub)
alert('O resultado da multiplicação é: ' + multi)
alert('O resultado da divisão é: ' + div)
alert('O resultado do resto da divisão é: ' + restDiv)
