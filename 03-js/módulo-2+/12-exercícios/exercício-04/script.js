const myTexts = [
    'Olá Mundo, serei um Dev Front-End',
    'Olá Mundo, serei um Dev Back-End',
    'Olá Mundo, serei um Dev FullStack'
]

const firstText = myTexts[Math.floor(Math.random() * 3)]
const secondText = myTexts[Math.floor(Math.random() * 3)]


if (firstText === secondText) {
    console.log('As strings são iguais')
}
else {
    console.log('As strings são diferentes')
}