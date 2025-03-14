//  ANTIGO → type: CommonJS
// const express = require('express')

// NOVO → type: Module
import express from 'express'

// Armazenando o express em uma variável
const app = express()
app.use(express.json())

// Armazenando usuários criados
const users = []

// Enviando uma resposta para porta '3000'
app.get('/usuarios', (req, res) => {
    res.status(200).json(users)
})

app.post('/usuarios', (req, res) => {
    users.push(req.body)

    res.status(201).json({ message: 'Usuário foi criado com sucesso!'})
})

// req → request (Requisição)
// res → response (Resposta)

// Utilizando uma porta com a variável
app.listen(3000)

// Query Params → http://localhost:3000/usuarios?name=renan&age=28
// Route Params → http://localhost:3000/usuarios/variavel → Necessário adicionar a variável no app.get('/usuarios/:variavel) e usar o req
// Body Params → Não é enviado no URL, mas no corpo da solicitação em JSON → Necessário adicionar o .use(express.json())