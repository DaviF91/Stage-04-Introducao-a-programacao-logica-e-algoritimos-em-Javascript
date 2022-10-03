/* Estruturando dados com objetos
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter:
    nome
    idade
    peso
    altura

  Esreva uma lista contendo o nome dos pacientes, suas idades, alturas e peso
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

let patientsNames = []

for (let patient of patients) {
  patientsNames.push(patient.name)
}

alert(`O nome dos pacientes são: ${patientsNames}.  

O paciente ${patients[0].name} tem ${patients[0].age} anos, pesa ${patients[0].weight}kg e sua altura é ${patients[0].height}cm.
O paciente ${patients[1].name} tem ${patients[1].age} anos, pesa ${patients[1].weight}kg e sua altura é ${patients[1].height}cm.
A paciente ${patients[2].name} tem ${patients[2].age} anos, pesa ${patients[2].weight}kg e sua altura é ${patients[2].height}cm.`)
