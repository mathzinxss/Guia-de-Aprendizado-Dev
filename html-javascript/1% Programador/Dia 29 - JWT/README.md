# **Dia 29/01 - JWT**

JSON Web Token (JWT) é um dos métodos mais populares para autenticação e troca segura de informações entre sistemas. Ele é amplamente utilizado para proteger APIs, sessões de usuários e até mesmo autorizações em serviços distribuídos. Neste tópico, você aprenderá o que é JWT, como ele funciona, e como implementá-lo com JavaScript.

---

### **📌 O que é JWT?**

O **JSON Web Token** é um padrão aberto para a troca segura de informações entre sistemas em formato JSON. Ele garante a integridade e a autenticidade dos dados usando assinaturas digitais.

💡 **Como ele é formado?**

O JWT é dividido em três partes, separadas por pontos (`.`):

1. **Header (Cabeçalho):** Contém o tipo do token (`JWT`) e o algoritmo de assinatura.
2. **Payload (Corpo):** Armazena os dados (claims), como o ID do usuário e permissões.
3. **Signature (Assinatura):** Garante que o token não foi alterado.

📌 **Estrutura de um JWT:**

```json
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
.eyJ1c2VybmFtZSI6ImpvYW8iLCJpYXQiOjE2NzEyMzQ1NjB9
.J9c7Il5JnY1h_FTAlP3D7lx2YhOo2
```

---

### **🔑 Como funciona o JWT?**

1. O cliente faz login e o servidor valida as credenciais.
2. O servidor gera um token JWT assinado e o envia para o cliente.
3. O cliente armazena o token (geralmente no `localStorage` ou cookies).
4. Para cada requisição, o cliente envia o token no cabeçalho HTTP.
5. O servidor valida o token antes de liberar o acesso.

📌 **Exemplo de fluxo:**

1. Cliente: "Aqui estão minhas credenciais (e-mail e senha)."
2. Servidor: "Credenciais válidas! Aqui está seu token JWT."
3. Cliente: "Aqui está o token para acessar meus dados."
4. Servidor: "Token válido! Aqui estão seus dados."

---

### **🛠️ Estrutura do JWT**

### **1. Header**

O cabeçalho contém informações sobre o tipo de token e o algoritmo usado para assinar.

📌 **Exemplo:**

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

### **2. Payload**

O payload contém as informações que queremos compartilhar (claims).

📌 **Exemplo:**

```json
{
  "id": 123,
  "username": "joao",
  "role": "admin",
  "exp": 1671234560
}
```

### **3. Signature**

A assinatura é gerada combinando o cabeçalho e o payload com uma chave secreta. Ela garante que o token não foi alterado.

📌 **Exemplo (simplificado):**

```
HMACSHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  secret
)
```

---

### **📋 Como implementar JWT com JavaScript**

### **1. Instalando a biblioteca**

No Node.js, você pode usar a biblioteca `jsonwebtoken`:

```bash
npm install jsonwebtoken
```

---

### **2. Gerando um JWT**

📌 **Exemplo de geração de token:**

```jsx
const jwt = require("jsonwebtoken");

const payload = {
  id: 123,
  username: "joao",
  role: "admin"
};

const secretKey = "minha_chave_secreta";

const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });
console.log("Token JWT:", token);

```

💡 **Explicação:**

- `jwt.sign`: Gera o token com base no payload e na chave secreta.
- `expiresIn`: Define o tempo de expiração do token (neste caso, 1 hora).

---

### **3. Validando um JWT**

📌 **Exemplo de validação:**

```jsx
const tokenRecebido = "eyJhbGciOiJIUzI1Ni...";
try {
  const dados = jwt.verify(tokenRecebido, secretKey);
  console.log("Token válido:", dados);
} catch (error) {
  console.error("Token inválido:", error.message);
}
```

💡 **Explicação:**

- `jwt.verify`: Verifica a validade e integridade do token.
- Se o token estiver expirado ou for inválido, um erro será gerado.

---

### **⚠️ Cuidados e Boas Práticas com JWT**

1. **Use HTTPS:** Nunca trafegue tokens em conexões não seguras.
2. **Tokens Curta Duração:** Sempre defina um tempo de expiração para os tokens.
3. **Renovação de Tokens:** Implemente refresh tokens para renovar a sessão do usuário.
4. **Não Armazene Dados Sensíveis no Payload:** Lembre-se de que o payload pode ser decodificado.

---

### **🚀 Exercícios Práticos**

1. **Gere um token JWT:**
    - Inclua no payload os dados: `id`, `username` e `role`.
2. **Valide um token JWT:**
    - Use a função `jwt.verify` para garantir que o token é válido.
3. **Simule um fluxo de autenticação:**
    - Crie uma função que gera um token ao validar credenciais e outra que valida esse token em requisições subsequentes.
4. **Implemente expiração de tokens:**
    - Teste o comportamento de um token expirado.







