const clientesModel = require('../models/clientesModel');

module.exports = {

    clientes: (req, res) => {
        res.sendFile('clientes.html', { root: './views' });
    },

    login: (req, res) => {
        res.sendFile('login.html', {root: './views'});
        const { nome, email, senha } = req.body;
        const mensagem = clientesModel.verificaLogin(nome, email, senha);
        res.send(`<h1>${mensagem}</h1>`);
    }
};