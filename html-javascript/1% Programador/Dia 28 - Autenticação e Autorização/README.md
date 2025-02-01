# **Dia 28/01 - Autenticação e Autorização**

Autenticação e Autorização são dois pilares essenciais para criar sistemas seguros. Eles não só protegem os dados dos usuários, mas também garantem que cada pessoa ou aplicação tenha acesso apenas ao que é permitido. Neste tópico, você aprenderá tudo o que precisa saber para implementar essas práticas fundamentais em suas aplicações.

---

### **📌 O que é Autenticação?**

A **autenticação** é o processo que responde à pergunta: **"Quem é você?"**

Ela verifica a identidade de um usuário ou sistema antes de conceder acesso.

💡 **Como funciona?**

- **Login e Senha:** O usuário fornece credenciais que são verificadas no banco de dados.
- **Biometria:** Reconhecimento facial, impressão digital ou voz são usados para autenticar.
- **Autenticação Multifator (MFA):** Um segundo fator, como um código enviado ao celular, oferece mais segurança.

📌 **Exemplo do mundo real:**

Quando você insere sua senha para acessar o e-mail, está passando pelo processo de autenticação.

💡 **Desafios na autenticação:**

- Garantir que as credenciais não sejam interceptadas.
- Prevenir ataques como phishing e força bruta.

---

### **📌 O que é Autorização?**

A **autorização** é o processo que responde à pergunta: **"O que você pode fazer?"**

Ela controla quais recursos ou ações estão disponíveis para o usuário ou sistema autenticado.

💡 **Como funciona?**

- **Funções e Papéis (Role-Based Access Control - RBAC):** Um administrador pode editar e deletar dados, enquanto um usuário comum só pode visualizá-los.
- **Atributos (Attribute-Based Access Control - ABAC):** Permissões são baseadas em atributos como localização ou horário de acesso.

📌 **Exemplo do mundo real:**

Depois de fazer login no sistema do banco, você pode acessar sua conta, mas não as contas de outros clientes.

💡 **Desafios na autorização:**

- Definir e manter políticas de permissão claras.
- Evitar excessos de permissões, o que pode comprometer a segurança.

---

### **🔍 Diferença entre Autenticação e Autorização**

| **Autenticação** | **Autorização** |
| --- | --- |
| Responde à pergunta: "Quem é você?" | Responde à pergunta: "O que você pode fazer?" |
| Garante que o usuário é quem diz ser | Define o que o usuário pode acessar |
| Ocorre antes da autorização | Ocorre após a autenticação |
| Exemplo: Inserir senha ou biometria | Exemplo: Permissão para excluir um arquivo |

---

### **🔑 Métodos de Autenticação**

### 1. **Baseada em Senha:**

O método mais comum. O usuário fornece um nome de usuário e uma senha, que são comparados ao que está armazenado no banco de dados.

💡 **Exemplo em JavaScript:**

```jsx
function autenticarUsuario(email, senha) {
  const usuario = buscarUsuarioNoBanco(email);
  if (usuario && usuario.senha === senha) {
    console.log("Usuário autenticado!");
    return true;
  } else {
    console.log("Credenciais inválidas.");
    return false;
  }
}

```

### 2. **Autenticação Multifator (MFA):**

Adiciona uma camada extra de segurança ao exigir um segundo fator de autenticação, como:

- Um código enviado por SMS ou e-mail.
- Um token gerado por um aplicativo autenticador.

### 3. **Biometria:**

Usa características físicas do usuário, como impressão digital ou reconhecimento facial.

### 4. **Single Sign-On (SSO):**

Permite que o usuário acesse várias aplicações com uma única autenticação.

---

### **🔐 Métodos de Autorização**

### 1. **Role-Based Access Control (RBAC):**

Permissões são atribuídas com base em papéis definidos no sistema.

💡 **Exemplo em JavaScript:**

```jsx
function verificarPermissao(usuario, recurso) {
  if (usuario.role === "admin") {
    console.log(`Acesso permitido a ${recurso}`);
  } else {
    console.log(`Acesso negado a ${recurso}`);
  }
}
```

### 2. **Attribute-Based Access Control (ABAC):**

Permissões são baseadas em atributos do usuário ou do ambiente.

Exemplo: Permitir acesso apenas durante o horário comercial ou em uma determinada localização.

### 3. **Access Control Lists (ACLs):**

Definem explicitamente quais usuários ou grupos têm acesso a cada recurso.

---

### **🛠️ Fluxo Básico de Segurança**

💡 **Como funciona o processo completo de autenticação e autorização?**

1. O usuário faz login fornecendo suas credenciais.
2. O sistema autentica o usuário e, se válido, gera um **token de sessão** (ex.: JWT).
3. O token é enviado junto com cada requisição, permitindo que o servidor valide a identidade do usuário.
4. O servidor verifica as permissões do usuário antes de executar a ação ou retornar os dados.

---

### **🚨 Boas Práticas de Segurança**

1. **Use HTTPS:** Sempre trafegue credenciais e tokens em conexões seguras.
2. **Armazene Senhas de Forma Segura:** Nunca armazene senhas em texto simples. Use algoritmos como **bcrypt** para hash.
3. **Implemente MFA:** Adicione uma camada extra de proteção para evitar acessos não autorizados.
4. **Tokens com Expiração:** Certifique-se de que tokens de autenticação tenham validade limitada.
5. **Revogação de Permissões:** Garanta que mudanças nos papéis ou permissões sejam aplicadas imediatamente.

---

### **🚀 Exercícios Práticos**

1. **Implemente uma função de autenticação simples:**
    - Peça para o usuário fornecer login e senha e verifique as credenciais.
2. **Crie uma função que use papéis de usuário:**
    - Um administrador pode acessar todos os recursos, mas um usuário comum só pode acessar recursos básicos.
3. **Simule um sistema com autenticação multifator:**
    - Gere um código de autenticação e valide-o junto com as credenciais.
4. **Desenvolva uma função para gerenciar permissões:**
    - Use um objeto para mapear permissões por função e implemente a verificação.
5. **Aplique restrições baseadas em horário:**
    - Permita acesso a determinados recursos apenas durante o horário comercial.