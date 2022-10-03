/* Calculando IMC dos Pacientes com Funções

  Dada a lista de pacientes, descubra o IMC de cada paciente e imprima
    "Paciente X possui o IMC: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC

*/

const patients = [
  {
    name: 'Luiz',
    age: 20,
    weight: 100,
    height: 190
  },
  {
    name: 'Pedro',
    age: 25,
    weight: 70,
    height: 166
  },
  {
    name: 'Helena',
    age: 18,
    weight: 55,
    height: 158
  }
]

function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2)
}

function printIMC(patient) {
  return `
    Paciente ${patient.name} possui o IMC de 
    ${IMC(patient.weight, patient.height)} 
  `
}

for (let patient of patients) {
  let IMCmessage = printIMC(patient)
  alert(IMCmessage)
}
