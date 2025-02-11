const input = document.querySelector('#main-input')
const select = document.querySelector('select')
const button = document.querySelector('.main-button')

function troqueiValor(event) {
    console.log(event)
}

select.addEventListener('change', troqueiValor)