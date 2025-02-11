/*
    setTimeout → Executa uma vez
    setInterval → Executa infinitas vezes
*/

setTimeout(() => { // Forma mais moderna
    
}, timeout);

function myFunction() { // Forma com função fora

}

setTimeout(myFunction, timeout);

setTimeout(function() { // Forma antiga
    alert('Mostra uma ensagem após 3 segundos.')
}, 3000); // 1000 Milisegundos > 1 segundo



setInterval(function() { // Forma antiga
    alert('Mostrar mensagem a cada 3 segundos.')
}, 3000); // 1000 Milisegundos > 1 segundo