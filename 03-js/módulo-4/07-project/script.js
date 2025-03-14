const btnForEach = document.querySelector('.btn-foreach')
const btnMap = document.querySelector('.btn-map')
const btnFilter = document.querySelector('.btn-filter')
const btnReduce = document.querySelector('.btn-reduce')
const listItem = document.querySelector('.list-item')

btnForEach.addEventListener('click', () => showItems(menuOptions))
btnMap.addEventListener('click', applyDiscount)
btnFilter.addEventListener('click', filterSnack)
btnReduce.addEventListener('click', calculateTotal)

function showItems(items = menuOptions) {
    listItem.innerHTML = ''
    items.forEach((item) => {
        const article = document.createElement('article')
        const figure = document.createElement('figure')
        const img = document.createElement('img')
        img.src = item.src
        const figCaption = document.createElement('figcaption')
        figCaption.textContent = item.name
        const p = document.createElement('p')
        p.textContent = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(item.price)

        listItem.appendChild(article)
        article.appendChild(figure)
        article.appendChild(img)
        article.appendChild(figCaption)
        article.appendChild(p)
    })
}

function applyDiscount() {
    menuOptions.map(item => item.price *= 0.9)
    showItems()
}

function filterSnack() {
    const veganSnacks = menuOptions.filter(item => item.vegan)
    showItems(veganSnacks)
}

function calculateTotal() {
    menuOptions.reduce((acc, total) => {
        console.log(acc = acc + total.price)
    }, 0)
}