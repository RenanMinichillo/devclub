/*  Calcular Desconto:

    Todos os produtos acima de R$30,00 tem um desconto de 10%.
*/

const cart = [10, 244, 99, 2, 20, 33, 250];
let discount = 0
let total = 0

// for (const value of cart) {
//     if (value > 30) {
//         discount = discount + calcularDesconto(value, 10)
//         total += value
//     } else {
//         total += value
//     }
// }

cart.forEach(value => {
    total += value
    value > 30 ? discount += calcularDesconto(value, 10) : total
})

console.log(`O valor total de suas compras é R$ ${total}, Você teve compras acima de R$ 30,00 e recebeu um desconto de R$ ${discount.toFixed(2)}. 
    Então o valor a pagar é R$ ${(total - discount).toFixed(2)}.`)
function calcularDesconto(value,percentual) {
    return value * percentual / 100
}