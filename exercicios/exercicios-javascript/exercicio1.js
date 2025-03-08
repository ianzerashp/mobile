/* 
Exercício 1: Manipulação de Strings
Crie um script que receba uma string e faça as seguintes operações:
1. Converta a string para maiúsculas.
2. Converta a string para minúsculas.
3. Inverta a string.
4. Substitua todas as ocorrências de uma letra específica por outra. 
*/

/* Professor, fiquei na dúvida no "receba um string" se era pra ser um script simples igual o passado em sala,
ou se era pra utilizar o sistema pro usuário inserir a string no terminal e receber os dados.
Na dúvida, falei com meus amigos e a maioria usou o "readline" pra receber os dados, então fiz dessa maneira,
com ajuda do GPT. */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Insira a string: ", (string) => {
    rl.question("Insira o caractere a ser substituído: ", (letraASerTrocada) => {
        rl.question(`Insira o caractere que substituirá o caractere "${letraASerTrocada}": `, (letraSubstituta) => {
            console.log(`\nResultados:`);
            console.log(`String toda em maiúscula: ${string.toUpperCase()}`);
            console.log(`String toda em minúscula: ${string.toLowerCase()}`);
            console.log(`String invertida: ${string.split('').reverse().join('')}`);
            console.log(`Texto com substituições: ${string.replace(new RegExp(letraASerTrocada, 'g'), letraSubstituta)}`);

            rl.close();
        });
    });
});