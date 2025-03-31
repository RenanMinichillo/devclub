/*  
    DADOS MONGO DB

    Usuário: renanfrans
    Senha: pNTVc2d4U3pxlQ7v

    MÉTODOS

    Query Params → Enviado através do link http://localhost:3000/usuarios?name=renan
    Route Params → Enviado através do link para acessar algo expecífico http://localhost:3000/usuarios/id
    Body Params → Enviado através do corpo do site via .JSON
 */

import express from 'express'
import { PrismaClient } from '@prisma/client'

const app = express()
app.use(express.json())
const port = 3000
const prisma = new PrismaClient()

app.get('/usuarios', async (req, res) => {
    const user = await prisma.user.findMany()

    res.status(200).json(user)
})

app.post('/usuarios', async (req, res) => {
    const user = await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json(user)
})

app.put('/usuarios/:id', async (req, res) => {
    const user = await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(200).json(user)
})

app.delete('/usuarios/:id', async (req, res) => {
    const user = await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({ message: "Usuário deletado com sucesso!" })
})

app.listen(port, () => {
    console.log(`Seu servidor está rodando na porta ${port}`)
})