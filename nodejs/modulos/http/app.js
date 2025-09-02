const http = require('http'); //importando o modulo http
http.createServer((req, res) => { //criando um servidor
  res.writeHead(200, {'Content-Type': 'text/plain'}); //definindo o cabeçalho da resposta
  res.end('Hello World!'); //finalizando a resposta com uma mensagem
}).listen(8080); //servidor ouvindo na porta 8080 