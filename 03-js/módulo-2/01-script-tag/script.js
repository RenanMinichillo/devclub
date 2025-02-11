console.log('Olá JavaScript, estou pelo <head></head>') // <script src="script.js"></script>
    `Utilizado quando é necessário que o script seja carregado antes do site.`

console.log('Olá JavaScript, estou pelo <body></body>') // <script src="script.js"></script>
    `Utilizado quando é necessário que o script seja carregado depois do site.`

function atributosScript() {
    const defer = 'Quando o script precisa do HTML pronto antes de ser executado.'
    const async = 'Para scripts independentes que não precisam esperar o carregamento da página.'
    const typeModule = 'Para usar import/export em ES6.'
    const noModule = 'Para compatibilidade com navegadores antigos.'
    const crossorigin = 'Para carregar scripts de domínios externos.'
}