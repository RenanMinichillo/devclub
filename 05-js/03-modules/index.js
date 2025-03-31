const sum = require('./sum') // Exportando individual
const multi = require('./multi') // Exportando individual

const objectsAndFunctions = require('./objectsAndFunctions')  // Exportando múltiplos (junto)
// const { sum, multi, person } = require('./objectsAndFunctions')  // Exportando múltiplos (separado)


console.log(sum(2,5))
console.log(multi(2,5))
console.log(objectsAndFunctions.sum(7,7))
console.log(objectsAndFunctions.multi(5,10))
console.log(objectsAndFunctions.person)