/*
    Estrutura de Repetição - LOOP

    - FOR IN

*/

const myUsers = [{name: 'Adriana'}, {name: 'Bruno'}, {name: 'Carla'}]

for (const key in myUsers) {
    console.log(key + myUsers[key].name)
}


const result = document.querySelector('#result-paragraph');
const searchButton = document.querySelector('#search-button');

const users = [
    { name: "Adriana", age: 27, number: '(11) 93232-4545' },
    { name: "Bruno", age: 32, number: '(11) 94532-9971' },
    { name: "Carla", age: 52, number: '(11) 97323-7500' },
    { name: "Daniel", age: 18, number: '(11) 94200-0301' },
    { name: "Eduardo", age: 60, number: '(11) 97413-9001' }
];

searchButton.addEventListener('click', () => {
    const infoInput = document.querySelector('#info-input').value;
    for (const keys in users) {
        if (users[keys].name.toLowerCase() === infoInput.toLowerCase()) {
            result.textContent = `Nome: ${users[keys].name}, Idade: ${users[keys].age}, ${users[keys].number}`
            break;
        }
        else if (infoInput === '') {
            alert('Campo vazio, Insira um nome!')
        }
        else {
            result.textContent = 'Contato não encontrado'
        }
    }
})