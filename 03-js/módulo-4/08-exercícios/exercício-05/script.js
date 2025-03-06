const listWords = [
    "casa", "festa", "livro", "azul", "montanha",
    "brisa", "vento", "rápido", "feliz", "triste",
    "sorrir", "dançar", "chuva", "folha", "sombra"
];

const wordsFiveLength = listWords.filter(words => words.length >= 5)

console.log(wordsFiveLength)