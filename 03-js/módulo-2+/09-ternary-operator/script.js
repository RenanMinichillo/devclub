/*
    Operadores Ternário

    ? → IF > (SE)
    : → ELSE (SE NÃO)

*/

const salario = 15000

// IF & ELSE & ELSE IF - Quando o código precisa de mais de uma linha
if (salario < 3000) {
    console.log('O colaborador é Júnior')
} 
else if (salario >= 3000 && salario <= 10000) {
    console.log('O colaborador é Sênior')
}
else {
    console.log('O colaborador é Diretor')
}

// IF & ELSE - Quando o código apenas é uma linha

// IF
salario < 3000 && console.log('O colaborador é Júnior')

// IF & ELSE
salario < 3000 ? console.log('O colaborador é Júnior') : console.log('O colaborador é Sênior')

// ELSE IF
salario < 3000 ? console.log('O colaborador é Júnior') : (salario >= 3000 && salario <= 10000) ? console.log('O colaborador é Diretor') : console.log('O colaborador é Diretor')