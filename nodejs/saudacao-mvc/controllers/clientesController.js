const clientesModel = require('../models/clientesModel');

module.exports = {

    clientes: (req, res) => {
        res.sendFile('clientes.html', { root: './views' });
    },

    login: (req, res) => {
        res.sendFile('login.html', {root: './views'});
        const { email, senha } = req.body;
        const mensagem = clientesModel.verificaLogin(email, senha);
    }
};