/*
    Estrutura de Repetição - LOOP

    - FOR
        1) INICIALIZAÇÃO → Criar uma variável e colocar um valor inicial pra ela

        2) CONDIÇÃO → Enquanto for true, o laço continuará iterando.
                      Ele irá verificar antes de cada iteração

        3) EXPRESSÃO FINAL → O que irá ocorrer cada vez que o nosso laço

        for ([inicialização]; [condição]; [expressão final]) {
            Seu código aqui
        }
*/

const users = [
    "Adriana", "Bruno", "Carla", "Daniel", "Eduardo", "Fernanda", "Gabriel", "Helena", "Igor", "Juliana",
    "Kleber", "Larissa", "Marcelo", "Natália", "Otávio", "Patrícia", "Quintino", "Renata", "Samuel", "Tatiane",
    "Ubirajara", "Vanessa", "Wagner", "Xavier", "Yasmin", "Zuleica", "Anderson", "Beatriz", "César", "Diana",
    "Eliana", "Fábio", "Gisele", "Humberto", "Isabela", "João", "Kelly", "Leandro", "Mariana", "Nelson",
    "Orlando", "Paula", "Quésia", "Rodrigo", "Sabrina", "Tiago", "Ulisses", "Valéria", "Wilian", "Ximena"
  ];

  for(let i = 0; i < users.length; i++) {
    console.log(`${i}. ${users[i]}`)
  }