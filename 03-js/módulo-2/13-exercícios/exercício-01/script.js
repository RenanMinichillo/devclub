const btnText = document.getElementById('change-button')

btnText.addEventListener('click', () => {
    const text = document.getElementById('paragraph')

    text.textContent = 'Olá mundo!'
})