//const os = require('os'); //importando o modulo os (operating system)
import os from 'os'; //usando a sintaxe do ES6 para importar o modulo os

//exibindo informacoes sobre o sistema operacional
console.log('Arquitetura do sistema:', os.arch()); //exibindo a arquitetura do sistema
console.log('Quantidade de CPUs:', os.cpus().length); //exibindo informacoes sobre a cpu
console.log('Memória total (bytes):', os.totalmem()); //exibindo a memoria total do sistema
console.log('Memória livre (bytes):', os.freemem()); //exibindo a memoria livre do sistema
console.log(os.platform()); //exibindo o sistema operacional
