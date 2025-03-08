/*
Exercício 8: Objetos
Crie um script que receba um objeto representando uma pessoa e faça as seguintes operações:
1. Adicione uma nova propriedade ao objeto.
2. Remova uma propriedade do objeto.
3. Liste todas as propriedades do objeto.

Utilize o objeto { nome: "Carlos", idade: 28, cidade: "São Paulo" } para os testes. 
*/

const pessoa = {
    nome: "Carlos",
    idade: 28,
    cidade: "São Paulo"
};

// 1. Adicionar uma nova propriedade ao objeto

pessoa.cidade = "Ceilândia";
console.log("Objeto após adicionar nova propriedade:", pessoa);

// 2. Remover uma propriedade do objeto

delete pessoa.nome;
console.log("Objeto após remover a propriedade 'nome':", pessoa);

// 3. Listar todas as propriedades do objeto

console.log("Propriedades do objeto:");
for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}