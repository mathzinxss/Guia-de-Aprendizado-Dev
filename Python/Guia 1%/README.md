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
11. [**Biblioteca Pandas (análise de dados)**](#Biblioteca-Pandas-análise-de-dados)
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
12. [**Biblioteca Matplotlib (visualização de dados**)](#Biblioteca-Matplotlib-visualização-de-dados)
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
13. [**Biblioteca Request (requisições HTTP)**](#Biblioteca-Requests-requisições-HTTP)
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

---

## **Introdução ao Python**

### O que é Python e por que aprender?

Python é uma linguagem de programação de alto nível, interpretada e **extremamente versátil**. É usada em diversas áreas como desenvolvimento web, ciência de dados, inteligência artificial, automação, entre outras. Para entender melhor, vamos fazer uma analogia:

Imagine que você está em uma cozinha 🍳. Python seria como aquele **canivete suíço** que tem uma infinidade de funcionalidades e é útil em várias situações. Você pode usar uma ferramenta para cortar legumes, outra para abrir uma garrafa, e até mesmo uma pinça para pegar algo com precisão. Assim como o canivete, Python oferece uma variedade de "ferramentas" que permitem resolver problemas de diferentes naturezas.

#### Principais características do Python

1. **Sintaxe Simples**: Python tem uma sintaxe que se assemelha ao inglês, tornando-o mais fácil de aprender e ler. É como se estivesse lendo um manual de instruções, ao invés de tentar decifrar um código secreto.
2. **Grande Comunidade e Ecossistema**: Como Python é popular, há uma grande comunidade de programadores prontos para ajudar, e muitos recursos disponíveis. Isso significa que sempre haverá alguém para te ajudar quando você travar em alguma coisa 💡.
3. **Bibliotecas e Frameworks Poderosos**: Python tem uma vasta quantidade de bibliotecas e frameworks, como o `numpy` para cálculo numérico, `pandas` para manipulação de dados, e `django` para desenvolvimento web. É como ter um arsenal de ferramentas prontas para qualquer situação que você enfrentar 🛠️.

### Instalação do Python e configuração do ambiente

Antes de começar a programar, precisamos instalar o Python no seu computador. Siga os passos abaixo para configurar seu ambiente:

#### Instalando o Python

1. Acesse o site oficial do Python: [python.org](https://www.python.org/downloads/)
2. Baixe a versão mais recente para o seu sistema operacional (Windows, macOS ou Linux).
3. Durante a instalação, **não se esqueça de marcar a opção "Add Python to PATH"**! Isso permitirá que você execute o Python diretamente no terminal.

#### Verificando a instalação

Abra o terminal (no Windows, use o **Prompt de Comando** ou **Powershell**; no macOS e Linux, o **Terminal**) e digite o seguinte comando:

```bash
python --version
```

Se tudo estiver certo, a versão do Python será exibida. Você também pode usar `python3 --version` em sistemas baseados em UNIX, como Linux e macOS.

💡 **Dica**: Utilize a combinação `CTRL + L` para limpar o terminal quando ele estiver cheio de informações.

### Primeiro programa em Python: "Hello, World!"

É hora de colocar a mão na massa! Vamos criar nosso primeiro programa em Python: o famoso **Hello, World!** 🌎. Ele é considerado o "primeiro passo" em qualquer linguagem de programação, e serve para garantir que o ambiente de desenvolvimento está funcionando corretamente.

Abra seu editor de texto (pode ser o VSCode, PyCharm ou até o bloco de notas, se preferir) e escreva o seguinte código:

```python
print("Hello, World!")
```

Agora, salve o arquivo com o nome `hello_world.py` e execute no terminal com o comando:

```bash
python hello_world.py
```

Se tudo estiver certo, você verá o seguinte no terminal:

```
Hello, World!
```

🎉 **Parabéns, você acabou de criar seu primeiro programa em Python!**

### Como executar scripts Python

Existem várias maneiras de executar um script Python, e conhecer todas elas é importante para aumentar a sua eficiência como programador.

#### Executando pelo Terminal

Como você acabou de ver, podemos executar um script diretamente pelo terminal. Basta navegar até o diretório onde o arquivo está salvo e usar o comando:

```bash
python nome_do_seu_arquivo.py
```

#### Executando pelo seu Editor de Código

A maioria dos editores de código como **VSCode**, **PyCharm** ou **Jupyter Notebook** permite que você execute o código diretamente na interface do programa. Basta abrir o arquivo e clicar no botão de "Run" ▶️.

#### Executando interativamente

Se você quer testar pequenos trechos de código, pode usar o modo interativo do Python. Basta digitar `python` no terminal, e você terá um ambiente onde pode testar comandos rapidamente, como uma calculadora.

Exemplo:

```python
>>> 2 + 2
4
```

#### Jupyter Notebooks

Se você pretende trabalhar com **Ciência de Dados** ou **Análise de Dados**, vale a pena aprender a usar o Jupyter Notebook. Ele permite que você crie "cadernos" onde pode combinar código Python, texto explicativo, imagens e gráficos. É uma ferramenta poderosa! 🔍

[Voltar ao início ⬆️](#Índice)

## **Fundamentos da Linguagem**

### Tipos de dados básicos (int, float, str, bool)

O Python possui tipos de dados essenciais que formam a base da linguagem. Vamos entendê-los e como eles se comportam.

#### Inteiros   `int`

Os números inteiros são aqueles sem casas decimais, como 1, 42, -10. Em Python, eles são representados pelo tipo `int`.
meu_inteiro = 10
print(type(meu_inteiro))  # <class 'int'>



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
