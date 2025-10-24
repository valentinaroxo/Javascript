module.exports = {
  verificaLogin: (email, senha) => {
    let acesso;

    if (email === "roxovalentina@gmail.com" && senha === "123456") {
      acesso = "liberado";
    } else {
      acesso = "negado"
    } 
    return `Acesso ${acesso} para o usuário com email: ${email}`;
  } 
};
