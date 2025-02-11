const changeButton = document.querySelector('button')

changeButton.addEventListener('click', () => {
    const divTexts = document.querySelectorAll('.item')

    divTexts.forEach(text => {
        text.textContent = 'Troquei seu texto'
    })
})