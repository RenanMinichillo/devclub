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
    for (const object of users) {
        if (object.name.toLowerCase() === infoInput.toLowerCase()) {
            result.textContent = `Nome: ${object.name}, Idade: ${object.age}, Telefone: ${object.number}`;
            break;
        }
        else if (infoInput === '') {
            alert('Campo vazio, digite o nome da pessoa!');
            break;
        } else {
            result.textContent = 'Contato não encontrado';
        }
    }
})