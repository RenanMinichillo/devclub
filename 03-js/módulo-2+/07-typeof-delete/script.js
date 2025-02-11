/*
    Operadores Type of e Delete

    typeof → Tipo de dado
    delete

*/

const myObject = {
    name: 'Renan',
    age: 28,
    address: {
        street: 'Rua dos Inteligentes',
        number: 280,
        country: 'Brasil'
    }
}

console.log(`O tipo de dado é ${typeof myObject}`)
console.log(`O dado removido foi o país ${myObject.address.country}`)
delete myObject.address.country