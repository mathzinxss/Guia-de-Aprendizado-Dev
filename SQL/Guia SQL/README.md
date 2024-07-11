# **Guia SQL**

***

## Sumário

1. [Introdução aos Bancos de Dados](#Introdução-aos-Bancos-de-Dados)
    * Definição e Importância dos Bancos de Dados
    * Tipos de Bancos de Dados
    * História dos Bancos de Dados
2. [Linguagem SQL](#Linguagem-SQL)
    + Introdução ao SQL
    + Tipos de Comandos SQL
    + Como rodar o SQL em um site (sqlfiddle)

3. [Criação e Manipulação de Tabelas](#Criação-e-Manipulação-de-Tabelas)
    - Comando CREATE, ALTER, DROP
        - Create table
        - Alter table
        - Drop table
    - Tipos de Dados em SQL
    - Restrições (Constraints) e Chaves Primitivas/Estrangeiras
        - PRIMARY KEY
        - FOREIGN KEY
        - UNIQUE
        - NOT NULL
        - CHECK
    - Exercícios Praticos
4. [Inserção, Atualização e Exclusão de Dados](#Inserção,-Atualização-e-Exclusão-de-Dados)
    - Comando INSERT, UPDATE, DELETE
    - Insert Into
    - Update
    - Delete
    - Gerenciamento de Transações
        + COMMIT
        + ROLLBACK
    - Exercícios Práticos
5. [Consultas e Recuperação de Dados](#Consultas-e-Recuperação-de-Dados)
    - Comando SELECT
    - Cláusulas WHERE, ORDER BY, GROUP BY, HAVING
        + WHERE
        + ORDER BY
        + GROUP BY
        + HAVING
    - Funções Agregadas
        + COUNT
        + SUM
        + AVG
        + MAX
        + MIN
    - Junções (JOINs)
        + INNER JOIN
        + LEFT JOIN
        + RIGHT JOIN
        + FULL JOIN
        + Subconsultas e Consultas Aninhadas
        + Exercícios Práticos
6. [Índices e Performance](#Índices-e-Performance)
    - O que são Índices e como eles funcionam
    - Tipos de Índices
    - Criação e Gerenciamento de Índices
        + Criando Índices
        + Removendo Índices
    - Considerações sobre Índices
    - Análise de Desempenho e Otimização de Consultas
        + Analisando Consultas com EXPLAIN
        + Tecnicas de Otimização 
    - Exercícios Práticos
7. [Projetos Práticos: Sistema de Gerenciamento de Restaurante](#Projetos-Práticos-Sistema-de-Gerenciamento-de-Restaurante)
    + Requisitos do Projeto
    + Estrutura do Banco de Dados
    + Tabela Funcionários
    + Tabela Clientes
    + Tabela Cardápio
    + Tabela Reservas
    + Tabela Pedidos
    + Tabela Itens de Pedidos
    + Funcionalidade do Sistema
    + Inserção de Dados
    + Consultas e Relatórios
    + Atualização de Dados
    + Exclusão de Dados
    + Desafios Avançados 

***

## Introdução aos Bancos de Dados

### Definição e Importância dos Bancos de Dados 📚

Um banco de dados é uma coleção organizada de dados que pode ser facilmente acessada, gerenciada e atualizada. Em termos simples, é um lugar onde você armazena suas informações de forma estruturada para que possa recuperá-las e manipulá-las conforme necessário. A importância dos bancos de dados na era digital não pode ser subestimada:

- **Armazenamento Centralizado**: Armazena todos os dados em um local único, facilitando o acesso e a gestão.
- **Eficiência**: Melhora a eficiência ao permitir a recuperação rápida de dados.
- **Segurança**: Protege dados sensíveis através de várias camadas de segurança.
- **Integridade**: Mantém a integridade dos dados garantindo que estão corretos e consistentes.
- **Escalabilidade**: Permite o crescimento conforme a quantidade de dados aumenta.

### Tipos de Bancos de Dados 🗃️

1. **Relacionais**:
    - **Exemplo**: MySQL, PostgreSQL, SQLite.
    - **Características**: Utilizam tabelas para armazenar dados, onde cada tabela é uma coleção de registros. Usam SQL (Structured Query Language) para manipulação e consulta de dados.

    ```sql
    CREATE TABLE Usuarios (
    id INT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100)
    );
    ```

2. **Não Relacionais (NoSQL)**:
    - **Exemplo**: MongoDB, Cassandra, Redis.
    - **Características**: Não usam tabelas relacionais. Podem usar documentos, pares chave-valor, colunas largas ou grafos para armazenar dados. Mais flexíveis em termos de estrutura de dados.
    
    ```json
    {
        "id": 1,
        "nome": "João",
        "email": "joao@example.com"
    }
    ```
    
3. **Hierárquicos**:
    - **Exemplo**: IBM Information Management System (IMS).
    - **Características**: Dados organizados em uma estrutura de árvore. Cada registro tem um único pai e zero ou mais filhos.
4. **Em Rede**:
    - **Exemplo**: Integrated Data Store (IDS).
    - **Características**: Permite que um registro tenha múltiplas relações com outros registros, formando uma rede.

### História dos Bancos de Dados 📜

Os bancos de dados evoluíram significativamente ao longo do tempo:

1. **Anos 1960**: Surgem os primeiros bancos de dados hierárquicos e em rede.
2. **Anos 1970**: Introdução dos bancos de dados relacionais por Edgar F. Codd. SQL começa a ser desenvolvido.
3. **Anos 1980**: SQL se torna o padrão de fato para bancos de dados relacionais. Surgem sistemas de gerenciamento de banco de dados (SGBD) comerciais como Oracle e IBM DB2.
4. **Anos 2000**: Ascensão dos bancos de dados NoSQL para lidar com grandes volumes de dados não estruturados e distribuídos. Bancos de dados em nuvem ganham popularidade.

## Linguagem SQL

### Introdução ao SQL 📝

SQL (Structured Query Language) é a linguagem padrão para interagir com bancos de dados relacionais. Com SQL, você pode criar, ler, atualizar e excluir dados em um banco de dados. É essencial para qualquer pessoa que queira trabalhar com bancos de dados relacionais.

### Tipos de Comandos SQL 📊

1. **DDL (Data Definition Language)**: Usado para definir e modificar a estrutura do banco de dados. Exemplos: `CREATE`, `ALTER`, `DROP`.
    
    ```sql
    CREATE TABLE Produtos (
        id INT PRIMARY KEY,
        nome VARCHAR(100),
        preco DECIMAL(10, 2)
    );
    ```
    
2. **DML (Data Manipulation Language)**: Usado para manipular os dados dentro das tabelas. Exemplos: `INSERT`, `UPDATE`, `DELETE`.
    
    ```sql
    INSERT INTO Produtos (id, nome, preco) VALUES (1, 'Notebook', 2999.99);
    ```
    
3. **DCL (Data Control Language)**: Usado para controlar o acesso aos dados no banco de dados. Exemplos: `GRANT`, `REVOKE`.
    
    ```sql
    GRANT SELECT ON Produtos TO usuario;
    ```
    

### Como Rodar o SQL em um Site (sqlfiddle) 🌐

Uma ótima maneira de praticar SQL sem precisar configurar um servidor de banco de dados localmente é utilizando o site [SQL Fiddle](http://sqlfiddle.com/). Veja como:

1. Acesse o [SQL Fiddle](http://sqlfiddle.com/).
2. Selecione o tipo de banco de dados que você quer usar (por exemplo, MySQL, PostgreSQL).
3. Pronto, agora você tem um BDD para praticar.

## Criação e Manipulação de Tabelas

### Comandos CREATE, ALTER, DROP 📋

Os comandos DDL (Data Definition Language) são usados para definir e modificar a estrutura das tabelas no banco de dados. Vamos explorar cada um deles em detalhes.

#### CREATE TABLE 🛠️

O comando `CREATE TABLE` é usado para criar novas tabelas no banco de dados. Aqui está a sintaxe básica:

```sql
CREATE TABLE NomeDaTabela (
    coluna1 tipo_dado restrições,
    coluna2 tipo_dado restrições,
    ...
);
```

**Exemplo:**

```sql
CREATE TABLE Usuarios (
    id INT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    data_nascimento DATE,
    cidade VARCHAR(50),
    estado CHAR(2),
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### ALTER TABLE 🔄

O comando `ALTER TABLE` é usado para modificar a estrutura de uma tabela existente. Você pode adicionar, modificar ou remover colunas, bem como adicionar ou remover restrições.

**Adicionar Coluna:**

```sql
ALTER TABLE Usuarios ADD telefone VARCHAR(15);
```

**Modificar Coluna:**

```sql
ALTER TABLE Usuarios MODIFY email VARCHAR(150) NOT NULL;
```

**Remover Coluna:**

```sql
ALTER TABLE Usuarios DROP COLUMN estado;
```

#### DROP TABLE ❌

O comando `DROP TABLE` é usado para excluir uma tabela e todos os seus dados do banco de dados.

```sql
DROP TABLE Usuarios;
```

### Tipos de Dados em SQL 🗃️

Selecionar o tipo de dado correto para cada coluna é crucial para a eficiência e integridade do banco de dados. Aqui estão os tipos de dados mais comuns em SQL:

- **INT**: Números inteiros. Exemplo: `INT`, `SMALLINT`, `BIGINT`.
- **FLOAT, DOUBLE**: Números de ponto flutuante. Exemplo: `FLOAT`, `DOUBLE`.
- **DECIMAL**: Números decimais precisos. Exemplo: `DECIMAL(10, 2)` (10 dígitos no total, 2 após o ponto decimal).
- **CHAR, VARCHAR**: Strings de comprimento fixo e variável. Exemplo: `CHAR(10)`, `VARCHAR(255)`.
- **TEXT**: Texto longo.
- **DATE, TIME, DATETIME, TIMESTAMP**: Data e hora. Exemplo: `DATE`, `TIME`, `TIMESTAMP`.
- **BOOLEAN**: Valores booleanos (`TRUE` ou `FALSE`).

**Exemplo:**

```sql
CREATE TABLE Produtos (
    id INT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    quantidade INT DEFAULT 0,
    descricao TEXT,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Restrições (Constraints) e Chaves Primárias/Estrangeiras 🔑

As restrições são regras aplicadas às colunas para garantir a integridade dos dados.

#### PRIMARY KEY 🔑

A chave primária é uma coluna ou conjunto de colunas que identifica exclusivamente cada registro na tabela.

```sql
CREATE TABLE Clientes (
    id INT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE
);
```

#### FOREIGN KEY 🔗

A chave estrangeira é uma coluna que cria uma relação entre duas tabelas. Ela deve referenciar uma chave primária em outra tabela.

```sql
CREATE TABLE Pedidos (
    id INT PRIMARY KEY,
    cliente_id INT,
    data_pedido DATE,
    FOREIGN KEY (cliente_id) REFERENCES Clientes(id)
);
```

#### UNIQUE

Garante que todos os valores em uma coluna sejam distintos.

```sql
CREATE TABLE Usuarios (
    id INT PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(100) UNIQUE
);
```

#### NOT NULL

Garante que uma coluna não pode conter valores nulos.

```sql
CREATE TABLE Produtos (
    id INT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL
);
```

#### CHECK

Garante que todos os valores em uma coluna satisfaçam uma condição específica.

```sql
CREATE TABLE Funcionarios (
    id INT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    salario DECIMAL(10, 2) CHECK (salario > 0)
);
```

### Exercícios Práticos 📓

1. **Criação de Tabela**: Crie uma tabela chamada `Livros` com as seguintes colunas: `id` (INT, PRIMARY KEY), `titulo` (VARCHAR(255), NOT NULL), `autor` (VARCHAR(100)), `ano_publicacao` (YEAR), `preco` (DECIMAL(10, 2), CHECK (preco > 0)).
2. **Modificação de Tabela**: Adicione uma coluna `estoque` (INT, DEFAULT 0) à tabela `Livros`. Em seguida, modifique a coluna `preco` para que aceite valores nulos.
3. **Criação de Chaves Estrangeiras**: Crie uma tabela chamada `Emprestimos` com as seguintes colunas: `id` (INT, PRIMARY KEY), `livro_id` (INT), `cliente_id` (INT), `data_emprestimo` (DATE), `data_devolucao` (DATE), adicionando as chaves estrangeiras `livro_id` referenciando `id` em `Livros` e `cliente_id` referenciando `id` em `Clientes`.
4. **Exclusão de Tabela**: Exclua a tabela `Emprestimos` criada no exercício anterior.
5. **Inserção de Dados**: Insira alguns registros na tabela `Livros`, incluindo pelo menos um livro de cada um dos seguintes autores: J.K. Rowling, J.R.R. Tolkien e George R.R. Martin.
6. **Atualização de Dados**: Atualize o `estoque` de todos os livros na tabela `Livros` para 10.
7. **Exclusão de Dados**: Exclua o livro mais antigo da tabela `Livros`.
8. **Consulta de Dados**: Faça uma consulta que retorne todos os livros na tabela `Livros` que foram publicados após o ano 2000.

---

## Inserção, Atualização e Exclusão de Dados

### Comandos INSERT, UPDATE, DELETE 📋

A manipulação de dados é uma das operações mais comuns em SQL. Vamos explorar como inserir, atualizar e excluir dados nas tabelas de um banco de dados.

### INSERT INTO 🛠️

O comando `INSERT INTO` é usado para adicionar novos registros a uma tabela.

**Sintaxe Básica:**

```sql
INSERT INTO NomeDaTabela (coluna1, coluna2, ...) VALUES (valor1, valor2, ...);
```

**Exemplo:**

```sql
INSERT INTO Clientes (id, nome, email, data_registro) VALUES (1, 'João Silva', 'joao@example.com', '2023-01-15');
```

Você também pode inserir vários registros de uma vez:

```sql
INSERT INTO Clientes (id, nome, email, data_registro) VALUES
(2, 'Maria Oliveira', 'maria@example.com', '2023-02-20'),
(3, 'Pedro Santos', 'pedro@example.com', '2023-03-10');
```

### UPDATE 🔄

O comando `UPDATE` é usado para modificar os dados existentes em uma tabela.

**Sintaxe Básica:**

```sql
UPDATE NomeDaTabela SET coluna1 = valor1, coluna2 = valor2, ... WHERE condição;

```

**Exemplo:**

```sql
UPDATE Clientes SET email = 'novoemail@example.com' WHERE id = 1;

```

**Exemplo mais complexo:**

```sql
UPDATE Produtos SET preco = preco * 1.10 WHERE categoria = 'Eletrônicos';
```

### DELETE ❌

O comando `DELETE` é usado para remover registros de uma tabela.

**Sintaxe Básica:**

```sql
DELETE FROM NomeDaTabela WHERE condição;

```

**Exemplo:**

```sql
DELETE FROM Clientes WHERE id = 3;
```

Para excluir todos os registros de uma tabela:

```sql
DELETE FROM Clientes;
```

### Gerenciamento de Transações 💼

Transações são um conjunto de operações que devem ser executadas como uma unidade única. O gerenciamento de transações garante que todas as operações sejam concluídas com sucesso ou que nenhuma alteração seja feita no banco de dados.

#### COMMIT ✅

O comando `COMMIT` salva todas as alterações feitas durante a transação.

```sql
START TRANSACTION;
UPDATE Produtos SET preco = preco * 0.90 WHERE categoria = 'Promoção';
DELETE FROM Produtos WHERE estoque = 0;
COMMIT;
```

#### ROLLBACK ↩️

O comando `ROLLBACK` desfaz todas as alterações feitas durante a transação, retornando o banco de dados ao estado anterior ao início da transação.

```sql
START TRANSACTION;
UPDATE Produtos SET preco = preco * 0.90 WHERE categoria = 'Promoção';
DELETE FROM Produtos WHERE estoque = 0;
ROLLBACK;
```

### Exercícios Práticos 📓

1. **Inserção de Dados**: Insira cinco registros na tabela `Produtos` com valores realistas para as colunas `id`, `nome`, `preco`, `quantidade`, `descricao` e `criado_em`.
2. **Atualização de Dados**: Atualize o preço de todos os produtos na tabela `Produtos` em 15%. Garanta que a atualização só afete os produtos que têm um preço superior a R$ 100,00.
3. **Exclusão de Dados**: Exclua todos os clientes da tabela `Clientes` que não fizeram nenhum pedido. Para isso, você pode usar uma subconsulta para identificar esses clientes.
4. **Transações**: Crie uma transação que insira um novo produto na tabela `Produtos`, atualize o estoque de um produto existente e, em seguida, execute um `ROLLBACK` para desfazer todas as operações.
5. **Inserção de Dados com Subconsultas**: Insira um novo registro na tabela `Pedidos` com um `cliente_id` e `livro_id` existentes, usando subconsultas para selecionar esses valores. Defina a `data_emprestimo` para a data atual e a `data_devoluçao` para 14 dias a partir de agora.
6. **Atualização de Dados Baseada em Outra Tabela**: Na tabela `Clientes`, atualize a coluna `ultimo_pedido` para a data do pedido mais recente de cada cliente na tabela `Pedidos`.
7. **Exclusão de Dados em Cascata**: Exclua um cliente da tabela `Clientes` e todos os seus pedidos associados da tabela `Pedidos`.
8. **Transações com Controle de Erros**: Crie uma transação que atualize o estoque de um produto na tabela `Produtos`, insira um novo pedido para esse produto na tabela `Pedidos`, e reverta todas as operações se o estoque se tornar negativo.

---

## Consultas e Recuperação de Dados

### Comando SELECT 🔍

O comando `SELECT` é usado para consultar e recuperar dados de uma tabela. É a base das operações de leitura em SQL.

**Sintaxe Básica:**

```sql
SELECT coluna1, coluna2, ... FROM NomeDaTabela;
```

**Exemplo:**

```sql
SELECT nome, email FROM Clientes;
```

Para selecionar todas as colunas, você pode usar o asterisco (`*`):

```sql
SELECT * FROM Clientes;
```

### Cláusulas WHERE, ORDER BY, GROUP BY, HAVING 📑

Estas cláusulas ajudam a refinar e organizar os dados retornados pelas consultas.

#### WHERE

A cláusula `WHERE` filtra os registros com base em uma condição específica.

**Sintaxe:**

```sql
SELECT * FROM Clientes WHERE cidade = 'São Paulo';
```

#### ORDER BY

A cláusula `ORDER BY` ordena os resultados com base em uma ou mais colunas.

**Sintaxe:**

```sql
SELECT * FROM Produtos ORDER BY preco DESC;
```

#### GROUP BY

A cláusula `GROUP BY` agrupa os registros que têm valores idênticos em colunas especificadas.

**Sintaxe:**

```sql
SELECT cidade, COUNT(*) FROM Clientes GROUP BY cidade;
```

#### HAVING

A cláusula `HAVING` é usada para filtrar grupos de registros após a aplicação da cláusula `GROUP BY`.

**Sintaxe:**

```sql
SELECT cidade, COUNT(*) FROM Clientes GROUP BY cidade HAVING COUNT(*) > 1;
```

### Funções Agregadas 📊

As funções agregadas realizam cálculos em um conjunto de valores e retornam um único valor.

#### COUNT

Conta o número de registros.

**Exemplo:**

```sql
SELECT COUNT(*) FROM Clientes;
```

#### SUM

Soma os valores de uma coluna.

**Exemplo:**

```sql
SELECT SUM(preco) FROM Produtos;
```

#### AVG

Calcula a média dos valores de uma coluna.

**Exemplo:**

```sql
SELECT AVG(preco) FROM Produtos;
```

#### MAX

Retorna o valor máximo de uma coluna.

**Exemplo:**

```sql
SELECT MAX(preco) FROM Produtos;
```

#### MIN

Retorna o valor mínimo de uma coluna.

**Exemplo:**

```sql
SELECT MIN(preco) FROM Produtos;
```

### Junções (JOINs) 🔗

As junções são usadas para combinar registros de duas ou mais tabelas com base em uma coluna relacionada entre elas.

#### INNER JOIN

Retorna registros que têm correspondências em ambas as tabelas.

**Sintaxe:**

```sql
SELECT Pedidos.id, Clientes.nome FROM Pedidos
INNER JOIN Clientes ON Pedidos.cliente_id = Clientes.id;

```

#### LEFT JOIN

Retorna todos os registros da tabela da esquerda e os registros correspondentes da tabela da direita. Se não houver correspondência, os resultados da tabela da direita serão nulos.

**Sintaxe:**

```sql
SELECT Pedidos.id, Clientes.nome FROM Pedidos
LEFT JOIN Clientes ON Pedidos.cliente_id = Clientes.id;

```

#### RIGHT JOIN

Retorna todos os registros da tabela da direita e os registros correspondentes da tabela da esquerda. Se não houver correspondência, os resultados da tabela da esquerda serão nulos.

**Sintaxe:**

```sql
SELECT Pedidos.id, Clientes.nome FROM Pedidos
RIGHT JOIN Clientes ON Pedidos.cliente_id = Clientes.id;

```

#### FULL JOIN

Retorna registros quando há uma correspondência em uma das tabelas. Retorna todos os registros quando há uma correspondência em uma das tabelas.

**Sintaxe:**

```sql
SELECT Pedidos.id, Clientes.nome FROM Pedidos
FULL OUTER JOIN Clientes ON Pedidos.cliente_id = Clientes.id;

```

#### Subconsultas e Consultas Aninhadas 🌀

Subconsultas são consultas dentro de outras consultas. Elas são usadas para realizar operações mais complexas.

**Exemplo:**

```sql
SELECT nome FROM Clientes WHERE id IN (SELECT cliente_id FROM Pedidos WHERE data_pedido > '2023-01-01');

```

#### Exercícios Práticos 📓

1. **Consulta Simples**: Escreva uma consulta para selecionar todos os produtos cujo preço seja maior que R$ 50,00 e ordene os resultados pelo preço em ordem decrescente.
2. **Funções Agregadas**: Escreva uma consulta que retorne a média de preços dos produtos na tabela `Produtos`.
3. **Junção de Tabelas**: Escreva uma consulta que liste todos os pedidos juntamente com os nomes dos clientes que os fizeram, usando `INNER JOIN`.
4. **Subconsulta**: Escreva uma consulta para selecionar os nomes de todos os clientes que fizeram pelo menos um pedido em 2023.
5. **Grupo e Agregação**: Escreva uma consulta para contar quantos clientes existem em cada cidade e ordene o resultado pelo número de clientes em ordem decrescente.
6. **Filtros Avançados**: Escreva uma consulta para selecionar todos os produtos que tenham a palavra "notebook" no nome, usando o operador LIKE.
7. **Funções de Data**: Escreva uma consulta que retorne todos os pedidos feitos no último mês.
8. **Atualização Baseada em Consulta**: Escreva uma consulta que aumente o preço de todos os produtos da categoria "Eletrônicos" em 10%.
9. **Subconsulta Complexa**: Escreva uma consulta que retorne os nomes dos clientes que gastaram mais de R$ 1000,00 em pedidos.
10. **Junção de Múltiplas Tabelas**: Escreva uma consulta que retorne uma lista de todos os pedidos, com o nome do cliente e o nome do produto, usando múltiplas junções.

---

## Índices e Performance

### O que são Índices e como eles funcionam 📊

Os índices são estruturas de dados especiais que melhoram a velocidade das operações de consulta em uma tabela de banco de dados. Eles são semelhantes aos índices em livros, que permitem localizar informações rapidamente sem precisar percorrer todas as páginas. Em um banco de dados, um índice é criado em uma ou mais colunas de uma tabela e permite que o SGBD (Sistema de Gerenciamento de Banco de Dados) localize rapidamente as linhas correspondentes.

**Exemplo de Criação de Índice:**

```sql
CREATE INDEX idx_nome ON Clientes(nome);
```

Este índice acelera as consultas que filtram ou ordenam pela coluna `nome`.

### Tipos de Índices

1. **Índice Simples**: Criado em uma única coluna.
    
    ```sql
    CREATE INDEX idx_email ON Usuarios(email);
    ```
    
2. **Índice Composto**: Criado em duas ou mais colunas.
    
    ```sql
    CREATE INDEX idx_nome_email ON Usuarios(nome, email);
    ```
    
3. **Índice Único**: Garante que todos os valores em uma coluna ou conjunto de colunas sejam únicos.
    
    ```sql
    CREATE UNIQUE INDEX idx_email_unico ON Usuarios(email);
    ```
    
4. **Índice de Texto Completo**: Usado para realizar pesquisas em grandes textos.
    
    ```sql
    CREATE FULLTEXT INDEX idx_descricao ON Produtos(descricao);
    ```
    

### Criação e Gerenciamento de Índices 🛠️

#### Criando Índices

Para criar um índice, use o comando `CREATE INDEX`. A sintaxe básica é:

```sql
CREATE INDEX nome_do_indice ON NomeDaTabela(coluna);
```

**Exemplo:**

```sql
CREATE INDEX idx_preco ON Produtos(preco);
```

#### Removendo Índices

Para remover um índice, use o comando `DROP INDEX`.

**Exemplo:**

```sql
DROP INDEX idx_preco ON Produtos;
```

### Considerações sobre Índices

- **Benefícios**: Aumentam a velocidade das consultas de leitura.
- **Desvantagens**: Podem diminuir a velocidade das operações de inserção, atualização e exclusão, pois os índices também precisam ser atualizados.
- **Melhores Práticas**: Crie índices em colunas que são frequentemente usadas em cláusulas `WHERE`, `JOIN` e `ORDER BY`.

### Análise de Desempenho e Otimização de Consultas ⚙️

Para garantir que suas consultas SQL sejam eficientes, é importante analisar e otimizar o desempenho das mesmas.

#### Analisando Consultas com EXPLAIN

A maioria dos SGBDs oferece uma maneira de analisar como uma consulta será executada. Em MySQL, por exemplo, você pode usar o comando `EXPLAIN`.

**Exemplo:**

```sql
EXPLAIN SELECT * FROM Produtos WHERE preco > 100;
```

Este comando retornará um plano de execução que mostra como o SGBD pretende executar a consulta, incluindo informações sobre quais índices serão usados.

#### Técnicas de Otimização

1. **Usar Índices Apropriadamente**: Certifique-se de que as colunas usadas em cláusulas `WHERE`, `JOIN` e `ORDER BY` tenham índices.
2. **Evitar Seleção de Colunas Desnecessárias**: Não use `SELECT *` a menos que precise de todas as colunas. Em vez disso, selecione apenas as colunas necessárias.
    
    ```sql
    SELECT nome, preco FROM Produtos WHERE preco > 100;
    ```
    
3. **Usar Junções com Sabedoria**: Certifique-se de que as colunas usadas em junções tenham índices e minimize o número de junções complexas.
    
    ```sql
    SELECT Pedidos.id, Clientes.nome FROM Pedidos
    INNER JOIN Clientes ON Pedidos.cliente_id = Clientes.id;
    ```
    
4. **Evitar Subconsultas Não Necessárias**: Subconsultas podem ser menos eficientes que junções. Considere reescrever subconsultas como junções quando possível.
    
    ```sql
    -- Subconsulta
    SELECT nome FROM Clientes WHERE id IN (SELECT cliente_id FROM Pedidos WHERE data_pedido > '2023-01-01');
    
    -- Reescrita como junção
    SELECT DISTINCT Clientes.nome FROM Clientes
    INNER JOIN Pedidos ON Clientes.id = Pedidos.cliente_id
    WHERE Pedidos.data_pedido > '2023-01-01';
    ```
    
5. **Usar Limites em Consultas de Grandes Volumes**: Para consultas que retornam muitos registros, use `LIMIT` para restringir o número de resultados.
    
    ```sql
    SELECT nome FROM Produtos WHERE preco > 100 LIMIT 10;
    ```
    

### Exercícios Práticos 📓

1. **Criação de Índice**: Crie um índice na coluna `data_pedido` da tabela `Pedidos`. Em seguida, escreva uma consulta que utilize esse índice para selecionar todos os pedidos feitos após uma data específica.
2. **Análise de Desempenho**: Use o comando `EXPLAIN` para analisar a consulta que seleciona todos os produtos com preço acima de R$ 50,00. Interprete o plano de execução e sugira melhorias.
3. **Otimização de Consulta**: Reescreva uma consulta que usa uma subconsulta para usar uma junção, e verifique se há melhorias no desempenho usando `EXPLAIN`.
4. **Remoção de Índice**: Remova um índice que não esteja sendo utilizado frequentemente em consultas, e observe o impacto na performance das operações de inserção, atualização e exclusão.

---

## Projetos Práticos: Sistema de Gerenciamento de Restaurante

### Requisitos do Projeto

Você deve criar um sistema completo para gerenciar as operações de um restaurante. O sistema deve incluir funcionalidades para gerenciar funcionários, clientes, reservas, pedidos e o cardápio. Abaixo estão os requisitos detalhados para cada parte do sistema.

### Estrutura do Banco de Dados

### Tabela Funcionários 🧑‍🍳

1. Crie uma tabela `Funcionarios` com as seguintes colunas:
    - `id` (INT, PRIMARY KEY)
    - `nome` (VARCHAR(100), NOT NULL)
    - `cargo` (VARCHAR(50), NOT NULL)
    - `salario` (DECIMAL(10, 2), NOT NULL)
    - `data_contratacao` (DATE, NOT NULL)

### Tabela Clientes 🍽️

1. Crie uma tabela `Clientes` com as seguintes colunas:
    - `id` (INT, PRIMARY KEY)
    - `nome` (VARCHAR(100), NOT NULL)
    - `email` (VARCHAR(100), UNIQUE, NOT NULL)
    - `telefone` (VARCHAR(15), NOT NULL)
    - `data_registro` (DATE, DEFAULT CURRENT_DATE)

### Tabela Cardapio 📜

1. Crie uma tabela `Cardapio` com as seguintes colunas:
    - `id` (INT, PRIMARY KEY)
    - `nome` (VARCHAR(100), NOT NULL)
    - `descricao` (TEXT)
    - `preco` (DECIMAL(10, 2), NOT NULL)
    - `categoria` (VARCHAR(50), NOT NULL)

### Tabela Reservas 📅

1. Crie uma tabela `Reservas` com as seguintes colunas:
    - `id` (INT, PRIMARY KEY)
    - `cliente_id` (INT, FOREIGN KEY, NOT NULL, referencia `Clientes(id)`)
    - `data_reserva` (DATE, NOT NULL)
    - `hora_reserva` (TIME, NOT NULL)
    - `numero_pessoas` (INT, NOT NULL)

### Tabela Pedidos 🧾

1. Crie uma tabela `Pedidos` com as seguintes colunas:
    - `id` (INT, PRIMARY KEY)
    - `cliente_id` (INT, FOREIGN KEY, NOT NULL, referencia `Clientes(id)`)
    - `data_pedido` (DATE, NOT NULL)
    - `hora_pedido` (TIME, NOT NULL)
    - `total` (DECIMAL(10, 2), NOT NULL)

### Tabela Itens_Pedido 🥘

1. Crie uma tabela `Itens_Pedido` com as seguintes colunas:
    - `id` (INT, PRIMARY KEY)
    - `pedido_id` (INT, FOREIGN KEY, NOT NULL, referencia `Pedidos(id)`)
    - `cardapio_id` (INT, FOREIGN KEY, NOT NULL, referencia `Cardapio(id)`)
    - `quantidade` (INT, NOT NULL)
    - `preco_unitario` (DECIMAL(10, 2), NOT NULL)

### Funcionalidades do Sistema

### Inserção de Dados 📋

1. Insira dados fictícios nas tabelas `Funcionarios`, `Clientes`, `Cardapio`, `Reservas`, `Pedidos` e `Itens_Pedido` para testar o sistema.

### Consultas e Relatórios 📊

1. **Consultar Funcionários por Cargo**: Escreva uma consulta que retorne todos os funcionários de um cargo específico, ordenados por data de contratação.
2. **Consultar Reservas de um Cliente**: Escreva uma consulta que retorne todas as reservas de um cliente específico, ordenadas por data e hora.
3. **Consultar Pedidos de um Cliente**: Escreva uma consulta que retorne todos os pedidos de um cliente específico, incluindo os itens do pedido, quantidade e preço total.
4. **Consultar Receita Total**: Escreva uma consulta que calcule a receita total do restaurante em um período específico.
5. **Consultar Itens do Cardápio mais Pedidos**: Escreva uma consulta que retorne os itens do cardápio mais pedidos, ordenados por quantidade.

### Atualização de Dados 🔄

1. **Aumentar Salário dos Funcionários**: Escreva uma consulta para aumentar o salário de todos os funcionários de um cargo específico em um determinado percentual.
2. **Atualizar Preço de Itens do Cardápio**: Escreva uma consulta para atualizar o preço de todos os itens do cardápio de uma determinada categoria.

### Exclusão de Dados ❌

1. **Excluir Reservas Passadas**: Escreva uma consulta para excluir todas as reservas cuja data já passou.
2. **Excluir Clientes Sem Pedidos**: Escreva uma consulta para excluir todos os clientes que nunca fizeram um pedido.

### Desafios Avançados 🏆

1. **Relatório de Desempenho dos Funcionários**: Escreva uma consulta que calcule o total de pedidos atendidos por cada funcionário (garçom) e ordene por desempenho.
2. **Relatório de Faturamento por Categoria**: Escreva uma consulta que calcule o faturamento total dividido por categoria de item do cardápio.
3. **Relatório de Reservas por Mês**: Escreva uma consulta que retorne o número de reservas feitas a cada mês em um ano específico.
4. **Análise de Cliente VIP**: Escreva uma consulta para identificar clientes VIP (aqueles que fizeram mais de X pedidos ou gastaram mais de Y no último ano).

Esses requisitos cobrem a criação de um sistema complexo e robusto para gerenciamento de um restaurante, incluindo a definição de um esquema de banco de dados completo, inserção e manipulação de dados, e a criação de consultas para relatórios detalhados. Boa sorte! 🍀
