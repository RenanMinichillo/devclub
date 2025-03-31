/*  JSON → JavaScript Object Notation

    - Padrão de troca e armazenamento de informações
    - Padrão lógico simples
    - Leve para ser enviado e recebido
    - Simples e fácil de entender
    - Derivado do JavaScript
    - Utiliza o formato chave / valor

*/

const user = {
    nome: "Renan",
    idade: 28,
    filhos: null,
    hobbies: ["Codar", "Animes", "Filmes", "Séries"],
    casado: false,
    empregos: {
        mcdonalds: {
            tipo: "Hamburgueria",
            ano: 2014,
            tempo: "6 meses"
        },
        fis: {
            tipo: "Call Center",
            ano: 2015,
            tempo: "6 anos e 6 meses"
        },
        mercadolivre: {
            tipo: "comércio eletrônico",
            ano: 2024,
            tempo: "1 mês"
        }
    }
}

const userJson = JSON.stringify(user)
console.log(userJson)

const userJsonToJS = JSON.parse(userJson)
console.log(userJsonToJS)