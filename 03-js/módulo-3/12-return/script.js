/*
    Functions

    Função void (vazia), não retorna nada.
    Função return, retorna um valor para quem chamou a função.

 */

function educado(value = 1, value2 = 2) {
    return value + value2
}

function naoEducado(value = 1, value2 = 2) {
    value + value2
}



console.log(educado(3, 20)) // Irá retornar o valor como possui o Return.
console.log(naoEducado(5,10)) // Irá retornar undefined pois não está retornando nada.