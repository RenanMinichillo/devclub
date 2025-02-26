/*
    MAP
    - Cria um novo array, a partir do array percorrido (array original)
    - Cria um novo array, com a mesma quantidade de itens do array original
    - Aceita 3 parâmetros
        - item
        - index
        - array completo
*/

const myNumbers = [1, 2, 3, 4, 5, 6, 7]
console.log(myNumbers)

const doubleNumbers = myNumbers.map(item => item * 2) // Dobrando o valor do array original
console.log(doubleNumbers)