# **Dia 24/01 - APIs**

### **📌 Introdução**

Bem-vindo ao **vigésimo quarto dia do desafio!** 🎉 Hoje vamos explorar um dos conceitos mais importantes no desenvolvimento moderno: **APIs (Application Programming Interfaces)**.

Se você já usou um aplicativo para checar a previsão do tempo, pediu comida por um app ou realizou um pagamento online, você já interagiu com uma API — mesmo sem perceber. Vamos entender como elas funcionam e por que são tão fundamentais na tecnologia de hoje. 🚀

---

### **📚 O Que é uma API?**

Uma **API (Application Programming Interface)** é como uma **ponte de comunicação** entre diferentes sistemas ou partes de um sistema. Ela permite que um software "converse" com outro, trocando informações e solicitando serviços.

💡 **Exemplo no mundo real:**

Pense em um restaurante:

- O cliente (aplicação) faz o pedido ao garçom (API).
- O garçom comunica o pedido ao cozinheiro (servidor).
- O cozinheiro prepara a comida (processa os dados) e entrega ao garçom, que leva ao cliente.

Na tecnologia, a API funciona exatamente assim: recebe uma solicitação, a processa e devolve uma resposta.

---

### **📌 Por Que as APIs São Importantes?**

1. **Conexão entre Sistemas:**
    
    APIs permitem que diferentes sistemas se conectem e compartilhem dados.
    
2. **Reutilização de Funcionalidades:**
    
    Um serviço ou recurso pode ser utilizado por vários sistemas, economizando tempo e esforço.
    
3. **Modularidade:**
    
    APIs permitem que os sistemas sejam divididos em partes independentes, facilitando o desenvolvimento e a manutenção.
    

💡 **Exemplo prático:**

- O Google Maps fornece uma API que permite que outros aplicativos exibam mapas e criem rotas sem precisar desenvolver essa funcionalidade do zero.

---

### **📚 Como uma API Funciona?**

Uma API geralmente segue o modelo **request-response** (solicitação e resposta).

- **Solicitação (Request):** O cliente envia uma mensagem à API, pedindo algo.
- **Resposta (Response):** A API processa o pedido e devolve uma resposta.

📌 **Elementos de uma API:**

1. **Endpoint:**
    
    É a URL onde a API pode ser acessada.
    
    Exemplo: `https://api.openweathermap.org/data/2.5/weather`
    
2. **Métodos HTTP:**
    
    Define a ação que será executada:
    
    - **GET:** Buscar dados.
    - **POST:** Enviar dados para criar algo novo.
    - **PUT:** Atualizar dados existentes.
    - **DELETE:** Remover dados.
3. **Formato de Dados:**
    
    APIs geralmente usam **JSON** para trocar informações.

---

### **🔍 Exemplos Práticos**

### **1. Fazendo uma Solicitação GET:**

Buscar a previsão do tempo para uma cidade:

📌 **URL:**

`https://api.openweathermap.org/data/2.5/weather?q=London&appid=SEU_TOKEN`

💡 **Requisição:**

```json
{
  "q": "London",
  "appid": "SEU_TOKEN"
}
```

💡 **Resposta:**

```json
{
  "weather": [
    {
      "description": "clear sky"
    }
  ],
  "main": {
    "temp": 280.32,
    "feels_like": 278.59
  }
}

```

- **weather.description:** Céu limpo.
- **main.temp:** Temperatura atual.

### **2. Enviando Dados com POST:**

Cadastrar um novo usuário no sistema:

📌 **Endpoint:**

`https://api.sistema.com/usuarios`

💡 **Requisição:**

```json
{
  "nome": "João",
  "email": "joao@email.com"
}

```

💡 **Resposta:**

```json
{
  "mensagem": "Usuário criado com sucesso!",
  "id": 12345
}
```

---

### **📌 Tipos de APIs**

1. **APIs Públicas:**
    
    Acessíveis por qualquer desenvolvedor, geralmente exigem uma chave de autenticação.
    
    Exemplo: API do Twitter.
    
2. **APIs Privadas:**
    
    Usadas internamente por uma empresa para conectar sistemas.
    
3. **APIs Restful:**
    
    Seguem o padrão REST, que é simples e amplamente utilizado.
    
4. **APIs GraphQL:**
    
    Permitem que o cliente defina exatamente os dados que deseja receber.
    

---

### **📚 Segurança em APIs**

1. **Autenticação:**
    
    Use tokens como **JWT (JSON Web Tokens)** para validar o cliente.
    
2. **Limitação de Requisições:**
    
    Implemente rate limiting para evitar abusos.
    
3. **Criptografia:**
    
    Sempre use HTTPS para proteger os dados transmitidos.

---

### **🛠️ Dicas Importantes**

1. **Leia a Documentação:**
    
    A documentação da API é sua melhor amiga. Ela explica os endpoints disponíveis, os métodos permitidos e os dados necessários.
    
2. **Teste com Ferramentas:**
    
    Use ferramentas como **Postman** ou **Insomnia** para testar APIs e entender suas respostas.
    
3. **Entenda os Erros:**
    
    APIs retornam códigos de status HTTP para indicar o que aconteceu:
    
    - **200:** Sucesso.
    - **400:** Solicitação inválida.
    - **404:** Endpoint não encontrado.
    - **500:** Erro no servidor.

---

### **🎯 Exercícios Práticos**

1. **Descubra uma API Pública:**
    
    Escolha uma API pública, como a do GitHub ou OpenWeather, e explore seus endpoints.
    
2. **Teste Requisições:**
    
    Use o Postman para fazer uma solicitação GET e uma POST.
    
3. **Crie um Fluxo de Uso:**
    
    Desenhe um fluxo que mostra como o Frontend e o Backend usariam uma API para processar um pedido.
    

---

### **🚀 Conclusão**

Parabéns por concluir o vigésimo quarto dia do desafio! 🎉 Agora você entende o que são APIs, como elas funcionam e por que são tão importantes para conectar sistemas.

Amanhã, vamos aprender sobre **Git**, uma ferramenta essencial para gerenciar e versionar código. Te vejo lá! 👋

---

Esse conteúdo apresenta uma visão clara, prática e detalhada sobre APIs, permitindo que você as compreenda e comece a utilizá-las em seus projetos. 🚀✨