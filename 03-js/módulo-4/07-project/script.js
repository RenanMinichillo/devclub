const btnForEach = document.querySelector('#btn-foreach')
const btnMap = document.querySelector('#btn-map')
const btnFilter = document.querySelector('#btn-filter')
const btnReduce = document.querySelector('#btn-reduce')
const myList = document.querySelector('.list-item')

function formatValue(value) {
    const formated = new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL'
    }).format(value)
    return formated
}

function showItems(items = menuOptions) {
    myList.innerHTML = ''

    items.forEach(product => {
        myList.innerHTML +=
            `
        <article>
            <figure>
                <img src=${product.src}>
                <figcaption>${product.name}</figcaption>
                <p>${formatValue(product.price)}</p>
            </figure>
        </article>
`
    })
}

function applyDiscount() {
    menuOptions.map(product => product.price *= 0.9)
    showItems()
}

function filterSnacks() {
    const veganSnacks = menuOptions.filter(product => product.vegan)
    showItems(veganSnacks)
}

function sumTotal() {
    const total = menuOptions.reduce((acc, product) => acc + product.price, 0)

    myList.innerHTML =
        `
        <article>
            <figure>
                <figcaption>
                A somatória de todos 
                <br>
                os lanches é <p>${formatValue(total)}</p>
                </figcaption>
            </figure>
        </article>
        `
}

btnForEach.addEventListener('click', () => showItems(items = menuOptions))
btnMap.addEventListener('click', applyDiscount)
btnFilter.addEventListener('click', filterSnacks)
btnReduce.addEventListener('click', sumTotal)