//importa o modulo http nativo do nodejs
import http from 'http';

// Define a porta onde o servidor irá escutar
const PORT = 3000;

// Cria o servidor HTTP
const server = http.createServer((request, response) => {
    // Extrai a URL e o método HTTP da requisição
    const url = request.url;
    const method = request.method;  

    // Configura o cabeçalho da resposta para texto simples com UTF-8 e como html
    response.setHeader('Content-Type', 'text/html; charset=utf-8');

    // Roteamento básico
    if (url === '/') {
            response.statusCode = 200; // OK        
            response.end('<h1>Você está na Home Page (Node.js Puro)!</h1>');

        } else if (url === '/sobre' && method === 'GET') {
            response.statusCode = 200; // OK        
            response.end('<h1>Sobre Nós</h1><p>Esta é uma aplicação de exemplo com Node.js puro.</p>');

        } else if (url === '/contato') {
            response.statusCode = 200; // OK    
            response.end('<h1>Fale Conosco</h1>');

        } else if (url === '/fotos') {
            response.statusCode = 200; // OK
            response.end('<h1>Nossas Fotos</h1>');

        } else {
            //se nenhuma rota corresponder
            response.statusCode = 404; // Not Found
            response.end('<h1>404 - Página não encontrada!</h1>');
        }

    //inicia o servidor e o faz escutar na porta definida
});

server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});