// Importações dos exercícios 1 e 2

import { soma, subtracao, multiplicacao, divisao } from './calculadora.js';
import moment from "moment";

// Exercício 1

console.log("Soma: ", soma(10, 5));
console.log("Subtração: ", subtracao(10, 5));
console.log("Multiplicação: ", multiplicacao(10, 5));
console.log("Divisão: ", divisao(10, 5));

// Exercício 2

function calcularIdade(anoNascimento) {
    return moment().year() - anoNascimento;
}

const anoNascimento = 1990;
const idade = calcularIdade(anoNascimento);
console.log(`Idade: ${idade} anos`);