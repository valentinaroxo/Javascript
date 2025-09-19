//const http = require('http'); //importando o modulo http
import http from 'http'; //usando a sintaxe do ES6 para importar o modulo http
http.createServer((req, res) => { //criando um servidor
  res.writeHead(200, {'Content-Type': 'text/plain'}); //definindo o cabeçalho da resposta
  res.end('Hello World!'); //finalizando a resposta com uma mensagem
}).listen(8080); //servidor ouvindo na porta 8080 
console.log('Servidor rodando em http://localhost:8080/');