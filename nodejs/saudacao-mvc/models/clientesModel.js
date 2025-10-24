module.exports = {
  verificaLogin: (email, senha) => {
    let emailSenha;

    if (email === "roxovalentina@gmail.com" && senha === "123456") {
      emailSenha = true;
      return 'Login bem-sucedido!';
    } else {
      emailSenha = false;
      return 'Email ou senha incorretos. Tente novamente.';
    } 
  } 
};
