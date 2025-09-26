//const funcoesMatematicas = require('./funcoes_matematicas');
import {somar, subtrair, multiplicar, dividir} from './funcoes_matematicas.js'; //importando funções específicas do módulo
import * as calculadora_idade from './calculadora_idade.js'; //importando todas as funções do módulo calculadora_idade.js

// Exemplo de uso:
console.log("Soma: ", + somar(5, 3));
console.log("Subtração: ", + subtrair(10, 4));
console.log("Multiplicação: ", + multiplicar(6, 7));
console.log("Divisão: ", + dividir(20, 5));

console.log(calculadora_idade.idade("Ana", 1990, 2024)); // Usando a função idade do módulo calculadora_idade.js
