//Importa o módulo http usando a sintaxe// server.js (Node.js Puro - CommonJS ou ES Modules funcionam, mas usaremos CommonJS aqui por simplicidade no módulo http)

import http from 'http'; // Usando ES Modules (necessário "type": "module" no package.json)

const PORT = 3000;

// O callback recebe a requisição (req) e a resposta (res)
const server = http.createServer((req, res) => {
    
    // Desestrutura para obter o método e a URL de forma mais limpa
    const { method, url } = req;

    // 1. Configuração padrão do cabeçalho de resposta
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    // =======================================================
    // Lógica de Roteamento
    // =======================================================

    if (url === '/') {
        // Rota: GET /
        if (method === 'GET') {
            res.statusCode = 200; // OK
            res.end('Você está na Home Page (Node.js Puro)!');
        } else {
            // Se a rota existir, mas o método não for permitido
            res.statusCode = 405; // Method Not Allowed
            res.end(`Método ${method} não permitido na rota /`);
        }
    } 
    
    else if (url === '/usuarios') {
        // Rota: GET /usuarios
        if (method === 'GET') {
            const usuarios = ['Ana', 'Bruno', 'Carla'];
            
            // Para enviar JSON, precisamos mudar o Content-Type
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.end(JSON.stringify(usuarios));
        } 
        // Rota: POST /usuarios
        else if (method === 'POST') {
            let body = '';
            
            // Evento 'data': Pedaços de dados chegam pela rede
            req.on('data', (chunk) => {
                body += chunk.toString(); // Converte o Buffer em String
            });

            // Evento 'end': Todos os dados foram recebidos
            req.on('end', () => {
                // Aqui você faria o processamento do 'body' (ex: salvar no banco)
                res.statusCode = 201; // Created
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ message: 'Usuário criado com sucesso!', data: body }));
            });
        }
        else {
             res.statusCode = 405;
             res.end(`Método ${method} não permitido na rota /usuarios`);
        }
    }
    
    else {
        // Rota não encontrada (404)
        res.statusCode = 404; // Not Found
        res.end('Página não encontrada.');
    }
});

// Inicia o servidor e o faz escutar na porta definida
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    console.log("Teste as rotas: GET / e GET /usuarios");
});