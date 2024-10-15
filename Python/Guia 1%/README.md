# **Guia de Python**

## **índice**

1. [**Introdução ao Python**](#Introdução-ao-Python)
    - O que é python e por que aprender?
        - Principais características do Python
    - Instalação do Python e configuração do ambiente
        - Instalando o Python
        - Verificando a instalação
    - Primeiro programa em Python: "Hello, Word!"
    - Como executar scripts Python
        - Executando pelo Terminal
        - Executando pelo seu Editor de Código
        - Executando interativamente
        - Jupyter Notebooks
2. [**Fundamentos da Linguagem**](#Fundamentos-da-Linguagem)
    - Tipos de dados básicos (int, float, str, bool)
        - Inteiros `int`
        - Números Reais `float`
        -  Strings `str`
        - Booleanos `bool`
    - Variáveis e tipos de atribuição
        - Como declarar variáveis
        - Regras para nomear variáveis
    - Entrada e saída de dados `input` e `print`
        - Saída de dados com `print()`
        - Entrada de dados com `input()`
    - Operadores Aritméticos, relacionais e lógicos
        - Operadores Aritméticos
        - Operadores Relacionais
        - Operadores Lógicos
        - Exercícios
3. [**Estruturas de Controle de Fluxo**](#Estruturas-de-Controle-de-Fluxo)
    - Condicionais `if`, `elif` e `else`
        - A estrutura `if`
        - A estrutura `elif`
        - A estrutura `else`
    - Estruturas de repetição `for` e `while`
        - A estrutura `for`
        - Função `range()` com `for`
        - A estrutura `while`
    - Controle de loops(`break`, `continue`, `pass`)
        - `break`
        - `continue`
        - `pass`
    - Compreensão de listas (list comprehensions)
        - Sintaxe básica
        - Compreensão de listas com condições
        - Exercícios
4. [**Estruturas de Dados em Python**](#Estruturas-de-Dados-em-Python)
    - Listas
        - Criando listas
        - Acessando elementos
        - Modificando listas
        - Iterando sobre listas
    - Tuplas
        - Criando tuplas
        - Acessando elementos da tupla
    - Conjuntos (sets)
        - Criando conjuntos
        - Operações com conjuntos
    - Dicionários
        - Criando dicionários
        - Acessando e modificando valores
        - Métodos úteis de dicionários
    - Operações e métodos com cada estrutura de dados
        - Listas
        - Tuplas
        - Conjuntos
        - Dicionários
        - Exercícios
5. [**Funções em Python**](#Funções-em-Python)
    - Definindo e chamando funções
        - Criando uma função
    - Parâmetros e argumentos
        - Funções com parâmetros
        - Parâmetros com valor padrão
    - Retorno de valores
    - Funções anônimas (lambda)
        - Criando uma função lambda
        - Usando lambda com múltiplos argumentos
    - Funções embutidas mais comuns (map, filter, zip, etc.)
        - `map()`
        - `filter()`
        - `zip()`
        - Exercícios
6. [**Trabalhando com Módulos e Pacotes**](#Trabalhando-com-Módulos-e-Pacotes)
    - Importando módulos padrão
        - Importando um módulo
        - Importando apenas funções específicas
        - Renomeando módulos
    - Criando seus próprios módulos
        - Exemplo de módulo personalizado
    - Instalação e uso de pacotes externos com pip
        - Instalando um pacote pip
        - Usando pacotes instalados
    - Principais bibliotecas do Python para iniciantes
        - Exercícios
7. [**Manipulação de Arquivos**](#Manipulação-de-Arquivos)
    - leitura e escrita de arquivos de texto
        - Abrindo um arquivo
        - Lendo um arquivo
        - Usando with para manipulação de arquivos
    - Manipulação de arvuios CSV
        - Lendo um arquivo CSV
        - Escrevendo em um arquivo CSV
    - Uso da biblioteca JSON
        - Lendo um arquivo JSON
        -  Escrevendo em um arquivo JSON
    - Trabalhando com arquivos binários
        - Lendo um arquivo binário
        - Escrevendo em um arquivo binário
        - Exercícios
8. [**Tratamendo de Exceções**](#Tratamento-de-Exceções)
    - Introdução a erros e exceções
    - Blocos try, except, else e finally
        - Usando try e except
        - Usando else
        - Usando finally
    - Criando exceções personalizadas
        - Criando uma exceção personalizada
        - Exercícios
9. [**Programação Orientada a Objetos (POO)**](#Programação-Orientada-a-Objetos-POO)
    - O que é POO e por que usar?
    - Classes e objetos
        - Criando uma classe
        - Criando um objeto
    - Atributos e métodos
        - Atributos de instância
        - Métodos de instância
    - Encapsulamento, herança e polimorfismo
        - Encapsulamento
        - Herança
        - Polimorfismo
    - Métodos especiais (construtor, destrutor, etc.)
        - `__init__`: Construtor
        - `__str__`: Representação em string
        - `__del__`: Destrutor
        - Exercícios
10. [**Biblioteca Numpy (manipulação de arrays)**](#Biblioteca-Numpy-manipulação-de-arrays)
    - Introdução ao NumPy
    - Criando arrays
        - Criando um array a partir de uma lista
        - Criando arrays multidimensionais
    - Principais funções e operações do NumPy
        - Funções de inicialização
        - Operações aritméticas
        - Indexação e fatiamento
        - Funções estatísticas
    - Operações com matrizes
        - Exercícios
11. Biblioteca Pandas (análise de dados)
    - Introdução ao Pandas
    - Estruturas de dados principais do Pandas
        - Criando uma Series
        - Criando um DataFrame
    - Manipulação de dados com Pandas
        - Selecionando colunas e linhas
        - Adicionando e removendo colunas
    - Operações de agrupamento e agregação
    - Leitura e escrita de arquivos
        - Lendo arquivos CSV
        - Escrevendo arquivos CSV
        - Exercícios
12. Biblioteca Matplotlib (visualização de dados)
    - Introdução ao Matplotlib
    - Criando gráficos básicos
        - Gráfico de linhas
        - Gráfico de barras
        - Gráfico de pizza
    - Personalizando gráficos
        - Alterando cores e estilos
        - Adicionando múltiplas séries de dados
    - Salvando gráficos
        - Exercícios
13. Biblioteca Request (requisições HTTP)
    - Introdução ao Requests
    - Fazendo requisições HTTP
        - Requisição GET
        - Requisição POST
    - Principais métodos HTTP
    - Trabalhando com parâmetros e cabeçalhos
        - Passando parâmetros em uma requisição GET
        - Passando cabeçalhos em uma requisição
    - Tratamento de erros e exceções
        - Exercícios





## **Introdução ao Python**

[Voltar ao início ⬆️](#Índice)

## **Fundamentos da Linguagem**

[Voltar ao início ⬆️](#Índice)

## **Estruturas de Controle de Fluxo**

[Voltar ao início ⬆️](#Índice)

## **Estruturas de Dados em Python**

[Voltar ao início ⬆️](#Índice)

## **Funções em Python**

[Voltar ao início ⬆️](#Índice)

## **Trabalhando com Módulos e Pacotes**

[Voltar ao início ⬆️](#Índice)

## **Manipulação de Arquivos**

[Voltar ao início ⬆️](#Índice)

## **Tratamento de Exceções**

[Voltar ao início ⬆️](#Índice)

## **Programação Orientada a Objetos (POO)**

[Voltar ao início ⬆️](#Índice)

## **Biblioteca Numpy (manipulação de arrays)**

[Voltar ao início ⬆️](#Índice)

## **Biblioteca Pandas (análise de dados)**

[Voltar ao início ⬆️](#Índice)

## **Biblioteca Matplotlib (visualização de dados)**

[Voltar ao início ⬆️](#Índice)

## **Biblioteca Requests (requisições HTTP)**

[Voltar ao início ⬆️](#Índice)

--- 
