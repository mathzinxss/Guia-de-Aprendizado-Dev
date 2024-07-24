# Guia HTML, CSS e JavaScript

## Índice

1. [Introdução](#Introdução-ao-Desenvolvimento-Web)
  - O que é Desenvolvimento Web
    - História e Evolução da Web
    - Áreas do Desenvolvimento Web
  - Introdução ao HTML, CSS e JavaScript
    - HTML (HyperText Markup Language)
    - CSS (Cascading Style Sheets)
    - JavaScript
2. [HTML](#Fundamentos-de-HTML)
  - Estruturas Básicas de um Documento HTML
  - Elementos de Texto
  - Tags e Estruturas
  - Exercícios
3. [CSS](#Fundamentos-de-CSS)
  - Introdução ao CSS
    - História do CSS
  - Sintaxe Básica e Seletores
    - Estruturas de Sintaxe CSS
    - Tipos de Seletores
  - Estilizando Texto
    - Propriedades de Fonte
    - Propriedades de Cor e Fundo
    - Propriedades de Espaçamento
  - Aplicando CSS ao HTML
    - Estilos Inline
    - Estilos Internos
    - Estilos Externos
  - Exercícios
4. [JavaScript](#Fundamentos-de-JavaScript)
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
5. [Primeira Página Web](#Criando-sua-Primeira-Página-Web)
  - Estruturas Básicas da Página
  - Adicionando e Estilizando Texto
  - Introduzindo Interatividade com JavaScript
  - Exercícios
6. [Imagens e Links](#Trabalhando-com-Imagens-e-Links)
  - Inserindo Imagens
    - Atributos da Tag `<img>`
  - Criando Links
    - Atributos da Tag `<a>`
  - Estilizando Imagens e Links com CSS
    - Estilizando Imagens
    - Estilizando Links
  - Exemplos Práticos
  - Exercícios
7. [Estilizando Páginas](#Estilizando-a-Página-com-CSS)
  - Box Model
    - Estrutura de Box Model
  - Backgrounds (Fundos)
    - `background-color`
    - `background-image`
    - `background-grandient`
  - Layout Básico com Display
    - `display: block`
    - `display: inline`
    - `display: inline-block`
    - `display: none`
  - Exercícios
8. [Elementos de Formulários](#Elementos-de-Formulários-em-HTML)
  - Estruturas do Formulário
  - Elementos de Entrada (input)
    - Tipos Comuns de Input
  - Elementos de Texto Longo
  - Botões
  - Listas de Opções (select)
  - Validação Básicas com HTML5
  - Exercícios
9. [Projeto: 1](#Projeto-1:-Página-de-Perfil)
  - Estrutura HTML da Página
  - Estilização Avançada com CSS
  - Adicionando Imagens e Links
  - Exercícios
10. [Design Responsivo](#Layout-Responsivo)
  - Introdução ao Design Responsivo
    - Unidades Flexíveis
  - Media Queries
    - Exemplos de Media Queries
  - Flexbox Básico
    - Container Flex
    - Direção Flexível
    - Alinhamento e Justificação
  - Exemplos Práticos
  - Exercícios
  - Elementos Semânticos
    - Elementos Comuns
  - Importância da Acessibilidade
    - Princípios de Acessibilidade
  - Atributos ARIA (Acessible Rich Internet Applications)
    - Exemplos de Atributos ARIA
  - Exercícios
12. [Projeto: 2](#Projeto-2:-Blog-Pessoal)
  - Estrutura HTML do Blog
  - Estilização com CSS
  - Adicionando Elementos Semânticos
  - Exercícios
13. [Manipulação do DOM](#Manipulação-Avançada-do-DOM)
  - Seleção de Múltiplos Elementos
    - `getElementById`
    - `getElementByClassName`
    - `getElementByTagName`
    - `querySelector` e `querySelectorAll`
  - Modificação de Atributos e Classes
    - Modificação de Atributos
    - Manipulação de Atributos
  - Criação e Remoção de Elementos
    - Criação de Elementos
    - Remoção de Elementos
  - Manipulação de Eventos
    - Adicionando Eventos
    - Eventos Comuns
  - Exercícios 
14. [Projeto: 3](#Projeto-3:-Página-de-Portfólio-HTML-e-CSS)
  - Estrutura HTMl do Portfólio
  - Estilização Avançada com CSS
  - Adicionando Elementos Gráficos e Animações Simples
    - Animações com CSS
  - Exercícios
15. [Interatividade Básica](#Interatividade-Básica-com-JavaScript)
  - Manipulação de Eventos
    - Eventos de Clique (`click`)
    - Eventos de Mouse (`mouseover` e `mouseout`)
  - Manipulação de Formulários
    - Captura de Dados de Formulário
    - Validação de Formulário
  - Interações Básicas (Mostrar/Esconder Elementos)
  - Exercícios
16. [Listas e Tabelas](#Trabalhando-com-Listas-e-Tabelas)
  - Criando Listas
    - Listas não Ordenadas (`ul`)
    - Listas Ordenadas (`ol`)
    - Listas de Definição (`dl`)
  - Estrutura de Tabelas
    - Estrutura Básica de uma Tabela
    - Cabeçalhos e Rodapés de Tabela
    - Mesclagem de Células
  - Estilizando Listas e Tabelas com CSS
    - Estilizando Listas
    - Estilizando Tabelas
  - Exercícios
17. [Projeto: 4](#Projeto-4:-Lista-de-Tarefas)
  - Estrutura HTML da Lista de Tarefas
  - Estilizando a Lista com CSS
  - Adicionando Interatividade com JavaScript
    - Adicionando Tarefas
    - Marcar Tarefas como Concluídas
  - Exercícios
18. [Flexbox e Grid](#Layout-Avançado-com-Flexbox-e-Grid)
  - Flexbox
    - Estrutura Básica do Flexbox
    - Direção e Alinhamento
    - Flex-Wrap
    - Propriedades dos Itens Flexíveis
    - Exemplos Práticos com Flexbox
  - Grid Layout
    - Estrutura Básica do Grid
    - Definindo Linhas e Colunas
    - Gap e Alinhamento
    - Posicionamento de Itens
    - Exemplos Práticos com Grid Layout
  - Exercícios
19. [Projeto 5: Dashboard Responsivo](#Projeto-5:-Dashboard-Responsivo)
  - Estrutura HTML do Dashboard
  - Layout e Estilização com Flexbox e Grid
    - Estilizando a Página
  - Adicionando Gráficos e Widgets
    - Incluindo Chart.js
    - Criando um Gráfico
    - Ajustando o Layout para Responsividade
  - Exercícios
20. [JavaScript Avançado](#JavaScript-Avançado)



## Introdução ao Desenvolvimento Web

## Fundamentos de HTML

[⬆️ Volta ao início](#Índice)

## Fundamentos de CSS

[⬆️ Volta ao início](#Índice)

## Fundamentos de JavaScript

[⬆️ Volta ao início](#Índice)

## Criando sua Primeira Página Web

[⬆️ Volta ao início](#Índice)

## Trabalhando com Imagens e Links

[⬆️ Volta ao início](#Índice)

## Estilizando a Página com CSS

[⬆️ Volta ao início](#Índice)

## Elementos de Formulários em HTML

[⬆️ Volta ao início](#Índice)

## Projeto 1: Página de Perfil

[⬆️ Volta ao início](#Índice)

## Layout Responsivo

[⬆️ Volta ao início](#Índice)

## Elementos Semânticos e Acessibilidade

[⬆️ Volta ao início](#Índice)

## Projeto 2: Blog Pessoal

[⬆️ Volta ao início](#Índice)

## Manipulação Avançada do DOM

[⬆️ Volta ao início](#Índice)

## Projeto 3: Página de Portfólio (HTML e CSS)

[⬆️ Volta ao início](#Índice)

## Interatividade Básica com JavaScript

[⬆️ Volta ao início](#Índice)

## Trabalhando com Listas e Tabelas

[⬆️ Volta ao início](#Índice)

## Projeto 4: Lista de Tarefas

[⬆️ Volta ao início](#Índice)

## Layouts Avançados com Flexbox e Grid

[⬆️ Volta ao início](#Índice)

## Projeto 5: Dashboard Responsivo

[⬆️ Volta ao início](#Índice)

## JavaScript Avançado

[⬆️ Volta ao início](#Índice)
