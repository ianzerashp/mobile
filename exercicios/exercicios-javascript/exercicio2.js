/* 
Exercício 2: Operadores Aritméticos e de Comparação
Crie um script que receba dois números e faça as seguintes operações:
1. Some os dois números.
2. Subtraia o segundo número do primeiro.
3. Multiplique os dois números.
4. Divida o primeiro número pelo segundo.
5. Verifique se o primeiro número é maior que o segundo.
Utilize os números 15 e 5 para os testes.
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Insira o primeiro número: ", (num1) => {
    rl.question("Insira o segundo número: ", (num2) => {

        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        console.log(`\nResultados:`);
        console.log(`Soma: ${num1 + num2}`);
        console.log(`Subtração: ${num1 - num2}`);
        console.log(`Multiplicação: ${num1 * num2}`);
        console.log(`Divisão do primeiro pelo segundo: ${(num1 / num2).toFixed(2)}`);
        console.log(`O primeiro número é maior que o segundo? ${num1 > num2}`);

        rl.close();
    });
});