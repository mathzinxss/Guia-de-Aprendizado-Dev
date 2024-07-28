# Guia de HTML, CSS e JavaScript

## Índice

1. [Introdução ao Desenvolvimento Web 🌐](#Introdução-ao-Desenvolvimento-Web)
  - O que é Desenvolvimento Web
    - História e Evolução da Web
    - Áreas do Desenvolvimento Web
  - Introdução ao HTML, CSS e JavaScript
    - HTML (HyperText Markup Language)
    - CSS (Cascading Style Sheets)
    - JavaScript
2. [Fundamentos de HTML 📄](#Fundamentos-de-HTML)
  - Estruturas Básicas de um Documento HTML
  - Elementos de Texto
  - Tags de Estrutura
  - Exercícios
3. [Fundamentos de CSS 🎨](#Fundamentos-de-CSS)
  - Introdução ao CSS
    - História do CSS
  - Sintaxe Básica e Seletores
    - Estrutura de Sintaxe CSS
    - Tipos de Seletores
  - Estilizando Texto
    - Propriedades de Fonte
    - Propriedades de Cor e Fundo
    - Propriedades de Espaçamento
  - Aplicando CSS ao HTML
    - Estilo Inline
    - Extilo Interno
    - Estilo Externo
  - Exercícios
4. [Fundamentos de JavaScript 💻](#Fundamentos-de-JavaScript)
  - Introdução ao JavaScript
    - História do JavaScript
  - Sintaxe Básica e Variáveis
    - Declaração de Variáveis
    - Tipos de Dados
  - Operadores e Estruturas de Controle
    - Operadores Aritiméticos e de Comparação
    - Estruturas de Controle
  - Integrando JavaScript ao HTML
    - Script Inline
    - Script Externo
  - Exercícios
5. [Criando sua Primeira Página Web 🌐](#Criando-sua-Primeira-Página-Web)
  - Estrutura Básica da Página
  - Adicionando e Estilizando Texto
  - Introduzindo Interatividade com JavaScript
  - Exercícios
6. [Trabalhando com Imagens e Links 🌐📸🔗](#Trabalhando-com-Imagens-e-Links)
  - Inserindo Imagens
    - Atributos da Tag `<img>`
  - Criando Links
    - Atributos da Tag `<a>`
  - Estilizando Imagens e Links com CSS
    - Estilizando Imagens
    - Estilizando Links
  - Exemplos Práticos
  - Exercícios
7. [Estilizando a Página com CSS 🎨](#Estilizando-a-Página-com-CSS)
  - Box Model
    - Estrutura do Box Model
  - Backgrounds (Fundos)
    - `background: color`
    - `background: image`
    - `background: grandient`
  - Layout Básico com Display
    - `display: block`
    - `display: inline`
    - `display: inline-block`
    - `display: none`
  - Exercícios
8. [Elementos de Formulário em HTML 📝](#Elementos-de-Formulário-em-HTML)
  - Estrutura do Formulário
  - Elementos de Entrada (input)
    - Tipos Comuns de Input
  - Elementos de Texto Longo
  - Botões
  - Listas de Opções (Select)
  - Validação Básica com HTML5
  - Exercicios
9. [Projeto 1: Página de Perfil 🌟](#Projeto-1-Página-de-Perfil)
  - Estrutura HTML da Página
10. [Layout Responsivo 📱💻](#Layout-Responsivo)

11. [Elementos Semânticos e Acessibilidade 🌍](#Elementos-Semânticos-e-Acessibilidade)

12. [Projeto 2: Blog Pessoal 📓](#Projeto-2-Blog-Pessoal)

13. [Manipulação Avançada do DOM 🌐](#Manipulação-Avançada-do-DOM)

14. [Projeto 3: Página de Portfólio (HTML e CSS) 💼](#Projeto-3-Página-de-Portfólio-HTML-e-CSS)

15. [Interatividade Básica com JavaScript 💻](#Interatividade-Básica-com-JavaScript)

16. [Trabalhando com Listas e Tabelas 📋](#Trabalhando-com-Listas-e-Tabelas)

17. [Projeto 4: Lista de Tarefas 📝](#Projeto-4-Lista-de-Tarefas)

18. [Layouts Avançados com Flexbox e Grid 🎨](#Layouts-Avançados-com-Flexbox-e-Grid)

19. [Projeto 5: Dashboard Responsivo 📊](#Projeto-5-Dashboard-Responsivo)

20. [JavaScript Avançado 💻](#JavaScript-Avançado)

---

## **Introdução ao Desenvolvimento Web**

### **O que é Desenvolvimento Web 🖥️**

Desenvolvimento web é o processo de criar e manter sites. Ele envolve vários aspectos, incluindo design de layout, desenvolvimento de conteúdo, programação do lado do cliente e do servidor, e configuração de segurança de rede. É um campo dinâmico que combina a criatividade do design com as habilidades técnicas da programação para construir experiências interativas e funcionais na internet.

#### **História e Evolução da Web 📜**

A web começou no final dos anos 80, quando Tim Berners-Lee, um cientista britânico, inventou a World Wide Web (WWW). Originalmente concebida como uma maneira de cientistas compartilharem informações de forma eficiente, a web evoluiu rapidamente para se tornar uma parte essencial da vida cotidiana, mudando a forma como nos comunicamos, trabalhamos, aprendemos e nos divertimos.

1. **Web 1.0 (1991-2004):** A primeira era da web era composta principalmente por páginas estáticas com links, texto, e algumas imagens. O conteúdo era principalmente informativo, e a interação do usuário era mínima.
2. **Web 2.0 (2004-presente):** A era atual da web é muito mais interativa e dinâmica. Aplicações web ricas (AJAX, por exemplo) permitem que os usuários interajam com o conteúdo de maneiras mais significativas. Sites de mídia social, blogs e wikis são exemplos da Web 2.0.
3. **Web 3.0 (em desenvolvimento):** A próxima fase da web é esperada para ser ainda mais conectada, aberta e inteligente, com ênfase em tecnologias como a inteligência artificial, machine learning e a Internet das Coisas (IoT).

### **Áreas do Desenvolvimento Web 🌍**

1. **Front-end Development:** Refere-se à parte do desenvolvimento que envolve o que os usuários visualizam e interagem. Utiliza tecnologias como HTML, CSS e JavaScript para criar interfaces de usuário responsivas e interativas.
2. **Back-end Development:** Envolve a criação e gestão do servidor, banco de dados e lógica de aplicação. Utiliza linguagens de programação como Python, Ruby, PHP, e frameworks como Node.js.
3. **Full-stack Development:** Englobando tanto o front-end quanto o back-end, desenvolvedores full-stack têm conhecimentos abrangentes e são capazes de trabalhar em todos os aspectos do desenvolvimento web.

### **Introdução ao HTML, CSS e JavaScript 📜🎨💻**

Para entender o desenvolvimento web, é crucial ter uma base sólida nas três tecnologias fundamentais: HTML, CSS e JavaScript.

#### **HTML (HyperText Markup Language)**

HTML é a linguagem padrão usada para criar documentos na web. Ele define a estrutura e o conteúdo de uma página web utilizando uma série de elementos e tags.

1. **Estrutura Básica de um Documento HTML:** O HTML utiliza tags como `<html>`, `<head>`, `<title>`, e `<body>` para estruturar o conteúdo. Cada tag possui um propósito específico e pode conter atributos que fornecem informações adicionais sobre o elemento.
2. **Elementos de Texto:** Tags como `<p>` (parágrafo), `<h1>` a `<h6>` (cabeçalhos), `<strong>` (negrito), e `<em>` (ênfase) são usadas para definir e estilizar texto dentro de um documento HTML.

#### **CSS (Cascading Style Sheets)**

CSS é uma linguagem usada para descrever a apresentação de um documento HTML. Ele permite separar a estrutura e o conteúdo da aparência visual, facilitando a manutenção e atualização do estilo de uma página web.

1. **Sintaxe Básica e Seletores:** CSS utiliza uma sintaxe de seletores para aplicar estilos a elementos HTML. Seletores podem ser simples, como tags ou classes, ou complexos, utilizando combinadores e pseudo-classes.
2. **Estilizando Texto:** Propriedades como `font-family`, `font-size`, e `color` permitem definir a tipografia e cores do texto. CSS também oferece controle sobre o espaçamento, alinhamento e outras propriedades de layout.

#### **JavaScript**

JavaScript é uma linguagem de programação que permite adicionar interatividade e comportamentos dinâmicos às páginas web. Ele pode ser usado para manipular o DOM (Document Object Model), responder a eventos de usuário e interagir com APIs.

1. **Sintaxe Básica:** JavaScript utiliza variáveis, operadores e estruturas de controle (como loops e condicionais) para executar lógica de programação.
2. **Integrando JavaScript ao HTML:** Scripts JavaScript podem ser incorporados diretamente em documentos HTML usando a tag `<script>`, ou referenciados a partir de arquivos externos.

Compreender essas três tecnologias é fundamental para qualquer desenvolvedor web, pois elas formam a base sobre a qual a maioria dos sites e aplicações web são construídos.

[⬆️ Voltar para o Início](#Índice)

## **Fundamentos de HTML**

### **Estrutura Básica de um Documento HTML 📄**

Um documento HTML é composto por uma série de elementos que definem a estrutura e o conteúdo da página. Abaixo está a estrutura básica de um documento HTML:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Minha Primeira Página</title>
</head>
<body>
    <h1>Bem-vindo ao HTML!</h1>
    <p>Esta é a estrutura básica de um documento HTML.</p>
</body>
</html>
```

- **`<!DOCTYPE html>`**: Declara o tipo de documento e a versão do HTML.
- **`<html>`**: Elemento raiz que contém todo o conteúdo do documento.
- **`<head>`**: Contém metadados sobre o documento, como o título e links para scripts e folhas de estilo.
- **`<title>`**: Define o título da página, que aparece na aba do navegador.
- **`<body>`**: Contém todo o conteúdo visível da página web.

### **Elementos de Texto ✍️**

HTML oferece várias tags para definir e estilizar texto. Aqui estão algumas das mais comuns:

- **`<p>`**: Define um parágrafo.
- **`<h1>` a `<h6>`**: Define cabeçalhos, onde `<h1>` é o mais importante e `<h6>` o menos importante.
- **`<strong>`**: Define texto em negrito para enfatizar a importância.
- **`<em>`**: Define texto em itálico para enfatizar a importância.

Exemplo de uso de elementos de texto:

```html
<h1>Bem-vindo ao HTML</h1>
<p>HTML é a linguagem de marcação padrão para criar páginas web.</p>
<p><strong>Negrito</strong> e <em>itálico</em> são usados para enfatizar texto.</p>
```

### **Tags de Estrutura 🏗️**

HTML também fornece tags para estruturar o conteúdo da página de forma semântica, melhorando a acessibilidade e SEO.

- **`<header>`**: Define a seção de cabeçalho de um documento ou seção.
- **`<nav>`**: Define um conjunto de links de navegação.
- **`<section>`**: Define uma seção genérica de conteúdo.
- **`<article>`**: Define conteúdo independente e auto-suficiente.
- **`<footer>`**: Define a seção de rodapé de um documento ou seção.

Exemplo de uso de tags de estrutura:

```html
<header>
    <h1>Meu Site</h1>
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#contact">Contato</a></li>
        </ul>
    </nav>
</header>
<section>
    <h2>Sobre Mim</h2>
    <p>Esta seção contém informações sobre mim.</p>
</section>
<article>
    <h2>Meu Primeiro Artigo</h2>
    <p>Este é um artigo independente sobre um tópico interessante.</p>
</article>
<footer>
    <p>&copy; 2024 Meu Site</p>
</footer>
```

### **Exercícios 📝**

1. Crie um documento HTML básico com a estrutura mínima (`<!DOCTYPE html>`, `<html>`, `<head>`, `<title>`, `<body>`).
2. Adicione um título à sua página e um parágrafo de introdução dentro da tag `<body>`.
3. Crie uma página com pelo menos três cabeçalhos (`<h1>`, `<h2>`, `<h3>`) e três parágrafos (`<p>`).
4. Adicione tags de ênfase em um dos parágrafos, usando `<strong>` e `<em>`.
5. Estruture uma página com um `<header>`, `<nav>`, `<section>`, `<article>` e `<footer>`, cada um contendo algum conteúdo de exemplo.

[⬆️ Voltar para o Início](#Índice)

## **Fundamentos de CSS**

### **Introdução ao CSS**

CSS (Cascading Style Sheets) é a linguagem usada para descrever a apresentação de documentos HTML. Ele permite que você controle o layout, as cores, as fontes e outros aspectos visuais de uma página web, separando o conteúdo (HTML) da apresentação (CSS).

#### **História do CSS 📜**

O CSS foi desenvolvido pela primeira vez em meados da década de 90. A W3C (World Wide Web Consortium) lançou a primeira versão do CSS em dezembro de 1996. Desde então, evoluiu para incluir uma ampla gama de funcionalidades, culminando em versões modernas como CSS3, que inclui suporte para animações, transições, e layouts responsivos.

### **Sintaxe Básica e Seletores**

CSS usa uma sintaxe de seletores para aplicar estilos a elementos HTML. Um seletor é uma expressão que seleciona elementos específicos em uma página HTML, e as regras de estilo aplicadas a esses elementos são definidas em blocos de declarações.

#### **Estrutura da Sintaxe CSS 🖋️**

Uma regra CSS é composta por um seletor e um bloco de declarações. Aqui está um exemplo básico:

```css
p {
    color: blue;
    font-size: 16px;
}
```

- **Seletor (`p`):** Seleciona todos os elementos `<p>` na página.
- **Declarações (`color: blue; font-size: 16px;`):** Definem as propriedades e valores aplicados aos elementos selecionados.

#### **Tipos de Seletores 🏷️​**

CSS oferece vários tipos de seletores para aplicar estilos de maneira específica:

1. **Seletores de Elementos:** Selecionam todos os elementos de um determinado tipo. Ex: `p { color: blue; }`
2. **Seletores de Classe:** Selecionam elementos com um atributo `class` específico. Ex: `.minhaClasse { color: red; }`
3. **Seletores de ID:** Selecionam elementos com um atributo `id` específico. Ex: `#meuId { color: green; }`
4. **Seletores Atributo:** Selecionam elementos com um atributo específico. Ex: `a[target="_blank"] { color: orange; }`
5. **Seletores Combinadores:** Seletores que combinam outros seletores para uma seleção mais precisa. Ex: `div > p { color: purple; }`

### **Estilizando Texto ✍️**

CSS oferece uma ampla gama de propriedades para estilizar texto, controlando fontes, tamanhos, cores, espaçamento, e alinhamento.

#### **Propriedades de Fonte 🖋️**

- **`font-family`**: Define a família de fontes para o texto. Ex: `font-family: Arial, sans-serif;`
- **`font-size`**: Define o tamanho da fonte. Ex: `font-size: 16px;`
- **`font-weight`**: Define a espessura da fonte. Ex: `font-weight: bold;`
- **`font-style`**: Define o estilo da fonte (normal, itálico, oblíquo). Ex: `font-style: italic;`
- **`line-height`**: Define a altura da linha do texto. Ex: `line-height: 1.5;`

#### **Propriedades de Cor e Fundo 🌈**

- **`color`**: Define a cor do texto. Ex: `color: blue;`
- **`background-color`**: Define a cor de fundo do elemento. Ex: `background-color: yellow;`

#### **Propriedades de Espaçamento 📏**

- **`letter-spacing`**: Define o espaçamento entre caracteres. Ex: `letter-spacing: 1px;`
- **`word-spacing`**: Define o espaçamento entre palavras. Ex: `word-spacing: 2px;`
- **`text-align`**: Define o alinhamento do texto. Ex: `text-align: center;`

### **Aplicando CSS ao HTML 🌐**
​
Há três maneiras principais de aplicar CSS ao HTML: inline, interno e externo.

#### **Estilos Inline ✒️**
​
Os estilos inline são aplicados diretamente no elemento HTML usando o atributo `style`. Exemplo:

```html
<p style="color: blue; font-size: 16px;">Texto azul</p>
```

#### **Estilos Internos 📝**
​
Os estilos internos são definidos dentro da tag `<style>` no cabeçalho do documento HTML. Exemplo:

```html
<head>
    <style>
        p {
            color: blue;
            font-size: 16px;
        }
    </style>
</head>
```

#### **Estilos Externos 📄**

Os estilos externos são definidos em um arquivo CSS separado, que é referenciado no documento HTML usando a tag `<link>`. Exemplo:

```html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```

No arquivo `styles.css`:

```css
p {
    color: blue;
    font-size: 16px;
}
```

### **Exercícios 📝**

1. Crie um arquivo HTML e aplique estilos inline a um parágrafo, definindo a cor e o tamanho da fonte.
2. Defina um estilo interno no cabeçalho de um documento HTML que aplique uma cor de fundo e alinhamento central a todos os cabeçalhos `<h1>`.
3. Crie um arquivo CSS externo que estilize parágrafos para terem texto vermelho e tamanho de fonte de 18px. Referencie esse arquivo em um documento HTML.
4. Utilize seletores de classe para aplicar estilos diferentes a dois parágrafos em uma página HTML.
5. Crie um estilo que utilize um seletor de ID para definir a cor de fundo e o espaçamento de um elemento específico na página.

[⬆️ Voltar para o Início](#Índice)

## **Fundamentos de JavaScript**

### **Introdução ao JavaScript**

JavaScript é uma linguagem de programação essencial para o desenvolvimento web. Diferente do HTML e do CSS, que são linguagens de marcação e estilo, respectivamente, JavaScript é uma linguagem de programação completa que permite criar páginas web dinâmicas e interativas. Ele é executado no lado do cliente, ou seja, diretamente no navegador do usuário.

#### **História do JavaScript 📜**

JavaScript foi criado por Brendan Eich em 1995 enquanto trabalhava na Netscape Communications. Inicialmente chamado de Mocha, depois LiveScript, e finalmente JavaScript, a linguagem rapidamente ganhou popularidade. Hoje, JavaScript é uma das linguagens de programação mais usadas no mundo, suportada por todos os navegadores modernos e crucial para o desenvolvimento web.

### **Sintaxe Básica e Variáveis**

A sintaxe básica do JavaScript é similar a outras linguagens de programação, utilizando variáveis, operadores e estruturas de controle para executar lógica de programação.

#### **Declaração de Variáveis 📦**

Em JavaScript, você pode declarar variáveis usando as palavras-chave `var`, `let` e `const`.

- **`var`**: Declara uma variável com escopo de função. Ex: `var nome = "João";`
- **`let`**: Declara uma variável com escopo de bloco. Ex: `let idade = 25;`
- **`const`**: Declara uma constante, que não pode ser reatribuída. Ex: `const PI = 3.14;`

#### **Tipos de Dados 📊**
​
JavaScript possui vários tipos de dados primitivos:

- **String:** Texto. Ex: `let nome = "João";`
- **Number:** Números. Ex: `let idade = 25;`
- **Boolean:** Verdadeiro ou falso. Ex: `let estaLogado = true;`
- **Null:** Representa a ausência intencional de um valor. Ex: `let vazio = null;`
- **Undefined:** Variáveis que foram declaradas, mas não atribuídas. Ex: `let indefinido;`
- **Object:** Coleções de pares chave-valor. Ex: `let pessoa = { nome: "João", idade: 25 }`


### **Operadores e Estruturas de Controle**

JavaScript usa operadores para realizar operações em variáveis e valores, e estruturas de controle para tomar decisões com base em condições.

#### **Operadores Aritméticos e de Comparação ➕➖​**

- **Aritméticos:** `+`, `-`, `*`, `/`, `%` (módulo)

```javascript
let soma = 5 + 3;  // 8
let diferenca = 5 - 3;  // 2
```

- **Comparação:** `==`, `===` (igualdade estrita), `!=`, `!==` (desigualdade estrita), `>`, `<`, `>=`, `<=`

```javascript
let igual = 5 == "5";  // true
let igualEstrito = 5 === "5";  // false
```

#### Estruturas de Controle 🔄

- **Condicionais**: `if`, `else if`, `else`
    
    ```jsx
    let idade = 18;
    if (idade < 18) {
        console.log("Menor de idade");
    } else {
        console.log("Maior de idade");
    }
    
    ```
    
- **Loops**: `for`, `while`, `do...while`
    
    ```jsx
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    ```

### Integrando JavaScript ao HTML 🌐

Para integrar JavaScript ao HTML, usamos a tag `<script>`. O código JavaScript pode ser incluído diretamente no HTML ou em um arquivo externo.

#### Script Inline ✒️

```html
<!DOCTYPE html>
<html>
<head>
    <title>Exemplo JavaScript</title>
</head>
<body>
    <h1>Olá, JavaScript!</h1>
    <script>
        alert("Bem-vindo ao JavaScript!");
    </script>
</body>
</html>

```

#### **Script Externo 📄**

```html​
<!DOCTYPE html>
<html>
<head>
    <title>Exemplo JavaScript Externo</title>
    <script src="script.js"></script>
</head>
<body>
    <h1>Olá, JavaScript!</h1>
</body>
</html>
```
​
Arquivo `script.js`:

```javascript
alert("Bem-vindo ao JavaScript Externo!");
```

### **Exercícios 📝**

1. Crie um arquivo HTML que exiba um alerta com uma mensagem de boas-vindas usando JavaScript.
2. Declare variáveis utilizando `var`, `let` e `const`, e exiba seus valores no console do navegador.
3. Crie uma função que aceite dois números como parâmetros, some-os e retorne o resultado.
4. Utilize uma estrutura condicional para verificar se um número é par ou ímpar e exiba o resultado no console.
5. Crie um loop `for` que itere de 1 a 10 e exiba cada número no console.

[⬆️ Voltar para o Início](#Índice)

## **Criando sua Primeira Página Web**

### **Estrutura Básica da Página**

Neste tópico, você aprenderá a criar sua primeira página web combinando HTML, CSS e JavaScript. Vamos começar com a estrutura básica da página.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Minha Primeira Página Web</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <header>
        <h1>Bem-vindo à Minha Página</h1>
    </header>
    <main>
        <section>
            <h2>Introdução</h2>
            <p>Esta é a minha primeira página web. Aqui você encontrará uma introdução ao HTML, CSS e JavaScript.</p>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 Minha Primeira Página Web</p>
    </footer>
    <script src="script.js"></script>
</body>
</html>
```

- **`<header>`**: Contém o cabeçalho da página.
- **`<main>`**: Contém o conteúdo principal da página.
- **`<footer>`**: Contém o rodapé da página.
- **`<link rel="stylesheet" href="styles.css">`**: Referencia o arquivo CSS externo.
- **`<script src="script.js"></script>`**: Referencia o arquivo JavaScript externo.

### **Adicionando e Estilizando Texto ✍️🎨**

Vamos adicionar e estilizar texto na nossa página usando HTML e CSS. Primeiro, adicione mais conteúdo ao `<main>` da página.

```html
<main>
    <section>
        <h2>Introdução</h2>
        <p>Esta é a minha primeira página web. Aqui você encontrará uma introdução ao HTML, CSS e JavaScript.</p>
    </section>
    <section>
        <h2>Sobre Mim</h2>
        <p>Meu nome é João e sou um desenvolvedor web iniciante. Estou aprendendo HTML, CSS e JavaScript para criar páginas incríveis!</p>
    </section>
</main>
```

Em seguida, estilize o texto no arquivo `styles.css`.

```css
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
}

header, footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 1em 0;
}

h1 {
    font-size: 2.5em;
    margin: 0;
}

h2 {
    font-size: 2em;
    color: #333;
}

p {
    font-size: 1.2em;
    color: #666;
}
```
​
#### **Introduzindo Interatividade com JavaScript 💻​**

Vamos adicionar um pouco de interatividade à nossa página usando JavaScript. Adicione um botão e uma função de alerta.

```html
<main>
    <!-- Conteúdo existente -->
    <section>
        <h2>Interatividade</h2>
        <button id="alertButton">Clique em mim!</button>
    </section>
</main>
```
​
No arquivo `script.js`, adicione o seguinte código:

```javascript
document.getElementById('alertButton').addEventListener('click', function() {
    alert('Você clicou no botão!');
});
```

### **Exercícios 📝**

1. Adicione uma nova seção ao `<main>` da sua página com um título e parágrafo descrevendo um hobby ou interesse seu.
2. Estilize essa nova seção no `styles.css`, alterando a cor do texto e o tamanho da fonte.
3. Adicione um segundo botão à página que, quando clicado, altera o texto de um parágrafo existente.
4. Crie uma função JavaScript que exibe uma mensagem de boas-vindas no console quando a página é carregada.
5. Experimente diferentes seletores CSS para estilizar elementos específicos, como todos os `<h2>` dentro de uma `<section>`.

[⬆️ Voltar para o Início](#Índice)

## **Trabalhando com Imagens e Links**

### **Inserindo Imagens**

Imagens são elementos essenciais em páginas web, pois ajudam a ilustrar e complementar o conteúdo textual. Para inserir imagens em um documento HTML, utilizamos a tag `<img>`. A tag `<img>` é um elemento vazio, o que significa que não possui uma tag de fechamento.

#### **Atributos da Tag <img>**

- **`src`**: Especifica o caminho da imagem. Pode ser uma URL ou o caminho para um arquivo.
- **`alt`**: Fornece um texto alternativo para a imagem, que é exibido se a imagem não puder ser carregada e é importante para acessibilidade.

Exemplo de uso:

```html
<img src="imagens/paisagem.jpg" alt="Uma bela paisagem">
```

### **Criando Links**

Links permitem a navegação entre diferentes páginas e recursos na web. Para criar links, utilizamos a tag `<a>`, que é conhecida como âncora.

#### **Atributos da Tag <a>**

- **`href`**: Especifica o destino do link. Pode ser um URL absoluto ou relativo.
- **`target`**: Define onde abrir o link. O valor `_blank` abre o link em uma nova aba.

Exemplo de uso:

```html
<a href="<https://www.example.com>" target="_blank">Visite o Example</a>
```

### **Estilizando Imagens e Links com CSS 🎨**

Assim como outros elementos HTML, imagens e links podem ser estilizados usando CSS para melhorar sua aparência e interação.

#### **Estilizando Imagens**

Podemos controlar a largura, altura, bordas e outros aspectos das imagens usando CSS.

```css
img {
    width: 100%;
    max-width: 600px;
    border: 2px solid #ccc;
    border-radius: 10px;
}

```

#### **Estilizando Links**

Os links podem ser estilizados para alterar sua cor, sublinhado e outros estados (como hover, active).

```css
a {
    color: #3498db;
    text-decoration: none;
}

a:hover {
    color: #2c3e50;
    text-decoration: underline;
}
```
​
### **Exemplos Práticos 🌟​**
Vamos combinar esses conceitos em um exemplo prático:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Trabalhando com Imagens e Links</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Imagens e Links</h1>
    </header>
    <main>
        <section>
            <h2>Galeria de Imagens</h2>
            <img src="imagens/paisagem1.jpg" alt="Paisagem 1">
            <img src="imagens/paisagem2.jpg" alt="Paisagem 2">
            <img src="imagens/paisagem3.jpg" alt="Paisagem 3">
        </section>
        <section>
            <h2>Links Úteis</h2>
            <p>Confira os seguintes recursos:</p>
            <ul>
                <li><a href="<https://www.example.com>" target="_blank">Example</a></li>
                <li><a href="<https://www.google.com>" target="_blank">Google</a></li>
                <li><a href="<https://www.wikipedia.org>" target="_blank">Wikipedia</a></li>
            </ul>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 Imagens e Links</p>
    </footer>
</body>
</html>
```

No arquivo `styles.css`:

```css
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
}

header, footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 1em 0;
}

img {
    width: 100%;
    max-width: 600px;
    border: 2px solid #ccc;
    border-radius: 10px;
    margin: 10px 0;
}

a {
    color: #3498db;
    text-decoration: none;
}

a:hover {
    color: #2c3e50;
    text-decoration: underline;
}

ul {
    list-style-type: none;
    padding: 0;
}

ul li {
    margin: 10px 0;
}
```

### **Exercícios 📝**

1. Adicione uma nova imagem à sua página e estilize-a para ter uma borda arredondada e uma sombra.
2. Crie um link que abra um documento PDF em uma nova aba.
3. Adicione uma lista de links para seus sites favoritos e estilize-os para mudar de cor quando o mouse passar por cima.
4. Use uma imagem como link para outra página ou site.
5. Crie uma galeria de imagens com pelo menos quatro imagens e estilize-as para ficarem alinhadas em duas colunas.

[⬆️ Voltar para o Início](#Índice)

## **Estilizando a Página com CSS**

### **Box Model 📦**

O modelo de caixa (Box Model) é um conceito fundamental em CSS que descreve como os elementos são renderizados no navegador. Cada elemento é representado como uma caixa retangular, composta por quatro áreas principais: conteúdo, preenchimento (padding), borda (border) e margem (margin).

#### **Estrutura do Box Model**

1. **Conteúdo (Content)**: A área onde o texto e as imagens são exibidos.
2. **Preenchimento (Padding)**: Espaço entre o conteúdo e a borda. Pode ser usado para adicionar espaço interno ao elemento.
3. **Borda (Border)**: A borda ao redor do conteúdo e do preenchimento. Pode ser estilizada com várias propriedades.
4. **Margem (Margin)**: Espaço externo ao redor da borda. Pode ser usado para criar espaço entre elementos.

Exemplo visual do Box Model:

```css
div {
    width: 200px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}

```

### **Backgrounds (Fundos) 🎨​**

CSS permite definir vários tipos de fundos para os elementos, como cores, imagens, e gradientes.

#### Background Color

A propriedade `background-color` define a cor de fundo de um elemento.

```css
body {
    background-color: #f0f0f0;
}
```
​
#### **Background Image**

A propriedade `background-image` permite definir uma imagem de fundo para um elemento.

```css
div {
    background-image: url('path/to/image.jpg');
    background-size: cover; /* Para cobrir todo o elemento */
    background-repeat: no-repeat; /* Para evitar repetição da imagem */
}
```

#### **Background Gradient**

CSS3 introduziu gradientes como fundos, permitindo transições suaves entre cores.

```css
div {
    background: linear-gradient(to right, red, yellow);
}

```

### **Layout Básico com Display 🖥️**

A propriedade `display` controla o comportamento de renderização de um elemento. Os valores mais comuns são `block`, `inline`, `inline-block`, e `none`.

#### **Display Block**

Elementos de bloco ocupam toda a largura disponível e começam em uma nova linha.

```css
div {
    display: block;
}

```

#### **Display Inline**

Elementos inline ocupam apenas a largura necessária e podem aparecer na mesma linha.

```css
span {
    display: inline;
}
```
​
#### **Display Inline-Block**

Elementos inline-block combinam características dos elementos block e inline, permitindo definir a largura e altura, mas ainda podem aparecer na mesma linha.

```css
div {
    display: inline-block;
    width: 100px;
    height: 100px;
}
```

#### **Display None**

Esconde o elemento completamente.

```css
div {
    display: none;
}

```

### **Exercícios 📝**

1. Crie um elemento `<div>` e aplique uma cor de fundo, preenchimento, borda e margem. Observe como essas propriedades afetam a renderização do elemento.
2. Adicione uma imagem de fundo a um elemento e ajuste suas propriedades para cobrir todo o elemento sem repetição.
3. Use um gradiente linear como fundo de um cabeçalho (`<header>`).
4. Altere a propriedade `display` de vários elementos para ver como eles se comportam como `block`, `inline`, e `inline-block`.
5. Crie um layout simples com três caixas lado a lado usando `display: inline-block`.

[⬆️ Voltar para o Início](#Índice)

## **Elementos de Formulário em HTML**

Os formulários são componentes essenciais em páginas web, permitindo a coleta de dados dos usuários. HTML fornece uma variedade de elementos de formulário para criar interfaces interativas.

### **Estrutura do Formulário**

Um formulário HTML é criado usando a tag `<form>`, que agrupa elementos de entrada de dados. A tag `<form>` possui atributos importantes:

- **`action`**: Especifica a URL para onde os dados do formulário serão enviados.
- **`method`**: Define o método HTTP a ser usado (GET ou POST).

Exemplo básico de formulário:

```html
<form action="/submit" method="post">
    <!-- Elementos do formulário -->
</form>
```

### **Elementos de Entrada (Input)**

A tag `<input>` é usada para criar diferentes tipos de campos de entrada de dados. O atributo `type` define o tipo de entrada.

#### **Tipos Comuns de Input**

- **`text:`** Campo de texto de linha única.
```html
<label for="nome">Nome:</label>
<input type="text" id="nome" name="nome">
```

- **`email:`** Campo de texto para endereços de email.
```html
<label for="email">Email:</label>
<input type="email" id="email" name="email">
```

- **`password:`** Campo de texto para senhas.
```html
<label for="senha">Senha:</label>
<input type="password" id="senha" name="senha">
```

- **`checkbox:`** Caixa de seleção.
```html
<label for="aceito">Aceito os termos:</label>
<input type="checkbox" id="aceito" name="aceito">
```

- **`radio`**: Botão de opção.
    
    ```html
    <label for="genero">Masculino</label>
    <input type="radio" id="generoM" name="genero" value="masculino">
    <label for="genero">Feminino</label>
    <input type="radio" id="generoF" name="genero" value="feminino">
    ```
    
- **`submit`**: Botão de envio do formulário.
    
    ```html
    <input type="submit" value="Enviar">
    ```
    

### **Elementos de Texto Longo**

Para entrada de texto mais longa, usamos a tag `<textarea>`.

```html
<label for="mensagem">Mensagem:</label>
<textarea id="mensagem" name="mensagem" rows="4" cols="50"></textarea>
```

### **Botões**

Botões podem ser criados com a tag `<button>`, que pode conter texto ou elementos HTML.
```html
<button type="submit">Enviar</button>
<button type="button" onclick="alert('Clicado!')">Clique-me</button>
```
​
### **Listas de Opções (Select)**

Para criar listas suspensas, usamos a tag `<select>`, que contém várias tags `<option>`.
```html
<label for="pais">País:</label>
<select id="pais" name="pais">
    <option value="brasil">Brasil</option>
    <option value="eua">Estados Unidos</option>
    <option value="uk">Reino Unido</option>
</select>
```

### **Validação Básica com HTML5**

HTML5 introduziu novos atributos para validação de formulários.

- **`required`**: Torna o campo obrigatório.
- **`pattern`**: Define um padrão regex que o campo deve seguir.
- **`min`** e **`max`**: Define valores mínimo e máximo para campos numéricos.

Exemplo de campo obrigatório:

```html
<label for="username">Usuário:</label>
<input type="text" id="username" name="username" required>
```

### **Exercícios 📝**

1. Crie um formulário HTML simples com campos de texto, email e senha, e um botão de envio.
2. Adicione uma caixa de seleção para termos e condições e um botão de envio que só funciona se a caixa de seleção estiver marcada.
3. Crie um campo de texto para números de telefone que aceite apenas um padrão específico usando o atributo `pattern`.
4. Adicione uma lista suspensa (`<select>`) ao formulário com pelo menos três opções e defina uma delas como padrão.
5. Crie um formulário que inclua botões de rádio para selecionar o gênero e um botão de envio.

[⬆️ Voltar para o Início](#Índice)

## Projeto 1: Página de Perfil

Neste projeto, você aplicará os conceitos aprendidos sobre HTML e CSS para criar uma página de perfil pessoal. O objetivo é construir uma página completa e estilizada que mostre informações pessoais, uma foto de perfil e links para redes sociais.

### **Estrutura HTML da Página**

Começaremos criando a estrutura HTML básica da página de perfil. Esta estrutura incluirá um cabeçalho, uma seção principal com detalhes do perfil e um rodapé.
```html
<!DOCTYPE html>
<html>
<head>
    <title>Meu Perfil</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <header>
        <h1>João Silva</h1>
    </header>
    <main>
        <section class="perfil">
            <img src="perfil.jpg" alt="Foto de João Silva" class="foto-perfil">
            <h2>Sobre Mim</h2>
            <p>Olá! Eu sou João Silva, um desenvolvedor web apaixonado por criar experiências interativas e funcionais na web.</p>
            <h3>Contato</h3>
            <ul>
                <li>Email: <a href="mailto:joao@example.com">joao@example.com</a></li>
                <li>Telefone: (11) 1234-5678</li>
            </ul>
            <h3>Redes Sociais</h3>
            <ul>
                <li><a href="<https://twitter.com/joao>" target="_blank">Twitter</a></li>
                <li><a href="<https://linkedin.com/in/joao>" target="_blank">LinkedIn</a></li>
                <li><a href="<https://github.com/joao>" target="_blank">GitHub</a></li>
            </ul>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 João Silva</p>
    </footer>
</body>
</html>
```

### **Estilização Avançada com CSS 🎨**

Agora, vamos estilizar a página de perfil usando CSS. Vamos definir estilos para o layout, tipografia, imagens e links.

```css
/* Resetando margens e paddings */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background-color: #f4f4f4;
    color: #333;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

header, footer {
    background-color: #333;
    color: white;
    text-align: center;
    width: 100%;
    padding: 1em 0;
}

header h1 {
    font-size: 2.5em;
}

main {
    width: 100%;
    max-width: 600px;
    background: white;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
}

.perfil {
    text-align: center;
}

.foto-perfil {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 5px solid #333;
    margin-bottom: 20px;
}

h2, h3 {
    margin-top: 20px;
    color: #333;
}

p, ul {
    text-align: left;
    margin: 10px 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

ul li {
    margin: 10px 0;
}

a {
    color: #3498db;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
```

### **Adicionando Imagens e Links 📸🔗**

Certifique-se de incluir uma imagem de perfil (`perfil.jpg`) no mesmo diretório do arquivo HTML. Use links apropriados para suas redes sociais e email.

### **Exercícios 📝**

1. Modifique o HTML para incluir uma breve descrição sobre suas habilidades e interesses.
2. Adicione uma seção para listar seus projetos recentes, incluindo links para cada projeto.
3. Estilize a seção de projetos recentes usando CSS para destacá-la visualmente.
4. Adicione um botão que, ao ser clicado, exiba uma mensagem de boas-vindas usando JavaScript.
5. Use media queries para tornar a página responsiva, ajustando o layout para diferentes tamanhos de tela.

[⬆️ Voltar para o Início](#Índice)

## Layout Responsivo

O design responsivo é uma abordagem de design que garante que as páginas web funcionem bem em uma variedade de dispositivos e tamanhos de tela. Através do uso de CSS, podemos criar layouts flexíveis e adaptáveis.

## 10.1 Introdução ao Design Responsivo 🌐

O design responsivo utiliza consultas de mídia (media queries) e unidades flexíveis para criar um layout que se ajuste automaticamente ao tamanho da tela. Isso melhora a experiência do usuário, independentemente do dispositivo que eles estão usando.

### 10.1.1 Unidades Flexíveis

- **`%`**: Percentual relativo ao elemento pai.
    
    ```css
    width: 50%; /* 50% da largura do elemento pai */
    
    ```
    
- **`em`**: Relativo ao tamanho da fonte do elemento pai.
    
    ```css
    padding: 1em; /* igual ao tamanho da fonte do elemento pai */
    
    ```
    
- **`rem`**: Relativo ao tamanho da fonte do elemento raiz (`<html>`).
    
    ```css
    margin: 2rem; /* igual a duas vezes o tamanho da fonte do elemento raiz */
    
    ```
- **`vw` e `vh`:** Viewport width e height, porcentagem da largura e altura da janela de visualização.
```css
width: 50vw; /* 50% da largura da janela de visualização */
height: 100vh; /* 100% da altura da janela de visualização */
```
​
### **Media Queries 🖥️📱​**

As consultas de mídia são usadas para aplicar estilos CSS com base nas características da tela, como largura, altura, resolução e orientação. A sintaxe básica de uma media query é:
```css
@media (max-width: 600px) {
    body {
        background-color: lightblue;
    }
}
```

Neste exemplo, a cor de fundo do corpo será `lightblue` em telas com largura máxima de 600px.

#### **Exemplos de Media Queries**

- **Alterando layout para telas pequenas:**
```css
@media (max-width: 768px) {
    .container {
        flex-direction: column;
    }
}
```
​
- **Ajustando tamanhos de fonte:**
```css
@media (max-width: 480px) {
    h1 {
        font-size: 1.5em;
    }
}
```

### **Flexbox Básico 🧩​**

Flexbox é um módulo de layout em CSS que fornece uma maneira eficiente de distribuir espaço e alinhar itens em um contêiner, mesmo quando o tamanho dos itens é desconhecido ou dinâmico.

#### **Container Flex**

Para usar o Flexbox, defina o contêiner como um elemento flexível:
```css
.container {
    display: flex;
}
```
​
#### **Direção Flexível**

A propriedade `flex-direction` define a direção na qual os itens flexíveis são colocados no contêiner flexível.

- **`row`**: Direção padrão, os itens são colocados da esquerda para a direita.
```css
.container {
    flex-direction: row;
}
```

- **`column`**: Os itens são colocados de cima para baixo.
```css
.container {
    flex-direction: column;
}
```
​
#### **Alinhamento e Justificação**

Flexbox também permite alinhar e justificar itens no contêiner flexível.

- **`justify-content`**: Alinha itens ao longo do eixo principal.
```css
.container {
    justify-content: center; /* alinha itens no centro */
}
```

- **`align-items`**: Alinha itens ao longo do eixo transversal.
```css
.container {
    align-items: center; /* alinha itens no centro do eixo transversal */
}
```

### **Exemplo Prático 🌟​**

Vamos criar um layout responsivo usando Flexbox e media queries.
```html
<!DOCTYPE html>
<html>
<head>
    <title>Layout Responsivo</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Meu Site Responsivo</h1>
    </header>
    <main class="container">
        <section class="conteudo">
            <h2>Conteúdo Principal</h2>
            <p>Este é o conteúdo principal da página.</p>
        </section>
        <aside class="sidebar">
            <h2>Barra Lateral</h2>
            <p>Esta é a barra lateral com informações adicionais.</p>
        </aside>
    </main>
    <footer>
        <p>&copy; 2024 Meu Site Responsivo</p>
    </footer>
</body>
</html>
```

No arquivo `styles.css`:

```css
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
}

header, footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 1em 0;
}

.container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
}

.conteudo, .sidebar {
    flex: 1;
    margin: 10px;
    padding: 20px;
    background-color: #f4f4f4;
    border-radius: 5px;
}

/* Media Query para telas menores */
@media (max-width: 768px) {
    .container {
        flex-direction: column;
    }
}
```

### **Exercícios 📝**

1. Crie uma página HTML com um contêiner Flexbox que distribua três seções horizontalmente em telas grandes e verticalmente em telas pequenas.
2. Adicione media queries ao seu projeto de perfil para ajustar o layout em telas menores, garantindo que a foto de perfil e o conteúdo se ajustem corretamente.
3. Utilize unidades flexíveis (`%`, `em`, `rem`, `vw`, `vh`) para definir larguras, alturas e espaçamentos em uma página de exemplo.
4. Experimente diferentes propriedades Flexbox, como `justify-content` e `align-items`, para criar layouts variados.
5. Crie um layout responsivo para um blog com uma seção de conteúdo principal e uma barra lateral que se ajusta em diferentes tamanhos de tela.

[⬆️ Voltar para o Início](#Índice)

## Elementos Semânticos e Acessibilidade

[⬆️ Voltar para o Início](#Índice)

## Projeto 2: Blog Pessoal

[⬆️ Voltar para o Início](#Índice)

## Manipulação Avançada do DOM

[⬆️ Voltar para o Início](#Índice)

## Projeto 3: Página de Portfólio (HTML e CSS)

[⬆️ Voltar para o Início](#Índice)

## Interatividade Básica com JavaScript

[⬆️ Voltar para o Início](#Índice)

## Trabalhando com Listas e Tabelas

[⬆️ Voltar para o Início](#Índice)

## Projeto 4: Lista de Tarefas

[⬆️ Voltar para o Início](#Índice)

## Layouts Avançados com Flexbox e Grid

[⬆️ Voltar para o Início](#Índice)

## Projeto 5: Dashboard Responsivo

[⬆️ Voltar para o Início](#Índice)

## JavaScript Avançado

[⬆️ Voltar para o Início](#Índice)


