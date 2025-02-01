# **Dia 18/01 - Programação assíncrona**

### **📌 Introdução**

Bem-vindo ao **décimo oitavo dia do desafio!** 🎉 Hoje vamos explorar a **Programação Assíncrona**, um dos conceitos mais importantes para lidar com operações que podem demorar para serem concluídas, como requisições de APIs, leitura de arquivos ou temporizadores.

A programação assíncrona permite que o programa continue rodando enquanto espera a conclusão dessas tarefas, tornando o código mais eficiente e responsivo. Vamos entender como isso funciona no JavaScript, usando **callbacks**, **promises** e **async/await**. 🚀

---

### **📚 O Que é Programação Assíncrona?**

Na programação síncrona, as operações são executadas uma após a outra, e o programa espera uma operação terminar antes de começar a próxima. Já na programação assíncrona, as operações podem ser iniciadas e concluídas em tempos diferentes, sem bloquear a execução do restante do código.

💡 **Exemplo no mundo real:**

- **Síncrono:** Você espera a água ferver antes de cortar os vegetais.
- **Assíncrono:** Você coloca a água para ferver e, enquanto isso, corta os vegetais.

---

### **🔍 Callbacks: O Início da Assincronicidade**

Um **callback** é uma função passada como argumento para outra função, que será chamada depois que uma tarefa for concluída.

📌 **Exemplo:**

```jsx
function buscarDados(callback) {
  setTimeout(() => {
    console.log("Dados buscados!");
    callback();
  }, 2000);
}

buscarDados(() => {
  console.log("Callback executado!");
});
// Saída:
// Dados buscados!
// Callback executado!
```

🔴 **Problema com Callbacks:**

Quando muitas funções dependem umas das outras, os callbacks podem gerar algo chamado de "callback hell" (um código difícil de ler e manter).

---

### **🔄 Promises: Resolvendo o Callback Hell**

Uma **Promise** representa uma operação que ainda não foi concluída, mas será resolvida ou rejeitada no futuro.

📌 **Exemplo:**

```jsx
function buscarDados() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Dados buscados!");
    }, 2000);
  });
}

buscarDados()
  .then(dados => {
    console.log(dados); // Saída: Dados buscados!
  })
  .catch(erro => {
    console.error("Erro ao buscar os dados:", erro);
  });
```

---

### **🔄 Async/Await: Simplificando a Sintaxe**

O **async/await** torna o código assíncrono mais legível, permitindo que você escreva como se fosse síncrono.

📌 **Exemplo:**

```jsx
function buscarDados() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Dados buscados!");
    }, 2000);
  });
}

async function executar() {
  try {
    const dados = await buscarDados();
    console.log(dados); // Saída: Dados buscados!
  } catch (erro) {
    console.error("Erro:", erro);
  }
}

executar();
```

---

### **💻 Exemplos Práticos**

**Simulando uma API:**

```jsx
function buscarUsuario() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ nome: "João", idade: 25 });
    }, 2000);
  });
}

async function exibirUsuario() {
  const usuario = await buscarUsuario();
  console.log(`Usuário: ${usuario.nome}, Idade: ${usuario.idade}`);
}

exibirUsuario();
// Saída: Usuário: João, Idade: 25
```

**Realizando Tarefas Paralelas com `Promise.all`:**

```jsx
function tarefa1() {
  return new Promise(resolve => setTimeout(() => resolve("Tarefa 1 concluída!"), 2000));
}

function tarefa2() {
  return new Promise(resolve => setTimeout(() => resolve("Tarefa 2 concluída!"), 1000));
}

async function executarTarefas() {
  const resultados = await Promise.all([tarefa1(), tarefa2()]);
  console.log(resultados);
}

executarTarefas();
// Saída: ['Tarefa 1 concluída!', 'Tarefa 2 concluída!']
```

**Temporizadores com `setTimeout`:**

```jsx
async function temporizador(segundos) {
  console.log(`Esperando ${segundos} segundos...`);
  await new Promise(resolve => setTimeout(resolve, segundos * 1000));
  console.log("Tempo concluído!");
}

temporizador(3);
// Saída:
// Esperando 3 segundos...
// Tempo concluído!
```

---

### **🛠️ Dicas Importantes**

- **Entenda o Event Loop:**
    
    O **event loop** é o mecanismo que gerencia a execução assíncrona no JavaScript. Saiba como ele funciona para evitar confusões.
    
- **Evite Misturar Callbacks com Promises:**
    
    Escolha uma abordagem e mantenha a consistência no código.
    
- **Use `try/catch` com Async/Await:**
    
    Sempre trate erros para evitar falhas inesperadas.
    

---

### **🎯 Exercícios Práticos**

1. Implemente uma função que simula o carregamento de dados de um banco usando `setTimeout` e Promises.
2. Escreva uma função que simule a espera por um evento usando `setTimeout` com Async/Await.
3. Crie uma API falsa que retorne dados de produtos com atraso simulado e exiba os resultados no console.
4. Escreva uma função que execute três tarefas sequenciais usando Promises e Async/Await.

---

### **🚀 Conclusão**

Parabéns por concluir o décimo oitavo dia do desafio! 🎉 Agora você entende os conceitos fundamentais da programação assíncrona e como utilizá-los para criar aplicações mais eficientes e responsivas.

Amanhã, vamos explorar o **JSON**, uma forma universal de trocar dados entre sistemas. Te vejo lá! 👋