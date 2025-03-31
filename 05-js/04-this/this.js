/*  
    THIS

    "This" em inglês significa → este, esta, isto ...

    No JavaScript, o `this` faz referência a diferentes contextos dependendo de onde é usado:

    - **No Node.js** → module.exports
    - **No navegador (Web)** → window

    📌 **Escopo do this**:
    
        - **Global** → Quando usado no contexto global, `this` faz referência ao objeto global,
          que é o `window` no navegador ou `global` no Node.js.

        - **Local** → O `this` dentro de uma função depende de como a função é chamada!
*/

// Exemplo de uso do this dentro de um objeto
const person = {
    name: 'Renan',
    age: 28,
    talk: function () {
        console.log(this.name) // Faz referência à propriedade name do próprio objeto
    }
}

person.talk() // Saída: "Renan"

/*  
    📌 Exemplo do module.exports no Node.js

    No Node.js, ao invés de usar:
    
        module.exports = sum
        module.exports = { sum, multi }

    Podemos utilizar `this` dentro de um módulo para exportar funções:
*/

this.sum = (a, b) => a + b
this.multi = (a, b) => a * b

// No Node.js, `this` em um módulo se refere ao `module.exports`

/*
    📌 Exemplo de escopo local

    Dentro de uma função dentro de um objeto, o `this` se refere ao próprio objeto.
*/

const myObject = {
    name: 'Helio',
    age: 32,
    talk: function () {
        console.log(`Meu nome é ${this.name} e minha idade é ${this.age}`)
    }
}

myObject.talk() // Saída: "Meu nome é Helio e minha idade é 32"

