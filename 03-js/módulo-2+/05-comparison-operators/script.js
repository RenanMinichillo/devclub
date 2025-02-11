/*
    Operadores de Comparação

    ==      Igual → Compara o valor, mas não o tipo
    ===     Totalmente Igual → Compara o valor e o tipo

    !=      Diferente → Ele compara o valor, mas não o tipo
    !==     Totalmente Diferente → Compara o valor e o tipo

    >       Maior → 20 > 10 = true
    <       Menor → 20 < 30 = true

    >=      Maior ou Igual → 20 >= 21 = false
    <=      Menor ou Igual → 20 <= 21 = false

*/

const result = '21'
if (result == 20) {
    console.log('Eu sou igual o valor')
    // Só vai entrar se o result for igual 20
}
else if (result === '21') {
    console.log('Eu sou igual o valor e tipo')
    // Só vai entrar se o result for 21 do tipo string
}
else if (result != 20) {
    console.log('Eu sou diferente do valor')
    // Só vai entrar se o result for diferente de 20
}
else if (result !== '20') {
    console.log('Eu sou diferente do valor e tipo')
    // Só vai entrar se o result for diferente de 20 e tipo
}