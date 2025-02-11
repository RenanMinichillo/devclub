/*
    Operadores Lógicos

    && → E → PESSOA EXIGENTE
        true && true    → TRUE
        true && false   → FALSE
        false && false  → FALSE

    || → OU → TANTO FAZ
        true && true    → TRUE
        true && false   → TRUE
        false && false  → FALSE

    ! → NEGAÇÃO
        !true → FALSE
        !false → TRUE

*/

const numeroDaConta = true
const senhaDaConta = true
const tokenDaConta = true

if (numeroDaConta && senhaDaConta && tokenDaConta) { // Se todas validações são TRUE
    console.log('Autenticação com Sucesso - Logado!')
} else {
    console.log('Autenticação Falhou - Não foi possível acessar a conta.')
}

if (numeroDaConta || senhaDaConta || tokenDaConta) { // Se pelo menos uma validação é TRUE
    console.log('Autenticação com Sucesso - Logado!')
} else {
    console.log('Autenticação Falhou - Não foi possível acessar a conta.')
}

if (!(numeroDaConta && senhaDaConta && tokenDaConta)) { // Invertendo o TRUE > FALSE
    console.log('Autenticação com Sucesso - Logado!')
} else {
    console.log('Autenticação Falhou - Não foi possível acessar a conta.')
}