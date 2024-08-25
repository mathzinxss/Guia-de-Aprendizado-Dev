# Guia de Node.js

## Índice

1. [Introdução ao Node](#Introdução-ao-Node)
  - O que é Node.js
  - História e Evolução do Node
  - Vantagens e Desvantagens do uso de Node.js
2. [Instalando e Configurando Ambientes](#Instalando-e-Configurando-Ambientes)
  - Escolhendo uma Versão do Node.js
  - Instalação do Node.js
  - Verificação e Instalação
  - Gerenciadores de Pacotes (npm e Yarn)
  - Inicializando um Projeto Node.js com npm ou Yarn
  - Estruturas de Pastas Típicas de um Projeto Node.js
  - Primeiros passos com Node.js
    - Criando seu Primeiro Script
    - Executando o Programa
    - O que Acontece Aqui?
  - Entendendo o Processo
    - Exemplo Prático Adicional
  - Materiais Complementares
3. [Fundamentos do Node](#Fundamentos-do-Node)
  - O que é V8 Engine?
    - Características do V8
  - Event Loop e Assíncronismo
    - Como Funciona o Event Loop
    - Exemplos de Assíncronismo no Node.js
  - Callbacks, Promises e Async/Await
    - Callbacks
    - Problemas do Callback Hell
    - Promises
    - Async/Await
    - Comparação
4. [Módulos e Pacotes](#Módulos-e-Pacotes)
  - Sistema de Módulos do Node.js
    - Importação e Exportação de Módulos
  - Gerenciamento de Pacotes com npm
    - Instalando Pacotes com npm
  - Trabalhando com Módulos Internos
    - Módulo fs
    - Exercícios Práticos
5. [Trabalhando com o Sistema de Arquivos](#Trabalhando-com-o-Sistema-de-Arquivos-fs)
  - Leitura de Arquivos
    - Leitura Assíncrona
    - Leitura Síncrona
  - Escrita de Arquivos
    - Escrita Assíncrona
    - Escrita Síncrona
  - Manipulação de Diretórios
    - Criação de Diretórios
    - Leitura de Diretórios
  - Streams e Buffers
    - Leitura de Arquivos com Streams
    - Escrita de Arquivos com Streams
  - Exercícios Práticos
6. [Trabalhando com HTTP](#Trabalhando-com-HTTP)
  - Criando um Servidor HTTP Básico
  - Tratamento de Requisições e Respostas
    - Requisições (Requests)
    - Respostas (Responses)
  - Middleware e Roteamento
    - Roteamento Básico com http
  - Exercícios Práticos
7. [Express](#Express)
  - Introdução ao Express
    - Instalação do Express
  - Configuração e Primeiros Passos
    - Criando um Servidor Express
  - Roteamento Avançado
    - Definindo Rotas
  - Middleware Customizados
    - Criando um Middleware
  - Tratamento de Erros
    - Exemplos de Middleware de Erro
  - Exercícios Práticos
8. [Bases de Dados](#Bases-de-Dados)
  - Conectando Node.js a Banco de Dados SQL
    - Instalando o Sequelize e o Driver do Banco de Dados
    - Configurando o Sequelize
  - Definindo Modelos e Executando Operações
    - Definindo um Modelo
  - Realizando Operações CRUD
    - Criando Registros
    - Lendo Registros
    - Atualizando Registros
    - Excluíndo Registros
  - Rodando um Banco de Dados Usando Docker
    - Configurando o Docker para PostgreSQL
  - Exercícios Práticos
9. [Autenticação e Autorização](#Autenticação-e-Autorização)
  - Introdução à Autenticação com JWT
    - Componentes de um JWT
  - Instalando Dependências
  - Gerando e Verificando Tokens
    - Gerando um Token
    - Verificando um Token
  - Hashing de Senhas
    - Hashing de Senhas
  - Implementando Autenticação em uma Aplicação Express
    - Configurando Rotas de Autenticação
  - Protegendo Rotas com JWT
    - Middleware de Autenticação
    - Exercícios Práticos

## **Introdução ao Node**

Node.js é um runtime de JavaScript construído no motor V8 do Google Chrome. Diferente dos navegadores, que executam JavaScript no lado do cliente, o Node.js permite que o JavaScript seja executado no lado do servidor. Isso significa que você pode usar a mesma linguagem tanto para a lógica de frontend quanto para a lógica de backend da sua aplicação.

Node.js é conhecido por seu modelo de I/O não bloqueante e orientado a eventos, que o torna uma escolha popular para construir aplicações de rede escaláveis, como servidores web, APIs e aplicações em tempo real.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/f7feecbd-7058-4805-b782-5c71283c99cc/d4618b97-f2a0-4c87-a97a-d40aea5d311d/Untitled.png)

### **História e evolução do Node.js**

Node.js foi criado por Ryan Dahl em 2009. A motivação por trás do Node.js foi a necessidade de construir aplicações de alta performance que pudessem lidar com um grande número de conexões simultâneas. Antes do Node.js, as soluções de servidores tradicionais, como Apache e IIS, utilizavam um modelo de thread, que não era tão eficiente em termos de performance e escalabilidade.

### **Vantagens e desvantagens do uso de Node.js**

**Vantagens**

1. **Performance Alta**: O Node.js é construído sobre o motor V8 do Google, que é extremamente rápido na execução de JavaScript.
2. **Escalabilidade**: Devido ao seu modelo de I/O não bloqueante, o Node.js pode lidar com um grande número de conexões simultâneas de forma eficiente.
3. **Unificação do Stack**: Com o Node.js, é possível usar JavaScript tanto no frontend quanto no backend, facilitando o desenvolvimento full-stack.
4. **Grande Comunidade**: O Node.js possui uma comunidade ativa e um vasto ecossistema de pacotes disponíveis através do npm.
5. **Real-time**: Perfeito para aplicações em tempo real, como chats e jogos online.

**Desvantagens**

1. **Modelo Assíncrono**: O modelo de programação assíncrona pode ser desafiador para desenvolvedores que não estão familiarizados com ele.
2. **Single-threaded**: Embora o Node.js possa lidar com muitas conexões simultâneas, ele ainda é single-threaded, o que pode ser uma limitação para algumas tarefas computacionais pesadas.
3. **Callback Hell**: Sem um gerenciamento adequado, o uso extensivo de callbacks pode tornar o código difícil de manter e ler, embora o uso de Promises e async/await tenha mitigado esse problema.

[Voltar ao Início ⬆️](#Índice)

## **Instalando e Configurando Ambientes**

Preparar seu ambiente de desenvolvimento é o primeiro passo prático para começar a criar aplicações backend incríveis. Vamos lá! 🚀

### **Escolhendo uma Versão do Node.js**

O Node.js possui várias versões disponíveis, cada uma com suas próprias características e funcionalidades. Duas versões principais são amplamente utilizadas:

- **LTS (Long-Term Support)**: Esta versão é recomendada para a maioria dos projetos de produção, pois recebe suporte a longo prazo e atualizações de segurança regulares.
- **Current**: Esta versão contém as funcionalidades mais recentes, mas não é recomendada para produção, pois pode não ser tão estável quanto a versão LTS.

### **Instalação do Node.js**

Para instalar o Node.js, siga os passos relevantes para o seu sistema operacional:

- **Windows**: Baixe o instalador do Node.js no site oficial e siga o assistente de instalação.
- **macOS**: Use o Homebrew ou baixe o instalador do Node.js no site oficial.
- **Linux**: Use o gerenciador de pacotes apropriado para sua distribuição, como o **`apt-get`** no Ubuntu.

### **Verificação da Instalação**

Após a instalação, você pode verificar se o Node.js e o npm (Node Package Manager) foram instalados corretamente. Abra o terminal e digite os seguintes comandos:

```
node -v
npm -v
```

Esses comandos retornarão as versões instaladas do Node.js e npm, respectivamente.

### **Gerenciadores de Pacotes (npm e Yarn)**

Os gerenciadores de pacotes são essenciais para instalar e gerenciar bibliotecas e módulos em seus projetos Node.js. Os dois gerenciadores mais comuns são:

- **npm**: É o gerenciador de pacotes padrão que vem com o Node.js. Ele é amplamente utilizado e oferece um vasto ecossistema de pacotes.
- y**arn**: Uma alternativa ao npm, Yarn é conhecido por sua velocidade e eficiência. Você pode escolher entre npm e Yarn com base em suas preferências.

### **Inicializando um Projeto Node.js com npm ou Yarn**

Agora que você tem o Node.js e um gerenciador de pacotes instalados, pode criar um novo projeto Node.js. Para isso, você pode usar os seguintes comandos:

- Com npm:

```
npm init
```

- Com Yarn:

```
yarn init
```

Isso iniciará um assistente para criar um arquivo **`package.json`**, que é o arquivo de configuração do seu projeto.

## **Estrutura de Pastas Típica de um Projeto Node.js**

Um projeto Node.js típico consiste em uma estrutura de pastas que organiza seus arquivos e recursos de forma eficiente. Aqui está uma estrutura comum:

```scss
meu-projeto/
  |- node_modules/   (pasta para módulos e pacotes de terceiros)
  |- src/            (pasta para seus arquivos JavaScript)
  |- package.json    (arquivo de configuração do projeto)
  |- README.md       (documentação do projeto)
```

Agora que você configurou o ambiente, está pronto para começar a escrever código em Node.js e construir aplicativos poderosos. Este é o primeiro passo para se tornar um desenvolvedor Node.js competente. Certifique-se de acompanhar os próximos tópicos para expandir seu conhecimento e habilidades.

## **Primeiros Passos com Node.js**

Node.js permite executar JavaScript fora do navegador. Isso abre um novo mundo de possibilidades, como criar servidores web, interagir com sistemas de arquivos, e muito mais.

### **Criando Seu Primeiro Script**

1. **Crie um Arquivo JavaScript**: No seu projeto Node.js, crie um arquivo chamado **`index.js`**.
2. **Escreva Algum Código JavaScript**: Por exemplo, um simples **`console.log`**.

```javascript
// index.js
console.log("Olá, mundo Node.js!");
```

Este código, embora simples, é poderoso. Ele mostra o básico da execução de um script Node.js.

### **Executando o Programa**

Para rodar seu programa, você precisa de um terminal ou linha de comando, por isso, recomendo usar o Visual Studio Code, pois ele tem um terminal incluso, na barra superior é só clicar em terminal.

1. **Abra o Terminal.**
2. **Execute o Script**: Digite **`node index.js`** e pressione Enter.
3. **Veja o Resultado**: Se tudo estiver correto, você verá "Olá, mundo Node.js!" impresso no terminal.

### **O Que Acontece Aqui?**

- **`node`**: É o comando para executar o Node.js.
- **`index.js`**: Indica ao Node.js qual arquivo executar.
- **Resultado**: O Node.js lê o arquivo **`index.js`**, executa o código JavaScript nele e imprime o resultado no terminal.

### **Entendendo o Processo**

- **Node.js como Runtime**: Ao contrário do JavaScript no navegador, onde seu código é executado dentro do contexto de uma página web, Node.js executa seu código como um processo independente em seu computador.
- **Uso do Console**: O **`console.log`** é uma maneira de imprimir informações no terminal, útil para depuração e exibição de dados.

### **Exemplo Prático Adicional**

Vamos ir um pouco além e adicionar uma função.

```jsx
// index.js
function saudacao(nome) {
  return `Olá, ${nome}! Bem-vindo ao Node.js!`;
}

console.log(saudacao("João"));
```

Aqui, definimos uma função **`saudacao`** que recebe um nome e retorna uma mensagem de boas-vindas. Em seguida, chamamos essa função com um nome e imprimimos o resultado.

### Materiais complementares:

- [Node.JS: Como BAIXAR E INSTALAR no Windows](https://www.youtube.com/watch?v=-cLzUD0TQY0&pp=ygUTaW5zdGFsYcOnw6NvIG5vZGVqcw%3D%3D)
- [Como instalar Node.js no Linux de maneira simples e fácil](https://www.youtube.com/watch?v=LU1TYsyPim0&pp=ygUMbm9kZWpzIGxpbnV4)
- [How to install Nodejs on Mac (Any version & Easy method)](https://www.youtube.com/watch?v=SwUKKCS3r3c&pp=ygUMbm9kZWpzIG1hY29z)

[Voltar ao Início ⬆️](#Índice)

## **Fundamentos do Node**

### O que é o V8 Engine?

O V8 é um motor de execução de JavaScript open-source desenvolvido pelo Google. Ele foi projetado para o navegador Google Chrome, mas também é usado no Node.js para executar JavaScript no lado do servidor. O V8 compila o JavaScript diretamente para código de máquina nativo antes de executá-lo, o que resulta em uma performance extremamente rápida.

### Características do V8

- **JIT Compilation (Just-In-Time)**: O V8 utiliza compilação Just-In-Time para converter o JavaScript em código nativo durante a execução, otimizando a performance.
- **Garbage Collection**: O V8 possui um sistema de coleta de lixo eficiente que gerencia a alocação e desalocação de memória automaticamente.
- **Suporte a ECMAScript**: O V8 é frequentemente atualizado para suportar as últimas versões do padrão ECMAScript, garantindo que os desenvolvedores possam usar os recursos mais modernos do JavaScript.

### Event Loop e Assíncronismo

O Event Loop é o coração do Node.js e a chave para seu comportamento assíncrono. Diferente de linguagens de programação tradicionais que utilizam threads para lidar com múltiplas tarefas simultâneas, o Node.js usa um único thread, mas com um modelo de I/O não bloqueante e orientado a eventos.

### Como Funciona o Event Loop

1. **Call Stack**: Onde as funções são executadas. Quando uma função é chamada, ela é empilhada na call stack.
2. **Node APIs**: Quando uma operação assíncrona, como leitura de arquivo ou requisição de rede, é iniciada, ela é delegada para as Node APIs, permitindo que a call stack continue a processar outras tarefas.
3. **Callback Queue**: Uma vez que a operação assíncrona é concluída, a callback associada é empilhada na callback queue.
4. **Event Loop**: O Event Loop monitora a call stack e a callback queue. Quando a call stack está vazia, o Event Loop move as callbacks da callback queue para a call stack para serem executadas.

![img](https://umporcentoprogramador.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff7feecbd-7058-4805-b782-5c71283c99cc%2Fc249126e-7ae9-47e4-bd6e-19572f3fa0b9%2FUntitled.png?table=block&id=3a8cd4b1-77ad-4638-aa43-2e70f5d91407&spaceId=f7feecbd-7058-4805-b782-5c71283c99cc&width=2000&userId=&cache=v2)

### Exemplos de Assíncronismo no Node.js

- **I/O não bloqueante**: Operações de leitura e escrita de arquivos, requisições de rede e manipulação de banco de dados são realizadas de forma assíncrona.
- **Timers**: Funções como `setTimeout` e `setInterval` permitem a execução de código de forma assíncrona após um determinado período de tempo.

### Callbacks, Promises e Async/Await

Node.js oferece várias maneiras de lidar com operações assíncronas. As três abordagens principais são callbacks, promises e async/await.

### Callbacks

Callbacks são funções passadas como argumento para outras funções e são chamadas quando a operação assíncrona é concluída.

```javascript
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

```

### Problema do Callback Hell

O uso extensivo de callbacks pode levar ao "callback hell", onde o código fica aninhado em vários níveis, tornando-se difícil de ler e manter.

```javascript
doSomething(param1, (err, result) => {
  if (err) {
    // handle error
  } else {
    doSomethingElse(result, (err, result2) => {
      if (err) {
        // handle error
      } else {
        // continue...
      }
    });
  }
});
```

### Promises

Promises são uma forma mais moderna e legível de lidar com operações assíncronas. Elas representam um valor que pode estar disponível agora, no futuro ou nunca.

```jsx
const fs = require('fs').promises;

fs.readFile('example.txt', 'utf8')
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });

```

### Async/Await

Async/await é uma sintaxe que torna o uso de promises mais simples e legível, permitindo escrever código assíncrono de forma semelhante ao código síncrono.

```javascript
const fs = require('fs').promises;

async function readFile() {
  try {
    const data = await fs.readFile('example.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

readFile();
```
### Comparação

- **Callbacks**: Simples e direto, mas pode levar ao callback hell.
- **Promises**: Mais legíveis e gerenciáveis, especialmente com encadeamento.
- **Async/Await**: Sintaxe mais limpa e fácil de entender, lidando de forma natural com código assíncrono.

[Voltar ao Início ⬆️](#Índice)

## **Módulos e Pacotes**

[Voltar ao Início ⬆️](#Índice)

## **Trabalhando com o Sistema de Arquivos (fs)**

[Voltar ao Início ⬆️](#Índice)

## **Trabalhando com HTTP**

[Voltar ao Início ⬆️](#Índice)

## **Express**

[Voltar ao Início ⬆️](#Índice)

## **Bases de Dados**

[Voltar ao Início ⬆️](#Índice)

## **Autenticação e Autorização**

[Voltar ao Início ⬆️](#Índice)
