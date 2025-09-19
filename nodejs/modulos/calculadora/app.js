//const funcoesMatematicas = require('./funcoes_matematicas');
import {somar, subtrair, multiplicar, dividir} from './funcoes_matematicas.js'; //importando funções específicas do módulo
import * as idade from './funcoes_matematicas.js'; //importando todas as funções do módulo

// Exemplo de uso:
console.log("Soma: ", + somar(5, 3));
console.log("Subtração: ", + subtrair(10, 4));
console.log("Multiplicação: ", + multiplicar(6, 7));
console.log("Divisão: ", + dividir(20, 5));

console.log("Idade em 2025: ", + idade.idade(1990));
