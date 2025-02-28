/*
    Array's

    - push → Adiciona um item no array. O item adicionado sempre será colocado na última posição do array.
    - length → Mostra o tamanho do array. A quantidade de itens dentro do array.
    - sort → Organiza o array.
    - delete → Deleta um item do array. O item é deletado, mas o espaço fica vazio. Retornando undefined.
    - every → Esse método testa se todos os elementos do Array passam em uma condição. Passamos uma função que retorna true ou false. 
    Se todos os retornos forem true, significa que todos os elementos passaram no teste, e a função retornará true. 
    Se algum item não estiver de acordo, ele retornará false.
    - some → faz algo parecido com o .every(). A diferença é que o .every() só retorna true se todos os elementos passarem no teste. 
    O .some() retorna true se pelo menos um elemento do Array passar no teste.
    - fill → Preenche posições do array como desejarmos.
    - find → Usamos esse método quando queremos encontrar algum elemento dentro no Array. Para isso, passamos uma função que irá retornar true ou false. 
    O primeiro true que for retornado irá finalizar a função e retornar o elemento em que estamos.
    - findIndex → Faz o mesmo que o .find(), mas retorna o índice do elemento encontrado ao invés de retornar o próprio elemento.
    - concat() → Esse método é usado para juntar dois arrays. Ele não altera os arrays originais, mas cria um novo array com a soma dos dois arrays escolhidos.

    - includes → Esse método nos diz se há ou não um determinado item no array. Retorna true ou false.
    - join → O método join() junta todos os elementos de um array.

    - slice(fatiar) → O método slice() retorna um novo array, apenas com as informações escolhidas
    - splice → Esse metódo remove ou adiciona elementos em um array em uma posição específica.
    - pop → Remove o último elemento de um array.
    - shift → Remove o primeiro elemento de um array.

*/

// PUSH
const list = [1, 2, 3]
list.push(4)
console.log(list)

// LENGHT
console.log(list.length)

// SORT
const newList = ['limão', 'abóbora', 'caqui']
newList.sort()
console.log(newList)

// DELETE
delete newList[0]
console.log(newList)

// EVERY
const usersCredit = [
    { name: 'Nico', credit: 600 },
    { name: 'Maria', credit: 900 },
    { name: 'Joana', credit: 300 },
    { name: 'Vanessa', credit: 200 }
]
const isTrue = usersCredit.every(user => user.credit > 100)
console.log(isTrue)

// SOME
const justOneTrue = usersCredit.some(user => user.credit > 800)
console.log(justOneTrue)

// FILL
const numbers = [6, 9, 12, 15, 0, 0]
numbers.fill(21, 4, 5)
console.log(numbers)

// FIND
const findAUser = usersCredit.find(user => user.name === 'Maria')
console.log(findAUser)

// FINDINDEX
const findIndexAUser = usersCredit.findIndex(user => user.name === 'Maria')
console.log(findIndexAUser)

// CONCAT
const arrayNumbersOne = [1, 2, 3]
const arrayNumbersTwo = [4, 5, 6]
const arrayLettersOne = ['a', 'b', 'c']
const arrayLettersTwo = ['d', 'e', 'f']

const arrayNumbersThree = arrayNumbersOne.concat(arrayNumbersTwo)
const arrayLettersThree = arrayLettersOne.concat(arrayLettersTwo)
console.log(arrayNumbersThree)
console.log(arrayLettersThree)

// INCLUDES
const randomArray = ['b', 32, {name: 'Joshua'}, 47, 'def']
const isTrueOrFalse = randomArray.includes('def')
console.log(isTrueOrFalse)

// JOIN
const elements = ['Fire', 'Air', 'Water', 'Earth']
const myElements = elements.join()
console.log(myElements)

// SLICE
const peoples = ['Maria', 'João', 'Carlos', 'Eduardo', 'Camila']
const filterPeoples = peoples.slice(2,4)
console.log(filterPeoples)

// SPLICE
const newPeoples = ['Maria', 'João', 'Carlos', 'Eduardo', 'Camila']
newPeoples.splice(0, 3, 'Patrícia')
console.log(newPeoples)

// POP
const removeLastElement = elements.pop()
console.log(removeLastElement)

// SHIFT
const removeFirstElement = elements.shift()
console.log(removeFirstElement)