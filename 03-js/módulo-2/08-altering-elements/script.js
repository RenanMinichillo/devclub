const element = document.querySelector('#main-input')
element.placeholder = 'Insira o valor' // Alterando o atributo placeholder
element.value = '1234' // Alterando o atributo value

console.log(element.placeholder)
console.log(element.value)

const image = document.querySelector('img')
image.src = './foto2.jpg' // Alterando o atributo de origem / caminho
image.alt = 'Imagem do Renan' // Alterando o atributo de texto alternativo

console.log(image.src)
console.log(image.alt)