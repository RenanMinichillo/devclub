/*  VAR x LET x CONST

    Por que não é mais utilizado o VAR?
    → Antigamente era utilizado var para declarar as variáveis, porém devido a sua falta de segurança,
    ela é muito perigosa. Pois ela ignora o ESCOPO BLOCO, ou seja, você consegue acessar ela dentro de {}, loops e if.
    Porém se ela for declarada dentro de uma função ela será local.
    
    Por isso é altamente recomendável utilizar sempre LET ou CONST que respeitam esse escopo de bloco e evitam os comportamentos inesperados.

*/

// ESCOPO GLOBAL
var myVar = 'Hello'
let myLet = 'Olá'
const myConst = 'Hei'

if (true) {
    console.log(`Variáveis estão no Escopo GLOBAL e essa mensagem está dentro do IF ${myVar}`)
    console.log(`Variáveis estão no Escopo GLOBAL e essa mensagem está dentro do IF ${myLet}`)
    console.log(`Variáveis estão no Escopo GLOBAL e essa mensagem está dentro do IF ${myConst}`)
}

// ESCOPO BLOCO
if (true) {
    var myVar2 = 'Hello'
    let myLet2 = 'Olá'
    const myConst2 = 'Hei'
}

// console.log(`Variáveis estão no Escopo BLOCO e essa mensagem está fora do IF ${myVar2}`) Vai retornar erro pois está fora do IF
// console.log(`Variáveis estão no Escopo BLOCO e essa mensagem está fora do IF ${myLet2}`) Vai retornar erro pois está fora do IF
// console.log(`Variáveis estão no Escopo BLOCO e essa mensagem está fora do IF ${myConst2}`) Vai retornar erro pois está fora do IF

// DECLARAÇÂO DE VARIÁVEIS
myLet = 'Olá novamente!' // Será alterado
console.log(myLet)

//myConst = 'Hei taas' Não será alterado
console.log(myConst)

// ALTERNATIVA DE ALTERAR CONST
const myObject = { name: 'Renan', age: 31 }
myObject.name = 'Rodrigo'
myObject.age = 29
console.log(myObject)

const myArray = [31, 55, 77]
myArray[0] = 1
myArray[1] = 2
myArray[2] = 3
console.log(myArray)
