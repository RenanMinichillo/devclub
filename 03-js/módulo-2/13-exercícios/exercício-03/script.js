const changeButton = document.querySelector('button')

changeButton.addEventListener('click', () => {
    const newText = document.querySelector('p')

    newText.textContent = 'Olá mundo novamente!'
})