const readline = require('readline');

// Configurando a interface para leitura do terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicitando a entrada do usuário
rl.question('Digite a hora atual (0-23): ', (input) => {
  const hora = parseInt(input);

  if (isNaN(hora) || hora < 0 || hora > 23) {
    console.log("Por favor, insira um valor válido entre 0 e 23.");
  } else if (hora < 12) {
    console.log("Bom dia! ☀️");
  } else if (hora < 18) {
    console.log("Boa tarde! 🌤️");
  } else {
    console.log("Boa noite! 🌙");
  }

  // Encerrando a interface de leitura
  rl.close();
});
