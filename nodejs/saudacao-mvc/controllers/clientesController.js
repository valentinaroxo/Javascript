const clientesModel = require('../models/clientesModel');

module.exports = {

    clientes: (req, res) => {
        res.sendFile('clientes.html', { root: './views' });
    },

    formulario: (req, res) => {
        res.sendFile('login.html', { root: './views' });
    },

    login: (req, res) => {
        const { email, senha } = req.body;
        const mensagemLogin = clientesModel.verificaLogin(email, senha);
        res.send(`<h1>${mensagemLogin}</h1>`);
    }
};