# **Dia 22/01 - ORM**

## 🌟 **Bem-vindo ao mundo do ORM!**

Manipular bancos de dados usando SQL é poderoso, mas pode ser trabalhoso quando estamos desenvolvendo aplicações grandes. É aqui que entra o **ORM (Object-Relational Mapping)**, uma ferramenta que simplifica o trabalho com bancos de dados relacionais.

Neste tópico, você aprenderá:

1. O que é ORM e para que serve.
2. Como instalar e configurar o **Sequelize**, um dos ORMs mais usados no JavaScript.
3. Como realizar operações CRUD usando o Sequelize.

---

### **📌 O que é ORM?**

**ORM (Object-Relational Mapping)** é uma técnica que permite interagir com bancos de dados relacionais usando código em vez de escrever comandos SQL diretamente.

💡 **Benefícios do ORM:**

- Reduz a quantidade de SQL que você precisa escrever.
- Oferece validações e associações entre tabelas diretamente no código.
- Torna o código mais legível e fácil de manter.

---

### **📋 Como funciona o ORM?**

O ORM funciona como um tradutor entre o código da aplicação e o banco de dados:

1. Você define modelos (classes) que representam as tabelas do banco de dados.
2. Usa métodos para manipular os dados, como `create()`, `findAll()`, `update()`, e `destroy()`.
3. O ORM converte esses métodos em comandos SQL para o banco de dados executar.

💡 **Exemplo básico:**

Em vez de escrever:

```sql
SELECT * FROM usuarios WHERE idade > 30;
```

No ORM, você escreveria:

```jsx
Usuario.findAll({ where: { idade: { [Op.gt]: 30 } } });
```

---

### **⚙️ Instalando e Configurando o Sequelize**

### **Passo 1: Instalar Dependências**

No terminal, execute:

```bash
npm install sequelize pg pg-hstore
```

💡 **Explicação:**

- `sequelize`: A biblioteca ORM.
- `pg` e `pg-hstore`: Drivers para conectar ao PostgreSQL.

---

### **Passo 2: Configurar o Sequelize**

Crie um arquivo `database.js` na pasta do seu projeto:

```jsx
const { Sequelize } = require('sequelize');

// Conectando ao banco de dados PostgreSQL
const sequelize = new Sequelize('crud', 'postgres', 'senha123', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
```

💡 **Explicação:**

- Substitua `'desafio'`, `'postgres'`, e `'senha123'` com os detalhes do seu banco.
- O parâmetro `dialect` indica o tipo de banco usado (PostgreSQL, neste caso).

---

### **🛠️ Criando um Modelo**

Vamos criar um modelo para representar a tabela `usuarios`.

1. Crie um arquivo chamado `Usuario.js`:
    
    ```jsx
    const { DataTypes } = require('sequelize');
    const sequelize = require('./database');
    
    const Usuario = sequelize.define('Usuario', {
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      idade: {
        type: DataTypes.INTEGER,
      },
    });
    
    module.exports = Usuario;
    ```
    

💡 **Explicação:**

- `DataTypes.STRING`: Define o tipo de dado da coluna como texto.
- `allowNull: false`: Indica que o campo é obrigatório.
- `unique: true`: Garante que os e-mails sejam únicos.

---

### **🔄 Sincronizando com o Banco**

Antes de realizar operações, precisamos garantir que o modelo esteja sincronizado com o banco.

1. Crie um arquivo `sync.js` para sincronizar:
    
    ```jsx
    const sequelize = require('./database');
    const Usuario = require('./Usuario');
    
    async function sincronizarBanco() {
      try {
        await sequelize.sync({ force: true }); // Cria as tabelas
        console.log('Banco sincronizado com sucesso!');
      } catch (error) {
        console.error('Erro ao sincronizar o banco:', error);
      } finally {
        sequelize.close();
      }
    }
    
    sincronizarBanco();
    ```
    
2. Execute o arquivo:

```bash
node sync.js
```

---

### **📋 CRUD com Sequelize**

Agora vamos implementar as operações CRUD com o modelo `Usuario`.

---

### **1. Create (Criar)**

Crie um arquivo `create.js`:

### **2. Read (Ler)**

Crie um arquivo `read.js`:

```jsx
const Usuario = require('./Usuario');

async function listarUsuarios() {
  try {
    const usuarios = await Usuario.findAll();
    console.log(usuarios);
  } catch (error) {
    console.error('Erro ao listar usuários:', error);
  }
}

listarUsuarios();
```

💡 **Leitura com Filtros:**

```jsx
const usuariosFiltrados = await Usuario.findAll({
  where: { idade: { [Sequelize.Op.gt]: 30 } },
});
```

---

### **3. Update (Atualizar)**

Crie um arquivo `update.js`:

```jsx
const Usuario = require('./Usuario');

async function atualizarUsuario() {
  try {
    await Usuario.update(
      { idade: 35 },
      { where: { nome: 'João Silva' } }
    );
    console.log('Usuário atualizado com sucesso!');
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
  }
}

atualizarUsuario();
```

---

### **4. Delete (Deletar)**

Crie um arquivo `delete.js`:

```jsx
const Usuario = require('./Usuario');

async function deletarUsuario() {
  try {
    await Usuario.destroy({ where: { nome: 'Maria Oliveira' } });
    console.log('Usuário deletado com sucesso!');
  } catch (error) {
    console.error('Erro ao deletar usuário:', error);
  }
}

deletarUsuario();
```

---

### **🚀 Exercícios Práticos**

1. Crie pelo menos 3 registros na tabela `usuarios`.
2. Liste todos os registros e filtre por usuários com idade maior que 30.
3. Atualize o e-mail de um usuário específico.
4. Exclua um usuário pelo nome.
5. Sincronize um novo campo `telefone` no modelo `Usuario` e teste com dados reais.

---


