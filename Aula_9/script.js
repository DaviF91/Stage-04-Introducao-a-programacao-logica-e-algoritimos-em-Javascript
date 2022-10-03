// Interagindo com um menu de opções - part 1

/*
  Faça um programa que tenha um menu e apresente a seguinte mensagem:

  Olá usuário! Digite o número com a opção desejada
    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa.

  ___
  O programa deverá capturar o número digitado pelo usuário e mostrar os seguintes cenários:
    Caso o usuário digite 1, ele poderá cadastrar uim item em uma lista
    Caso o usuário digite 2, ele poderá ver os itens cadastrados
      Se não houver nenhum item cadstrado, mostrar a mensagem:
        "Não existem itens cadastrados"
    Caso o usuário digite 3, a aplicação deverá ser encerrada.

*/

let option
let items = []

while (option != 3) {
  option = Number(
    prompt(`
    Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa.
  `)
  )

  if (option == 1) {
    let item = prompt('Digite o nome do item')
    items.push(item)
  } else if (option == 2) {
    if (items.length == 0) {
      alert('Não existem itens cadastrados')
    } else {
      alert(items)
    }
  } else {
    alert('Finalizado')
  }
}