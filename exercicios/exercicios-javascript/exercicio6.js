/*
Exercício 6: Arrays
Crie um script que receba um array de números e faça as seguintes operações:
1. Adicione um número ao final do array.
2. Remova o primeiro número do array.
3. Encontre o maior número do array.
4. Encontre o menor número do array.
Utilize o array [10, 20, 30, 40, 50] para os testes.
*/

const numeros = [10, 20, 30, 40, 50];

// 0. Array original:

console.log(`Array original: ${numeros}`)

// 1. Adicione um número ao final do array.

numeros.push(60);
console.log(`Array após adicionar um número ao final da sequência: ${numeros}`);

// 2. Remova o primeiro número do array.

numeros.shift();
console.log(`Array após remover o primeiro número: ${numeros}`);

// 3. Encontre o maior número do array.

const maiorNumero = Math.max(...numeros);
console.log(`O maior número do array é: ${maiorNumero}`);

// 4. Encontre o menor número do array.

const menorNumero = Math.min(...numeros);
console.log(`O menor número do array é: ${menorNumero}`);