import express from 'express';

const app = express();
const port = 3001;

app.use(express.json());

const users = [];

app.get('/usuarios', (request, response) => {
    response.json(users)

});

app.post('/usuarios', (request, response) => {
    try {
        const { name, age, email } = request.body

        if (age < 18) throw new Error('Apenas é permitido cadastro de usuários acima de 18 anos.')
        const user = { name, age, email }

        users.push(user)

        response.status(201).json(user)
    } catch(err){
        return response.status(400).json({error: err.message})
    } finally {
        console.log('Você pode adicionar qualquer código aqui, ele será executado após passar pelo try e catch')
    }
});

app.listen(port)