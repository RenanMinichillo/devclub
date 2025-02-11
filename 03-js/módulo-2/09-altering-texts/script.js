const element = document.querySelector('.paragraph-js')

console.log(element.textContent)
element.textContent = 'Alterando o parágrafo com textContent - Somente HTML'
// HTML -> Quando você precisa pegar ou definir apenas o texto puro, sem se preocupar com a estrutura HTML.

console.log(element.innerText)
// HTML + CSS -> Quando você quer apenas o texto visível na página, respeitando estilos como display: none.
element.innerText = 'Alterando o parágrafo com innerText - Respeitando as estilizações'

console.log(element.innerHTML)
element.innerHTML = `Esse é um novo parágrafo <span style="color:red";>vermelho</span> agora`
// Tudo -> Quando você precisa manipular HTML, seja para pegar ou modificar o conteúdo de um elemento.