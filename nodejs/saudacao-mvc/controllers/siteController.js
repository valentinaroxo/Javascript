const saudacaoModel = require('../models/saudacaoModel');

module.exports = {
  index: (req, res) => {
    res.sendFile('index.html', { root: './views' });
  },

  formulario: (req, res) => {
    res.sendFile('formulario.html', { root: './views' });
  },

  saudacao: (req, res) => {
    const { nome, idade, genero } = req.body;
    const mensagem = saudacaoModel.gerarMensagemPersonalizada(nome, idade, genero);
    res.send(`<h1>${mensagem}</h1>`);
  }
};
