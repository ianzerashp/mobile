/*
Exercício 10: Funções e Arrays
Crie um script que receba um array de números e faça as seguintes operações:
1. Filtre os números pares.
2. Multiplique cada número por 2.
3. Calcule a soma de todos os números obtidos.
Utilize o array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] para os testes.
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Filtre os números pares

const pares = numeros.filter(num => num % 2 === 0);

// 2. Multiplique cada número por 2.

const dobrados = numeros.map(num => num * 2);

// 3. Calcule a soma de todos os números obtidos.

const soma = dobrados.reduce((acc, num) => acc + num, 0);

console.log("Números pares:", pares);
console.log("Cada número multiplicado por 2:", dobrados);
console.log("Soma de todos os números obtidos:", soma);