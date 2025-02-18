const num1 = Math.floor(Math.random() * 100)
const num2 = Math.floor(Math.random() * 100)
const num3 = Math.floor(Math.random() * 100)

const sum = num1 + num2 + num3 / 3
console.log(`A média entre os valores de ${num1}, ${num2} e ${num3} é ${sum.toFixed(2)}`)