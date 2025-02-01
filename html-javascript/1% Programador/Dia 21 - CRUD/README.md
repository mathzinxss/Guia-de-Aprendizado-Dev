# **Dia 21/01 - CRUD**

## 🌟 **Bem-vindo ao CRUD!**

CRUD é um dos conceitos mais importantes na manipulação de dados em bancos de dados. Ele representa as 4 operações principais: **Create (Criar)**, **Read (Ler)**, **Update (Atualizar)** e **Delete (Deletar)**. Neste tópico, você vai aprender como essas operações funcionam e como aplicá-las utilizando SQL.

Vamos explorar cada uma dessas operações com exemplos práticos e detalhados. 🚀

---

[guia-sql](https://www.notion.so/guia-sql-fb41d71e182341cba2d91de206de64c7?pvs=21)

### **📌 O que é CRUD?**

- **C** - **Create** (Criar): Adicionar novos dados ao banco.
- **R** - **Read** (Ler): Consultar ou buscar dados existentes.
- **U** - **Update** (Atualizar): Modificar dados já existentes.
- **D** - **Delete** (Deletar): Remover dados do banco.

💡 **Exemplo do dia a dia:**

Pense em um aplicativo de lista de tarefas:

- Criar uma nova tarefa (Create).
- Ver a lista de tarefas (Read).
- Editar o texto de uma tarefa (Update).
- Excluir uma tarefa concluída (Delete).

---

### **🛠️ Implementando o CRUD**

Vamos usar a tabela `usuarios` como exemplo para aplicar o CRUD.

### **Criando a Tabela (DDL)**

Crie um novo banco de dados:

```jsx
CREATE DATABASE crud;
```

Crie uma tabale apra os usuários:

```sql
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    idade INT
);
```

### **1. CREATE - Inserindo Dados**

A operação **CREATE** é usada para adicionar novos registros à tabela.

📌 **Comando:**

```sql
INSERT INTO usuarios (nome, email, idade)
VALUES ('João Silva', 'joao@email.com', 30),
       ('Maria Oliveira', 'maria@email.com', 28),
       ('Pedro Santos', 'pedro@email.com', 35);
```

💡 **Explicação:**

- Adiciona três usuários à tabela `usuarios`.
- Cada registro possui nome, e-mail e idade.

📌 **Dica:** Sempre insira dados válidos para evitar erros em restrições (como `NOT NULL` e `UNIQUE`).

---

### **2. READ - Lendo Dados**

A operação **READ** permite buscar e visualizar dados da tabela.

### **Leitura Simples (Todos os Dados)**

📌 **Comando:**

```sql
SELECT * FROM usuarios;
```

💡 **Explicação:**

- Retorna todos os registros e colunas da tabela `usuarios`.

📌 **Saída esperada:**

| id | nome | email | idade |
| --- | --- | --- | --- |
| 1 | João Silva | [joao@email.com](mailto:joao@email.com) | 30 |
| 2 | Maria Oliveira | [maria@email.com](mailto:maria@email.com) | 28 |
| 3 | Pedro Santos | [pedro@email.com](mailto:pedro@email.com) | 35 |

---

### **Leitura com Filtros**

📌 **Comando:**

```sql
SELECT * FROM usuarios WHERE idade > 30;
```

💡 **Explicação:**

- Retorna apenas o nome e e-mail dos usuários com idade maior que 30.

📌 **Saída esperada:**

| nome | email |
| --- | --- |
| Pedro Santos | [pedro@email.com](mailto:pedro@email.com) |

---

### **3. UPDATE - Atualizando Dados**

A operação **UPDATE** é usada para modificar informações existentes na tabela.

### **Atualização Simples**

📌 **Comando:**

```sql
UPDATE usuarios
SET idade = 31
WHERE id = 1;
```

💡 **Explicação:**

- Atualiza a idade do usuário com `id = 1` para 31.

---

### **Atualização com Filtros**

📌 **Comando:**

```sql
UPDATE usuarios
SET email = 'novo@email.com'
WHERE nome = 'Maria Oliveira';
```

💡 **Explicação:**

- Atualiza o e-mail da usuária chamada "Maria Oliveira".

📌 **Dica:** Sempre use o `WHERE` para evitar atualizar todos os registros acidentalmente.

---

### **4. DELETE - Deletando Dados**

A operação **DELETE** é usada para remover registros da tabela.

### **Deletando um Registro Específico**

📌 **Comando:**

```sql
DELETE FROM usuarios WHERE id = 2;
```

💡 **Explicação:**

- Remove o registro do usuário com `id = 2`.

📌 **Dica:** Certifique-se de usar filtros como `WHERE` para evitar deletar registros acidentalmente.

---

### **Deletando Todos os Dados**

📌 **Comando:**

```sql
DELETE FROM usuarios;
```

💡 **Explicação:**

- Remove todos os registros da tabela, mas a estrutura da tabela permanece.

---

### **🚀 Exercícios Práticos**

1. **Criação:**
    - Adicione 3 novos usuários à tabela `usuarios`.
2. **Leitura:**
    - Liste todos os registros da tabela.
    - Liste apenas os usuários com idade menor que 30.
3. **Atualização:**
    - Atualize o e-mail de um usuário específico.
    - Altere a idade de todos os usuários para 40.
4. **Deleção:**
    - Remova um registro usando o `id`.
    - Exclua todos os registros da tabela, mas mantenha a estrutura da tabela.




