/*      CLASSES
    
    Diferente do objeto quando criamos, que temos a chance de errar na hora da criação,
    a classe ela é como se fosse uma forma de bolo, ela sempre irá criar no mesmo formato.
    Nela não utilizamos função, mas sim métodos.
*/

const person = {
    name: 'Renan',
    age: 28,
    talk: function () {
        console.log(`Olá, meu nome é ${person.name}, tenho ${person.age} anos.`)
    }
}
class Person {
    name;
    age;

    talk() {
        console.log(`Olá, meu nome é ${this.name}, tenho ${this.age} anos.`)
    };
}

const newPerson = new Person()

newPerson.name = 'Renan'
newPerson.age = 28
newPerson.talk()

class PersonTwo {
    constructor(name, age) {
        console.log(`Hello, my name is ${name} and my age ${age}`)

        this.name = name
        this.age = age
    }

    talk() {
        console.log(`Olá, meu nome é ${this.name}, tenho ${this.age} anos.`)
    };
}

const newPersonTwo = new PersonTwo('Renan', 28)