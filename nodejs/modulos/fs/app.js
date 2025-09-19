//const fs = require('fs'); //contante chamando/requerindo o modulo fs (file system

import fs from 'fs'; //usando a sintaxe do ES6 para importar o modulo fs

fs.readFile('example.txt', 'utf8', (err, data) => { //callback, lendo um arquivo de forma assincrona
    if (err) { //tratando o erro
        console.error('Erro ao ler o arquivo:', err); //adicionando o erro no console
        return; //retornando para que nao execute o restante do codigo
    }
    console.log('Conteúdo do arquivo:', data); //se nao houver erro, exibe o conteudo do arquivo
});     

console.log('Esta mensagem aparece primeiro.'); //mensagem que aparece primeiro, pois a leitura do arquivo é assincrona
