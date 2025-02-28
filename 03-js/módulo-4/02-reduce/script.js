/*
    REDUCE
    - Retorna um valor (pode ser um novo array, um objeto, string, number, etc...)
    - Aceita 4 parâmetros
        - acumulador
        - item (valor atual)
        - index (posição)
        - array completo (array Original)
    
 */

const list = [1, 2, 3, 4, 5]

const newList = list.reduce((acumulador, item) => acumulador + item, 0)
console.log(newList)

const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 }
]

const marketValue = companies.reduce((marketValue, item) => marketValue + item.marketValue, 0)
console.log(marketValue)

const cart = [
    { productName: 'Abóbora', pricePerKg: 5, kg: 1 },
    { productName: 'Pepino', pricePerKg: 3.55, kg: 1.3 },
    { productName: 'Limão', pricePerKg: 1.2, kg: 2 },
    { productName: 'Abacate', pricePerKg: 5.4, kg: 1.67 },
    { productName: 'Morango', pricePerKg: 11.9, kg: 3 }
]

const priceTotal = cart.reduce((total, price) => total + (price.pricePerKg * price.kg), 0)
console.log(priceTotal.toFixed(2))