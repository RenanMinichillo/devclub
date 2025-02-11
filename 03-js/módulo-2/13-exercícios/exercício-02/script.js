const links = document.getElementsByTagName('a')

Array.from(links).forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault()
        alert(link.textContent)
    })
})