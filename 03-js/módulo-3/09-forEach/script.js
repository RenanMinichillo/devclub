/*
    forEach(item, index, array)

*/

const users = [
    { name: 'Adriana', age: 32, number: '(11) 93255-0011' },
    { name: 'Bruno', age: 27, number: '(11) 93200-4033' },
    { name: 'Carla', age: 55, number: '(11) 97744-6011' }
]

users.forEach((item, index, array) => {
    const myUsers = `Item: ${index + 1}) Nome: ${item.name}, Idade: ${item.age}, Contato: ${item.number}`
    console.log(myUsers)
})