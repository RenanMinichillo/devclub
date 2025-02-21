/*
    Arrow Functions

    function padrão → function() {}
    arrow function → () => {}

    Não escrevemos 'function'.
    Além disso, usamos o sinal '=>' para cria-lá,
    o que lembra uma flecha, fazendo jus ao nome 'Arrow Functions'.
    Quando é apenas um parâmetro, por exemplo o name é opcional colocar ().

*/

function sayMyName(name) {
    return `Seu nome é ${name}`
}

const sayMyName2 = name => `Seu nome é ${name}`

console.log(sayMyName('Renan'))
console.log(sayMyName2('Bianca'))