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

### **O que é Python e por que aprender?**

Python é uma linguagem de programação de alto nível, interpretada e **extremamente versátil**. É usada em diversas áreas como desenvolvimento web, ciência de dados, inteligência artificial, automação, entre outras. Para entender melhor, vamos fazer uma analogia:

Imagine que você está em uma cozinha 🍳. Python seria como aquele **canivete suíço** que tem uma infinidade de funcionalidades e é útil em várias situações. Você pode usar uma ferramenta para cortar legumes, outra para abrir uma garrafa, e até mesmo uma pinça para pegar algo com precisão. Assim como o canivete, Python oferece uma variedade de "ferramentas" que permitem resolver problemas de diferentes naturezas.

#### Principais características do Python

1. **Sintaxe Simples**: Python tem uma sintaxe que se assemelha ao inglês, tornando-o mais fácil de aprender e ler. É como se estivesse lendo um manual de instruções, ao invés de tentar decifrar um código secreto.
2. **Grande Comunidade e Ecossistema**: Como Python é popular, há uma grande comunidade de programadores prontos para ajudar, e muitos recursos disponíveis. Isso significa que sempre haverá alguém para te ajudar quando você travar em alguma coisa 💡.
3. **Bibliotecas e Frameworks Poderosos**: Python tem uma vasta quantidade de bibliotecas e frameworks, como o `numpy` para cálculo numérico, `pandas` para manipulação de dados, e `django` para desenvolvimento web. É como ter um arsenal de ferramentas prontas para qualquer situação que você enfrentar 🛠️.

### **Instalação do Python e configuração do ambiente**

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

### **Primeiro programa em Python: "Hello, World!"**

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

### **Como executar scripts Python**

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

### **Tipos de dados básicos (int, float, str, bool)**

O Python possui tipos de dados essenciais que formam a base da linguagem. Vamos entendê-los e como eles se comportam.

#### Inteiros  `int`

Os números inteiros são aqueles sem casas decimais, como 1, 42, -10. Em Python, eles são representados pelo tipo `int`.

```python
meu_inteiro = 10
print(type(meu_inteiro))  # <class 'int'>
```

#### Pontos Flutuantes `float`

Os `floats` são números com casas decimais. Por exemplo, `3.14`, `0.5` e `-7.0`. Eles são úteis para cálculos mais precisos, como medições e valores monetários.

```python
meu_float = 3.14
print(type(meu_float))  # <class 'float'>
```

Imagine que você está medindo a quantidade de água em um copo 🥤. Você pode ter **150 ml** ou **150.5 ml**. O primeiro é um `int`, e o segundo é um `float`.

#### Strings `str`

Uma `string` é uma sequência de caracteres, usada para representar texto. Pode ser qualquer coisa que você coloca entre aspas simples `' '` ou duplas `" "`.

```python
meu_texto = "Olá, Python!"
print(type(meu_texto))  # <class 'str'>
```

💡 As strings são como o papel que você escreve uma mensagem 📝, enquanto os outros tipos de dados são os números que fazem seus cálculos.

#### Booleanos `bool`

O tipo `bool` é usado para representar valores verdadeiros ou falsos, com apenas dois possíveis valores: `True` ou `False`. Eles são usados em estruturas de controle de fluxo, como condicionais.

```python
meu_bool = True
print(type(meu_bool))  # <class 'bool'>
```

### **Variáveis e tipos de atribuição**

As variáveis são como "caixas" onde você armazena valores 🗃️. Elas permitem que você manipule dados de forma dinâmica durante a execução do seu programa.

#### Como declarar variáveis

Você não precisa especificar o tipo da variável, o Python é dinamicamente tipado. Basta atribuir um valor com `=`.

```python
idade = 25   # A variável 'idade' agora contém um inteiro
nome = "Maria"  # A variável 'nome' agora contém uma string
```

#### Regras para nomear variáveis

- Devem começar com uma letra ou `_` (underline).
- Não podem começar com um número.
- Não podem conter espaços ou caracteres especiais como `@`, `#`, `!`.
- São **case-sensitive** (`idade` e `Idade` são variáveis diferentes).

💡 Imagine as variáveis como "etiquetas" que você coloca em caixas 📦. A etiqueta "idade" pode estar associada ao número `25`, e a etiqueta "nome" ao texto `"Maria"`.

### **Entrada e saída de dados (input e print)**

A comunicação entre você e seu programa é feita com as funções `input()` e `print()`.

#### Saída de dados com `print()`

A função `print()` é usada para exibir informações na tela.

```python
print("Olá, Mundo!")
```

#### Entrada de dados com `input()`

A função `input()` permite que o usuário insira dados. O valor inserido é sempre do tipo `string`.

```python
nome = input("Digite seu nome: ")
print("Bem-vindo, " + nome + "!")
```

💡 Dica: Quando precisar de um número do usuário, converta o valor de `input()` usando `int()` ou `float()`.

```python
idade = int(input("Digite sua idade: "))
print("Você tem", idade, "anos.")
```

### **Operadores aritméticos, relacionais e lógicos**

#### Operadores aritméticos

Esses operadores permitem realizar operações matemáticas:

|    Operador    |    Descrição    |    Exemplo    |
|----------------|-----------------|---------------|
|       `+`      |      Adição     |  `2 + 3` = 5  | 
|       `-`      |     Subtração   |  `5 - 2` = 3  |
|       `*`      |  Multiplicação  |  `4 * 3` = 12 |
|       `/`      |      Divisão    | `10 / 2` = 5  |
|      `//`      | Divisão Inteira |`10 // 3` = 3  |
|       `%`      |       Resto     | `10 % 3` = 1  |
|      `**`      |     Potência    |  `2 ** 3` = 8 |

#### Operadores relacionais

Esses operadores comparam valores e retornam `True` ou `False`:

|    Operador    |    Descrição    |    Exemplo    |
|----------------|-----------------|---------------|
|      `==`      |      Igual      |`5 == 5` = True|
|      `!=`      |    Diferente    |`5 != 3` = True|
|      `>`       |    Maior que    |`5 > 3` = True |
|      `<`       |    Menor que    |`3 < 5` = True |
|      `>=`      |  Maior ou Igual |`5 >= 5` = True|
|      `<=`      |  Menor ou Igual |`3 <= 5` = True|
 
#### Operadores lógicos

São usados para combinar expressões:

|    Operador    |    Descrição    |    Exemplo    |
|----------------|-----------------|---------------|
|     `and`      |        E        |`True and False` = False  |
|      `or`      |       Ou        |`True or False` = True|
|     `not`      |       Não       |`not True` = False |

💡 Pense nos operadores como sinais de trânsito 🚦. Eles orientam como o fluxo do seu código deve prosseguir, baseando-se nas condições que você estabelece.

### 📝 **Exercícios**

1. **Crie um programa** que solicite ao usuário que insira seu nome e idade. Em seguida, exiba uma mensagem dizendo: `"Olá, [nome], você tem [idade] anos!"`.
2. **Crie um programa** que leia dois números do usuário e exiba a soma, subtração, multiplicação e divisão desses números.
3. **Crie um programa** que solicite ao usuário três notas e calcule a média aritmética delas. Exiba se o aluno está "Aprovado" (média ≥ 7) ou "Reprovado".
4. **Crie um programa** que leia um número e exiba se ele é par ou ímpar usando o operador `%`.

[Voltar ao início ⬆️](#Índice)

## **Estruturas de Controle de Fluxo**

### **Condicionais (if, elif, else)**

As estruturas condicionais permitem que o programa **tome decisões** com base em certas condições, assim como nós fazemos diariamente. Imagine que você está planejando sair, e decide se vai levar um guarda-chuva ☔️. Se estiver chovendo, você leva; se não, deixa em casa. As condicionais no Python funcionam da mesma forma.

#### A estrutura `if`

A estrutura `if` é usada para executar um bloco de código se uma condição for verdadeira.

```python
idade = 18
if idade >= 18:
    print("Você é maior de idade.")

```
💡 **Dica**: O Python utiliza **indentação** (4 espaços ou um TAB) para definir blocos de código. Tome cuidado com a identação, pois ela é essencial para que o programa funcione corretamente!

#### A estrutura `else`

O `else` especifica o que fazer caso a condição do if não seja verdadeira.

```python
idade = 16
if idade >= 18:
    print("Você é maior de idade.")
else:
    print("Você é menor de idade.")
```

#### A estrutura `elif`

Se você precisar verificar várias condições, pode usar `elif` (abreviação de "else if"). Pense nele como opções adicionais para o seu "se".

```python
nota = 8.5
if nota >= 9:
    print("Excelente!")
elif nota >= 7:
    print("Bom trabalho!")
else:
    print("Você precisa melhorar.")

```

💡 **Analogias do dia a dia**: Imagine que está pedindo uma pizza 🍕. Se você quer uma pizza de "Calabresa", a escolha é clara. Se não tiver calabresa, você aceita "Mussarela". Se nem calabresa nem mussarela estiverem disponíveis, vai de "Frango". O `if`, `elif` e `else` funcionam como as opções que você tem no menu.

### **Estruturas de repetição (for e while)**

As estruturas de repetição permitem executar um bloco de código várias vezes, o que é útil para evitar repetições desnecessárias.

#### Estrutura `for`

O `for` é usado quando sabemos o número de iterações ou quando queremos percorrer uma sequência (lista, tupla, string, etc.).

```python
nomes = ["Ana", "Carlos", "Bianca"]
for nome in nomes:
    print("Olá,", nome)
```

#### Função `range()` com `for`

O `range()` gera uma sequência de números. Ele é muito útil em conjunto com `for`.

```python
for i in range(5):  # Imprime os números de 0 a 4
    print(i)

```

💡 Imagine que você está na academia 🏋️. Quando o instrutor diz para fazer 10 repetições, você sabe que vai repetir 10 vezes o mesmo movimento – é o mesmo conceito do `for`.

#### Estrutura `while`

O `while` é usado quando não sabemos quantas vezes a repetição deve ocorrer, pois ela depende de uma condição ser verdadeira.

```python
contador = 0
while contador < 5:
    print("Contagem:", contador)
    contador += 1

```

⚠️ **Cuidado**: Certifique-se de que a condição do `while` se tornará falsa em algum momento, ou seu código entrará em um **loop infinito**!

### **Controle de loops (break, continue, pass)**

Às vezes, precisamos de mais controle sobre nossos loops. O Python oferece as palavras-chave `break`, `continue` e `pass` para lidar com essas situações.

#### `break`

O `break` encerra o loop imediatamente.

```python
for numero in range(10):
    if numero == 5:
        break
    print(numero)
# Saída: 0, 1, 2, 3, 4
```

#### `continue`

O `continue` interrompe a iteração atual e passa para a próxima.

```python
for numero in range(5):
    if numero == 2:
        continue
    print(numero)
# Saída: 0, 1, 3, 4
```

#### `pass`

O `pass` é um "placeholder". Não faz nada, mas é útil quando a sintaxe exige que um bloco de código esteja presente.

```python
for i in range(3):
    pass  # Futuramente, adicionaremos o código aqui
```

### **Compreensão de listas (list comprehensions)**

A compreensão de listas é uma maneira concisa de criar listas em Python, tornando seu código mais legível e eficiente.

#### Sintaxe básica

```python
numeros = [x for x in range(5)]
print(numeros)  # [0, 1, 2, 3, 4]
```

#### Compreensão de listas com condições

Podemos adicionar condições à compreensão de listas.

```python
pares = [x for x in range(10) if x % 2 == 0]
print(pares)  # [0, 2, 4, 6, 8]

```

### 📝 **Exercícios**

1. **Escreva um programa** que peça ao usuário um número e diga se ele é positivo, negativo ou zero, usando condicionais `if`, `elif` e `else`.
2. **Crie uma lista** com os nomes de cinco amigos e, usando um `for`, exiba uma mensagem de saudação para cada um.
3. **Escreva um programa** que calcule a soma de todos os números pares de 1 a 100 utilizando um loop `for`.
4. **Crie um programa** que simule uma senha de 4 dígitos. O usuário tem 3 tentativas para acertar. Use um loop `while` e o `break` para controlar as tentativas.

💡 **Analogias do mundo real**: É como uma "linha de montagem" 🚗. A list comprehension cria elementos seguindo um padrão definido, como peças sendo montadas em série.

[Voltar ao início ⬆️](#Índice)

## **Estruturas de Dados em Python**

### Listas

As listas são uma das estruturas de dados mais versáteis em Python. Pense nelas como uma **prateleira de livros** 📚, onde cada livro ocupa uma posição específica e você pode acessar, adicionar ou remover livros quando quiser.

#### Criando listas

Você pode criar uma lista usando colchetes `[]` e separando os elementos por vírgulas.

```python
minha_lista = [1, 2, 3, "Python", True]
print(minha_lista)  # [1, 2, 3, "Python", True]
```

#### Acessando elementos

Para acessar um elemento de uma lista, utilizamos o índice (posição) do item. **Lembre-se que a contagem começa em 0.**

```python
print(minha_lista[0])  # 1
print(minha_lista[3])  # "Python"
```
​
💡 **Dica:** Use índices negativos para acessar os elementos de trás para frente!

```python
print(minha_lista[-1])  # True
```

#### Modificando listas

Você pode adicionar, remover ou alterar elementos da lista.

- **Adicionar:**  Use `append()` para adicionar um elemento ao final da lista.

```python
minha_lista.append("Novo Item")
print(minha_lista)
```
​
- **Remover:** Use `remove()` para remover um item específico, ou `pop()` para remover pelo índice.

```python
minha_lista.remove("Python")
print(minha_lista)

minha_lista.pop(0)  # Remove o primeiro elemento
print(minha_lista)
```

#### Iterando sobre listas

Você pode usar um `for` para percorrer cada item da lista.

```python
for item in minha_lista:
    print(item)
```

### **Tuplas**

As tuplas são similares às listas, mas são **imutáveis**, ou seja, **não podem ser alteradas** depois de criadas. Pense nelas como o **menu de um restaurante** 🍽️. Uma vez que o menu está impresso, não é possível alterar as opções sem fazer um novo.    

#### Criando tuplas

Use parênteses `()` para criar uma tupla.

```python
minha_tupla = (1, 2, 3, "Python", True)
print(minha_tupla)
```

#### Acessando elementos da tupla

O acesso é feito da mesma forma que em listas, utilizando índices.

```python
print(minha_tupla[1])  # 2

```

### **Conjuntos (sets)**

Conjuntos são coleções **não ordenadas e sem elementos duplicados**. Pense neles como uma **caixa de lápis de cor** 🎨, onde cada cor aparece apenas uma vez.

#### Criando conjuntos

Use chaves `{}` para criar um conjunto.

```python
meu_conjunto = {1, 2, 2, 3, 4, 4}
print(meu_conjunto)  # {1, 2, 3, 4}
```

#### Operações com conjuntos

Você pode realizar operações como união `(|)`, interseção `(&)` e diferença `(-)`.

```python
a = {1, 2, 3}
b = {3, 4, 5}

print(a | b)  # União: {1, 2, 3, 4, 5}
print(a & b)  # Interseção: {3}
print(a - b)  # Diferença: {1, 2}
```

### **Dicionários**

Os dicionários são como um **manual de instruções** 📖, onde cada "palavra" tem um "significado". Eles armazenam pares de **chave: valor**.

#### Criando dicionários

Use chaves `{}` e separe os pares com `:`.

```python
meu_dict = {"nome": "Python", "ano": 1991, "tipo": "Linguagem de Programação"}
print(meu_dict)
```

#### Acessando e modificando valores

Você pode acessar um valor utilizando sua chave.

```python
print(meu_dict["nome"])  # "Python"

# Modificando
meu_dict["ano"] = 2024
print(meu_dict)
```

#### Métodos úteis de dicionários

- `keys()`: Retorna todas as chaves.
- `values()`: Retorna todos os valores.
- `items()`: Retorna todos os pares chave-valor.

```python
print(meu_dict.keys())    # dict_keys(['nome', 'ano', 'tipo'])
print(meu_dict.values())  # dict_values(['Python', 2024, 'Linguagem de Programação'])
```

### **Operações e métodos com cada estrutura de dados**

#### Listas

- `len(lista)`: Retorna o número de elementos.
- `max(lista)`, `min(lista)`: Retorna o maior e menor elemento.
- `sort()`: Ordena a lista em ordem crescente.

```python
lista = [3, 1, 4, 1, 5]
lista.sort()
print(lista)  # [1, 1, 3, 4, 5]
```

#### Tuplas

- `count(valor)`: Conta quantas vezes o valor aparece na tupla.
- `index(valor)`: Retorna o índice da primeira ocorrência do valor.

#### Conjuntos

- ´add(elemento)`: Adiciona um elemento ao conjunto.
- `remove(elemento)`: Remove um elemento específico.

```python
meu_conjunto.add(6)
print(meu_conjunto)  # {1, 2, 3, 4, 6}
```

#### Dicionários

- `get(chave)`: Retorna o valor associado à chave, ou `None` se a chave não existir.
- `pop(chave)`: Remove a chave e retorna seu valor.

```python
valor = meu_dict.pop("ano")
print(valor)       # 2024
print(meu_dict)    # {'nome': 'Python', 'tipo': 'Linguagem de Programação'}

```

### 📝 **Exercícios**

1. **Crie uma lista** com os números de 1 a 10 e imprima apenas os números pares.
2. **Crie uma tupla** com cinco elementos e tente alterá-los para entender a imutabilidade.
3. **Crie um conjunto** a partir de uma lista que contém elementos duplicados e mostre como os duplicados são removidos.
4. **Crie um dicionário** que armazene o nome, idade e cidade de uma pessoa e exiba essas informações de forma organizada.



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
