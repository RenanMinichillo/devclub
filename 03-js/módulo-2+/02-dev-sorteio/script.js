const drawButton = document.querySelector('.draw-button')
const minNumber = document.querySelector('.input-min')
const maxNumber = document.querySelector('.input-max')

function formatInput(event) {
    event.target.value = event.target.value.replace(/[^0-9]/g, '');
}

drawButton.addEventListener('click', () => {

    const minValue = parseFloat(minNumber.value)
    const maxValue = parseFloat(maxNumber.value)
    const result = document.querySelector('.draw-number')

    if (isNaN(minValue) && isNaN(maxValue)) {
        alert(`Insira o valor mínimo e máximo.`)
    }
    else if (minValue >= maxValue) {
        alert(`O valor mínimo não pode ser maior que o valor máximo.`)
    }
    else {
        result.textContent = `Número sorteado é ${Math.floor((Math.random() * (Math.ceil(minValue + maxValue)) + 1))}`
    }
})

minNumber.addEventListener('input', formatInput)
maxNumber.addEventListener('input', formatInput)