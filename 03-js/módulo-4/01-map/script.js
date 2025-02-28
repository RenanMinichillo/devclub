/*
    MAP
    - Cria um novo array, a partir do array percorrido (array original)
    - Cria um novo array, com a mesma quantidade de itens do array original
    - Aceita 3 parâmetros
        - item
        - index
        - array completo
*/

// Dobrar o valor do arrayOriginal
const myNumbers = [1, 2, 3, 4, 5, 6, 7]
console.log(myNumbers)

const doubleNumbers = myNumbers.map(item => item * 2) // Dobrando o valor do array original
console.log(doubleNumbers)

// Se for verdadeiro o bracelete é preto, se for falso é verde.
const list = [
    { name: 'Rodolfo', vip: true },
    { name: 'Maria', vip: false },
    { name: 'João', vip: true },
    { name: 'Bruno', vip: true },
    { name: 'Carla', vip: false },
    { name: 'Ana', vip: true },
    { name: 'Julio', vip: false },
]

const vips = list.map(index => {
    return {
        name: index.name,
        braceletColor: index.vip ? 'Black' : 'Green'
    }
})
console.log(vips)

//Se for acima de 5 o aluno está aprovado, se não ele foi reprovado
const students = [
    { name: 'Rodolfo', testGrade: 7 },
    { name: 'Maria', testGrade: 5 },
    { name: 'João', testGrade: 8 },
    { name: 'Bruno', testGrade: 9 },
    { name: 'Carla', testGrade: 3 },
    { name: 'Ana', testGrade: 2 },
    { name: 'Julio', testGrade: 10 },
]

const approvedStudents = students.map(index => {
    return {
        name: index.name,
        status: index.testGrade >= 5 ? 'Aprovado' : 'Reprovado'
    }
})
console.log(approvedStudents)