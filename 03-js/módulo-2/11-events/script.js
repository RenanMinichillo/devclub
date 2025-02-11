const input = document.querySelector('#main-input')
const paragraphs = document.querySelectorAll('.paragraph-js')
const message = paragraphs[1]

function digiteiNoInput() {
    console.log(input.value)
}

function botaoClicado() {
    message.textContent = input.value
}