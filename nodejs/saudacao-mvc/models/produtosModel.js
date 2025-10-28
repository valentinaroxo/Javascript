module.exports = {
  cadastroFeito: (id, descricao, quantidade, preco) => {


    return `O produto com: <br> id: ${id} <br> descrição: ${descricao} <br> quantidade: ${quantidade} <br> preço: ${preco} <br> foi cadastrado com sucesso!`;
  } 
};
