const users = [
    {
        name: 'Barach',
        age: 32
    },
    {
        name: 'Risoldo',
        age: 22
    }
]

if (users[0].age > users[1].age) {
    console.log(`${users[0].name} é mais velho que ${users[1].name}, a diferença de idade é ${users[0].age - users[1].age} anos`)
} else {
    console.log(`${users[1].name} é mais velho que ${users[0].name}, a diferença de idade é ${users[1].age - users[0].age} anos`)
}