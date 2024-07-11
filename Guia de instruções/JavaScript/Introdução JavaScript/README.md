# Guia JavaScript

## Índice:

1. [Introdução](#Introdução)
2. [Variáveis](#Variáveis)
3. [Arrays](#Arrays)
4. [Loops](#Loops)
5. [Estruturas de Controle](#Estruturas-de-Controle)
6. [Funções](#Funções)
7. [Objetos](#Objetos)
8. [Estrutura de Dados Map](#Estrutura-de-Dados-Map)
9. [Estrutura de Dados Set](#Estrutura-de-Dados-Set)
10. [Classes](#Classes)
11. [Strings](#Strings)
12. [Operador Spread](#Operador-Spread)
13. [Desestruturação](#Desestruturação)
14. [Arrow Functions](#Arrow-Functions)
15. [JSON](#JSON)

## Apresentação

Olá, muito obrigado por ter acessado esse guia, ele foi pensado e desenvolvido com muito carinho com o objetivo de ajudar você que está começando na programação.🧡

Com esse guia você vai ser capaz de dar os seus primeiros passos práticos no mundo da programação com JavaScript.

Não esquece de me seguir no Instagram [**@umporcentoprog**](https://www.instagram.com/umporcentoprog/)

### Sistema CPV

O sistema CPV é um sistema de 3 passos para aprender programação e aplicar os conceitos aprendidos. É o método que eu usei quando estava começando na programação e que uso até hoje para aprender novas tecnologias.

CPV Significa:

**Conceito** → Aprender um conceito, a teoria;

**Pratica** → Praticar o conceito aprendido com exercícios ou projetos práticos;

**Vitrine** → Expor o que você aprendeu para o mundo, colocar em um repositório do GitHub, fazer um post no Linkedin, enfim, faz uma vitrine do seu conhecimento.

Recomendo fortemente que você aplique esse sistema para tirar o melhor proveito desse guia.

### Como rodar os códigos JavaScript?

#### **Opção 1 - Executando JavaScript na sua Máquina com Node.js**

Primeira coisa, você precisa ter o Node.js no seu PC. Baixe ele no [site oficial do Node.js](https://nodejs.org/en/download/current). Isso permite rodar JavaScript diretamente no seu computador, sem depender de um navegador.

Configurando o Ambiente:

Recomendo usar o Visual Studio Code como editor. Ele é top e tem um monte de recursos pra facilitar a vida.

Seu Primeiro Script:

```jsx
console.log("Olá, mundo! Vamos programar?");
```

Salve esse código em um arquivo .js, tipo **meuScript.js**.

Rodando o Script: Abre o terminal do VsCode e manda um **node meuScript.js**. Você vai ver a mensagem do seu código aparecer no terminal.

Caso tenha ficado alguma dúvida você consegue encontrar vários tutoriais no Youtube, basta pesquisar: “Como rodar JavaScript no VsCode”.

#### **Opção 2 - Executando JavaScript Online em Playgrounds**

Playgrounds de JavaScript: Às vezes, você quer testar algo rápido sem ter que mexer na sua máquina. Aí entram os playgrounds online, como o JSFiddle ou o CodePen.

Como Usar: É só entrar no site, escrever seu JavaScript e mandar rodar. Não precisa instalar nada. Moleza!

**Exemplo Online:**

Vai no [JSFiddle](https://jsfiddle.net/).

No painel de JavaScript, coloca o mesmo código:

```jsx
console.log("Testando JavaScript online!");.
```

Clica em "Run" e vê o resultado no painel de output.

**[⬆ voltar ao topo](#Índice)**


## Introdução

### História do JavaScript:

JavaScript é uma linguagem de programação interpretada que tem se tornado um dos pilares do desenvolvimento web moderno. Originalmente concebida para adicionar interatividade às páginas da web, o JavaScript evoluiu para uma linguagem completa, capaz de desenvolver complexas aplicações web, mobile, e até mesmo servidores com o Node.js.

- **Versatilidade**: O que diferencia o JavaScript de outras linguagens é sua capacidade de rodar tanto no cliente (navegador) quanto no servidor (Node.js), tornando-o uma ferramenta essencial para full-stack developers.
- **Facilidade de Aprendizado com Profundidade Técnica**: Apesar de ser amigável para iniciantes, o JavaScript possui profundidade suficiente para construir aplicações complexas e escaláveis, sendo usado por gigantes da tecnologia.

#### **Um pouco da história:**

- **Nascimento e Objetivos Iniciais**: Criado por Brendan Eich em 1995, na Netscape, o JavaScript foi inicialmente projetado para tornar o conteúdo da web mais dinâmico. Naquela época, a internet era majoritariamente estática, somente HTML e CSS, e o JavaScript surgiu como uma solução para trazer interatividade.
- **Evolução e Padronização (ECMAScript)**: Com o passar dos anos, a linguagem sofreu várias modificações e melhorias. Para padronizar a linguagem, foi criada a especificação ECMAScript, que é atualizada anualmente com novas funcionalidades e melhorias.
- **A Era Node.js e o JavaScript no Servidor**: O lançamento do Node.js em 2009 foi um marco para o JavaScript, permitindo seu uso fora dos navegadores e trazendo capacidades de desenvolvimento backend para a linguagem.

### Características Técnicas do JavaScript:

- **Tipagem Dinâmica e Flexibilidade**: O JavaScript é uma linguagem de tipagem dinâmica, o que significa que as variáveis podem armazenar diferentes tipos de dados e mudar esses tipos em tempo de execução. Isso traz uma grande flexibilidade na codificação, mas também exige uma compreensão clara de conceitos como coercion (conversão automática de tipos) e truthiness (como valores são interpretados em contextos booleanos).
- **Funcionalidades Modernas**: Ao longo dos anos, o JavaScript incorporou conceitos de programação funcional e orientada a objetos, oferecendo recursos como closures, funções de alta ordem, promessas para programação assíncrona, classes, e módulos.

JavaScript não é apenas uma ferramenta para adicionar efeitos ou interatividade simples em sites; é uma **linguagem robusta, capaz de construir sistemas complexos e performáticos**. Seu papel no desenvolvimento web moderno é indiscutível, e seu domínio é essencial para qualquer desenvolvedor que deseja estar na vanguarda da tecnologia.

**[⬆ voltar ao topo](#Índice)**


## Variáveis

Variáveis são usadas para armazenar informações que serão referenciadas e manipuladas em um programa de computador. Elas também fornecem uma maneira de rotular dados com um nome descritivo, para que nossos programas possam ser entendidos de maneira mais clara e concisa.

### **Declaração de Variáveis: var, let ou const?**

No JavaScript, temos 3 jeitos de declarar variáveis, no começo é meio confuso, e no final fica mais confuso ainda. Porém vou explicar de uma forma que você vai entender fácil fácil:

A diferença delas basicamente está no **escopo**, basicamente escopo é em que lugar a variável está inserida e de onde ela pode ser acessada.

`var`: O vovô das variáveis. Era tipo o único jeito de declarar uma variável antigamente. O lance é que ele é meio bagunçado, porque não se importa muito com onde você o declara. Pode criar umas paradas estranhas, como você declarar ela dentro de uma função e acessar fora. É tipo o cara que não respeita as regras de onde deve estar, **por isso você não vai estar utilizando var durante o andamento desse curso**.

```jsx
if (true) {
    var exemploVar = "Eu sou global!";
}
console.log(exemploVar);
// Funciona, porque var é global
```

`let`: O "mano mais novo" do `var`. O `let` é mais organizado, sabe? Ele respeita os limites do bloco onde foi declarado. Se você declara dentro de um `if`, por exemplo, fora dele ninguém conhece. É tipo aquele amigo que só fica na dele, na sua área.

```jsx
if (true) {
	let exemploLet = "Só existo aqui dentro, beleza?";
}
console.log(exemploLet);
// Isso vai causar um Erro! O 'let' não deixa ver fora do bloco
```

`const`: Const vem de constante, o mais firmeza dos três. `const` é tipo o `let`, mas ainda mais rígido. Uma vez que você dá um valor pra ele, não pode mudar mais. É ideal pra quando você tem valores que não quer que mudem nunca, tipo constantes mesmo. É o cara que não muda de opinião, tá ligado?

```jsx
const exemploConst = "Sou firmeza, não mudo.";
exemploConst = "Vou tentar mudar"; // Erro! O 'const' não deixa mudar

```

Basicamente, é isso aí: `var` é o avô, meio sem regra; `let` é o cara mais na dele, que fica no seu espaço; e `const` é o firmeza que não muda nunca.

### **Regras de Nomenclatura de Variáveis**

Assim como existe a [lista de nomes proibidos para filhos no Brasil](https://www.megacurioso.com.br/estilo-de-vida/122607-conheca-100-nomes-proibidos-de-serem-registrados-no-brasil.htm), no JavaScript temos várias regras para dar nome às nossas variáveis:

**Precisa começar com Letra, Sublinhado (_), ou Cifrão ($):**

Não dá pra colocar número no início, `let 1nome` não vai rolar, mas `let nome1` tá valendo.

Exemplo:

```jsx
let _idade = 20;
let $dinheiro = "pouco";
let temDúvidas = "deixe um comentário";
```

Exemplo que vai dar erro:

```jsx
let 1chance = "não rola, parceiro";
```

**Zero Espaços, Zero Problemas**: No mundo do JavaScript, espaço é inimigo. `let meu sonho` vai dar ruim, mas `let meuSonho` tá tranquilo.

Exemplo:

```jsx
let minhaTrajetoria = "mudou o jogo";
```

Exemplo que vai dar erro:

```jsx
let minha trajetória = "vai dar bug";
```

**Case Sensitive**: `let nome` e `let Nome` são dois caras diferentes. O JavaScript não mistura as coisas, cada um no seu quadrado.

Exemplo:

```jsx
let vidaDeDev = "uma";
let VidaDeDev = "outra";
```

**Sem Palavras Reservadas**: Tem umas palavras que são tipo área VIP no JavaScript, só pra ele.

Coisas como `if`, `break`, `let`... essas palavras são do sistema, não dá pra usar como nome de variável.

Exemplo que vai dar erro:

```jsx
let if = "não pode, mano";
let let = "isso aqui vai dar erro...";
```

### **Tipos de Dados no JavaScript**

Apesar de ser uma linguagem dinamicamente tipada, o js possuí vários tipos de dados, vamos passar sobre cada um deles rapidamente, pois isso é um conceito que você aprenderá melhor na prática, principalmente sofrendo com bus:

**String**: Sabe aquele texto, frase, palavra? Isso é uma string. Tudo que fica entre aspas, pode ser simples ou duplas:

```jsx
let nome = "JavaScript";
let frase = 'mudou minha vida';
```

**Number**: Aqui é o mundo dos números. Não importa se é inteiro, decimal, positivo ou negativo.

```jsx
let idade = 20;
let pi = 3.14;
```

**Boolean**: Só tem dois valores: `true` ou `false`. É o tipo "sim ou não" do JavaScript.

```jsx
let amoCodar = true;
let odeioCodar = false;
```

**Undefined**: Tipo, quando você cria uma variável e não dá nenhum valor pra ela, ela fica `undefined`, ou seja, indefinida.

```jsx
let vazio; console.log(vazio); // vai mostrar 'undefined'
```

**Null**: Parecido com `undefined`, mas aqui é quando você quer deixar claro que a variável tá vazia, sem nada mesmo.

```jsx
let semValor = null;
```

**Object**: Objeto é tipo uma coleção de dados. Pensa num pacote que tem várias coisas dentro, cada coisa com seu nome (vamos nos aprofundar em objetos mais para a frente).

```jsx
let pessoa = {
	nome: "Dev",
	idade: 20,
	linguagemFavorita: "JavaScript"
};
```

**Array**: Array é uma lista de coisas, que podem ser números, strings, objetos, até outros arrays.

```jsx
let linguagens = ["JavaScript", "Python", "Ruby"];
```

**Symbol:** É um tipo mais raro, usado para criar identificadores únicos. Não é tão comum para iniciantes, mas é bom saber que existe.

```jsx
let id = Symbol('id');
```

### Exercícios com variáveis🔥

- [x] Crie 3 variáveis contendo:

- Seu nome;
- Sua idade;
- Comida favorita;

Após declarar as variáveis e atribuir os valores, utilize o **`console.log`** para formar uma frase como:

“Meu nome é …, tenho …. anos e minha comida favorita é …..”

**[⬆ voltar ao topo](#Índice)**


## Arrays

Imagine um armário com várias gavetas. Em cada gaveta, você guarda um tipo de coisa. No mundo da programação, um array é como esse armário: uma coleção de 'gavetas' (elementos) onde você pode armazenar e organizar dados.

### **Definindo um Array:**

```jsx
let series = ["Breaking Bad", "Stranger Things", "Black Mirror"];
// Jeito mais comum

let filmes = new Array("Pulp Fiction", "Clube da Luta", "Matrix");
// Também funciona, mas é menos usado
```

Aqui, filmes é um array que armazena três strings. Cada filme é como um item em uma gaveta, com seu próprio 'número' (índice).

Um array pode ser declarado de duas formas: com colchetes `[]` ou com `new Array()`. Mas a galera usa mais os colchetes porque é mais fácil e direto🤘🏻.

### **Acessando Elementos de um Array:**

```jsx
let primeiraSerie = series[0];
// "Breaking Bad"

let filmeInexistente = filmes[-1];
// undefined, isso não rola
```

Para pegar um filme ou série, você usa o número da gaveta (índice).

Aqui, `0` representa a primeira gaveta, onde está "Breaking Bad".

Isso é algo que você não pode esquecer nunca, arrays **sempre começam no índice 0, ou seja, o primeiro item da lista será o item 0!**

### Métodos de Arrays:

**Push**: Pra colocar alguém no final da lista, usa `push` .

```jsx
series.push("Game of Thrones");
// Agora series é ["Breaking Bad", "Stranger Things", "Black Mirror", "Game of Thrones"]
```

**Pop**: Pra mandar o último da lista embora, usa `pop` .

```jsx
series.pop();
// Tchau "Game of Thrones", agora series é ["Breaking Bad", "Stranger Things", "Black Mirror"]
```

**Shift**: Se quiser tirar o primeiro da lista, o lance é `shift`.

```jsx
series.shift();
// "Breaking Bad" saiu, sobraram ["Stranger Things", "Black Mirror"]
```

**Unshift**: E se a ideia é adicionar alguém no começo da lista, usa `unshift`.

```jsx
series.unshift("The Witcher");
// "The Witcher" entrou na frente, agora series é ["The Witcher", "Stranger Things", "Black Mirror"]
```

**Alterando Elementos do Array**: Se você quer mudar alguém que já tá na lista, é só chegar no índice dele e trocar.

```jsx
let games = ["FIFA", "Call of Duty", "Minecraft"];
games[0] = "FIFA 21";
// Agora FIFA virou FIFA 21
```

**Length**: Pra saber quantos elementos existem na lista, usa `length`. É tipo perguntar "quantos são?"

```jsx
let totalSeries = series.length;
// Vai dizer quantos elementos tem no array series
```

**Percorrendo um Array com Loop**: Às vezes, você vai querer falar com cada um da fila. Para isso, usa um loop, como o `for`.

```jsx
for (let i = 0; i < games.length; i++) {
	console.log(games[i]); // Mostra cada jogo
}
```

### Exercícios com arrays:

- [ ] **Adicionando Elementos a um Array**:
Declare um array chamado **`animais`** e adicione três nomes de animais usando o método **`push`**.
- [ ] **Removendo o Primeiro Elemento do Array**:
A partir do array **`animais`** criado anteriormente, remova o primeiro elemento usando **`shift`** e imprima o array modificado.0
- [ ] **Inserindo Elementos no Início do Array**:
Utilize o método **`unshift`** para adicionar dois novos animais no início do array **`animais`**.
- [ ] **Alterando Elementos Específicos do Array**:
Mude o segundo elemento do array **`animais`** para "girafa".
- [ ] **Usando Length para Contar Elementos**:
Declare um array **`frutas`** e adicione algumas frutas a ele. Use **`length`** para imprimir o número total de frutas no array.
- [ ] **Percorrendo um Array com Loop For**:
Utilize um loop **`for`** para percorrer o array **`frutas`** criado e imprimir cada fruta individualmente.

**[⬆ voltar ao topo](#Índice)**


## Loops

Agora vamos falar sobre loops em JavaScript. Loops são ferramentas poderosas que permitem **executar um bloco de código repetidamente sob determinadas condições**. Vamos entender tudo sobre eles!

### **O Que são Loops?**

Em programação, um loop é uma estrutura que repete um bloco de código enquanto uma condição específica é atendida. No JavaScript, temos vários tipos de loops, cada um com suas peculiaridades e casos de uso.

### **Por Que Usamos Loops?**

Loops são usados para realizar tarefas repetitivas sem escrever o mesmo código várias vezes. Eles são fundamentais para operações como percorrer arrays, processar dados, ou até mesmo em lógicas de jogos.

### **Tipos de Loops em JavaScript**

Loop `for`: É o cara quando você sabe quantas vezes quer rodar algo. Tipo, "faz isso aqui 10 vezes".

```jsx
for (let i = 0; i < 10; i++) {
	console.log(i);
}
```

Aqui, `i` começa em `0`, e o loop continua enquanto `i` for menor que `10`. A cada iteração, `i` é incrementado em `1`.

`Loop while`: Esse aqui é mais quando você tá naquela de "vou fazer isso até algo acontecer". Mas cuidado, se não botar um jeito de parar, vira festa sem hora pra acabar.

```jsx
let i = 0; while (i < 10) {
	console.log(i); i++;
}
```

`Loop do...while`: Parecido com o while, mas a diferença é que ele executa pelo menos uma vez, mesmo que a condição já comece falsa.

```jsx
let i = 0;
do {
	console.log(i); i++;
} while (i < 10);
```

Loop `for...of`: Esse é pra quando você tem um array ou algo iterável e quer passar por cada elemento dele.

```jsx
let nomes = ["Ana", "Bia", "Carlos"];
for (let nome of nomes) {
     console.log(nome); // Mostra cada nome
}
```

### **Controle de Loops**

`break`: Usado para sair de um loop antes que ele atinja sua condição de parada natural.

`continue`: Pula a iteração atual e continua com a próxima.

```jsx
for (let i = 0; i < 10; i++) {
	if (i === 5) {
		break; // Sai do loop quando i é 5
	}
	if (i % 2 === 0) {
		continue; // Pula os números pares
	}

	console.log(i);
}
```

### Exercícios com loops:

- [ ] **Criando um loop**: Crie um loop `for` que imprima números de 0 a 10.
- [ ] **Loop com condição**: Crie um loop `for` que imprima somente números ímpares de 0 a 20.
- [ ] **Usando `while`**: Crie um loop `while` que imprima números de 0 a 10.
- [ ] **Interrompendo um loop**: Crie um loop `for` que imprima números de 0 a 100, mas interrompa a execução quando chegar ao número 50.
- [ ] **Pulando uma iteração**: Crie um loop `for` que imprima números de 0 a 20, mas pule a impressão do número 13.
- [ ] **Iterando um Array**: Crie um array de nomes e use um loop `for...of` para imprimir cada nome do array.

**[⬆ voltar ao topo](#Índice)**


## Estruturas de Controle

Vamos mergulhar nas Estruturas de Controle no JavaScript. Essas estruturas são essenciais para tomar decisões no código e controlar o fluxo de execução. Vamos entender tudo que um iniciante precisa saber sobre isso.🚀

Sem estruturas de controle, nossos programas seriam sequências lineares de comandos. Com elas, podemos executar diferentes blocos de código com base em condições variadas, tornando nosso código mais inteligente e adaptável.🧑🏻‍💻

### **Estruturas Condicionais If/Else 🤨**

`if` e `else`: É o básico do "se isso, então aquilo". Se a condição for verdadeira, rola uma coisa, se não, rola outra.

**Sintaxe básica:**

```jsx
if (condição) {
	// Bloco de código se a condição for verdadeira
} else {
	// Bloco de código se a condição for falsa
}
```

**Exemplo:**

```jsx
let idade = 20;

if (idade >= 18) {
	console.log("Usuário é maior de idade.");
} else {
	console.log("Usuário é menor de idade.");
}
```

Esse exemplo declara uma variável chamada idade, e com base nela, verifica se um usuário é maior de idade.

### **Encadeamento com Else If**

Às vezes, precisamos verificar várias condições. Aqui, `else if` entra em ação.

```jsx
let hora = 20;

if (hora < 12) {
	console.log("Bom dia!");
} else if (hora < 18) {
	console.log("Boa tarde!");
} else {
	console.log("Boa noite!");
}
```

Aqui declaramos uma variável chamada hora, e com base no valor dela, imprimimos uma frase no console.

### **Estrutura Switch Case 🧙🏻**

`switch` é utilizado quando você tem várias condições pra checar. Funciona tipo escolhendo um caminho baseado no valor de uma variável.

**Sintaxe Básica do Switch:**

```jsx
switch (expressão) {
	case valor1: 
		// Bloco de código
		break;
	case valor2:
		// Bloco de código
		break;
	default:
		// Bloco de código
}
```

**Exemplo:**

```jsx
let corFavorita = "azul";

switch (corFavorita) {
  case "vermelho":
    console.log("Você gosta de vermelho");
    break;
  case "azul":
    console.log("Você gosta de azul");
    break;
  case "verde":
    console.log("Você gosta de verde");
    break;
  default:
    console.log("Cor não identificada");
}
```

Aqui estamos fazendo várias comparações com a variável "corFavorita" para assim printar uma mensagem.

O "default" é executado caso nenhum dos "cases" bata.

Não esquece de colocar os breaks, pra não dar bugzinhos no código.

### **Exercícios com condicionais🔥**

- [ ] **Classificação por Idade:** Escreva um programa que classifica uma pessoa em categorias de idade: 'criança' (menos de 13 anos), 'adolescente' (entre 13 e 17 anos), 'adulto' (entre 18 e 64 anos) e 'idoso' (65 anos ou mais). Use a estrutura `if/else/else if`.

- [ ] **Jogo de Adivinhação com Switch:** Desenvolva um jogo simples de adivinhação onde o usuário tenta adivinhar um número entre 1 e 5. Use `switch` para verificar a escolha e imprimir se acertou ou não.

- [ ] **Avaliação de Notas:** Crie um programa que, dada uma nota de um aluno, classifica a nota como 'Reprovado' (menos de 6), 'Recuperação' (entre 6 e 7), ou 'Aprovado' (mais de 7). Use `switch`.
      
**[⬆ voltar ao topo](#Índice)**


## Funções 

### **O que São Funções?**

Pensa em funções como ferramentas que você cria para realizar tarefas específicas. No mundo da programação, elas ajudam a evitar repetições e tornam o código mais organizado e fácil de gerenciar.

### **Por que Usar Funções?**

Imagine ter que escrever o mesmo código várias vezes. Chato, né? Com funções, você escreve uma vez e chama essa função sempre que precisar.

### **Criando Funções em JavaScript 🧙🏻**

#### **Definindo uma Função Simples**:

Aqui, criamos uma função chamada **`somar`** que pega dois números (**`num1`** e **`num2`**) e retorna a soma deles. A palavra **`return`** é usada para dar o resultado da função.

```jsx
function somar(num1, num2) {
     return num1 + num2; 
}
```

#### **Chamando a Função**:

Aqui, a função **`somar`** é chamada com **`5`** e **`3`** como argumentos, e o resultado (**`8`**) é guardado na variável **`resultado`**.

```jsx
let resultado = somar(5, 3);
console.log(resultado);
```

### **Parâmetros e Argumentos Explicados**🥷🏻

**Parâmetros vs. Argumentos**:

Os parâmetros são como placeholders que definem que tipo de valores a função espera receber. Já os argumentos são os valores reais passados para a função.

**Exemplo Prático**:

```jsx
function saudar(nome) {
     console.log("Olá, " + nome);
}
saudar("Erick");
```

Aqui, **`nome`** é um parâmetro e **`"Erick"`** é o argumento. A função **`saudar`** vai pegar esse argumento e usar no lugar do parâmetro.

Explore: Leia mais sobre [funções no JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions) na documentação MDN.

### **Arrow Function**

As Arrow Functions, ou funções seta, são um jeito mais novo e mais elegante de escrever funções. Elas são especialmente úteis para funções anônimas e curtas, vão ser muito úteis em um futuro próximo, então é bom ter prática com isso.

```jsx
let soma = (a, b) => a + b;
```

Essa função `soma` faz exatamente o que o nome diz: soma dois números. E olha que legal, nem precisamos escrever `return`!

### Exercícios práticos🔥:

- [ ] Função que Calcula a Área de um Retângulo: Crie uma função que calcula a área de um retângulo dado largura e altura.
- [ ] Função para Verificar Número Par: Faça uma função que recebe um número e retorna `true` se for par e `false` se for ímpar.
- [ ] Converter Polegadas em Centímetros: Escreva uma função que converte polegadas em centímetros.
- [ ] IMC: Escreva uma função que calcula o Índice de Massa Corporal (IMC).
- [ ] Maiúsculas para Minúsculas: Crie uma função que recebe uma string e retorna a mesma string em letras minúsculas.
- [ ] Crie uma arrow function chamada `multiplicaPorDez` que recebe um número como parâmetro e retorna o valor multiplicado por 10.

**[⬆ voltar ao topo](#Índice)**


## Objetos 

Vamos falar sobre uma das estruturas mais poderosas e fundamentais em JavaScript: os Objetos. Se você quer mandar bem em backend com Node.js, precisa entender isso daqui. Vou explicar de um jeito simples, mas bem completo. Então, bora lá!🚀

### **O que são Objetos?🧐**

No JavaScript, um objeto é uma coleção de propriedades, e uma propriedade é uma associação entre uma chave e um valor. O valor de uma propriedade pode ser uma função, que é então conhecida como um método do objeto.

#### **Criação de Objeto**

```jsx
let pessoa = {
  nome: 'João',
  idade: 25,
  falar: function() {
    console.log(`Oi, meu nome é ${this.nome}`);
  }
};
```

Aqui, criamos um objeto **`pessoa`** com três propriedades: **`nome`**, **`idade`** e **`falar`**. **`falar`** é um método, ou seja, uma função dentro de um objeto.

### **Acessando Propriedades e Métodos🛠️**

Para acessar as propriedades ou métodos de um objeto, usamos a notação de ponto ou colchetes.

#### **Exemplo de Acesso**

```jsx
console.log(pessoa.nome); // Acessando a propriedade 'nome'
pessoa.falar();           // Chamando o método 'falar'
```

Aqui, acessamos a propriedade **`nome`** do objeto **`pessoa`** e chamamos o método **`falar`**.

### **Alterando e Adicionando Propriedades📈**

Você pode alterar as propriedades de um objeto ou adicionar novas propriedades a ele após sua criação.

#### **Exemplo de Alteração**

```jsx
pessoa.idade = 30;          // Alterando a idade
pessoa.sobrenome = 'Silva'; // Adicionando nova propriedade 'sobrenome'
```

Alteramos a propriedade **`idade`** e adicionamos uma nova propriedade **`sobrenome`** ao objeto **`pessoa`**.

### **Iterando sobre Propriedades🧙🏻**

Podemos percorrer todas as propriedades de um objeto usando um loop **`for...in`**.

#### **Exemplo de Iteração**

```jsx
for (let chave in pessoa) {
  console.log(`${chave}: ${pessoa[chave]}`);
}
```

Com o loop **`for...in`**, passamos por cada propriedade do objeto **`pessoa`**, imprimindo seu nome e valor.

### **Objetos como Referências🤯**

Em JavaScript, objetos são referenciados. Quando você atribui um objeto a uma variável, está passando uma referência a esse objeto.

Ou seja, se você faz uma “cópia” de um objeto, e altera alguma propriedade, o objeto original também será alterado.

#### **Exemplo de Referência**

```jsx
let outraPessoa = pessoa;
outraPessoa.nome = 'Maria';
console.log(pessoa.nome); // Maria
```

**`outraPessoa`** é uma referência ao mesmo objeto que **`pessoa`**. Ao mudar **`nome`** através de **`outraPessoa`**, o objeto original **`pessoa`** também é alterado.

### **Métodos Avançados🥷🏻**

JavaScript oferece métodos avançados para trabalhar com objetos, como **`Object.keys()`**, **`Object.values()`**, e **`Object.entries()`**.

#### **Exemplo de Métodos Avançados**

```jsx
console.log(Object.keys(pessoa)); // ['nome', 'idade', 'falar', 'sobrenome']
```

**`Object.keys(pessoa)`** retorna um array com os nomes das propriedades do objeto **`pessoa`**.

### Exercícios para Praticar Objetos🔥:

- [ ] **Criar e Acessar um Objeto**:
Crie um objeto chamado **`carro`** com propriedades como **`marca`**, **`modelo`** e **`ano`**. Em seguida, acesse e imprima a propriedade **`modelo`** do objeto.
- [ ] **Adicionar e Modificar Propriedades de um Objeto**:
A partir do objeto **`carro`** criado, adicione uma propriedade **`cor`** e modifique o **`ano`** do carro. Imprima o objeto modificado.
- [ ] **Criar um Método em um Objeto**:
Crie um objeto chamado **`calculadora`** com um método **`soma`** que aceite dois números e retorne a soma deles.
- [ ] **Iterar Sobre as Propriedades de um Objeto**:
Dado um objeto, use um loop **`for...in`** para iterar sobre todas as suas propriedades e imprimir cada uma delas.
- [ ] **Entendendo Referências de Objetos**:
Crie um objeto **`livro`** com propriedades como **`titulo`** e **`autor`**. Em seguida, crie outra variável que referencie o objeto **`livro`** e modifique a propriedade **`titulo`**. Verifique se o objeto original foi alterado.
- [ ] **Usando Métodos Avançados de Objeto**:
Dado um objeto, use o método **`Object.keys()`** para listar todas as chaves do objeto. Repita o processo com **`Object.values()`** para listar todos os valores.

**[⬆ voltar ao topo](#Índice)**


## Estrutura de Dados Map

Map é uma daquelas ferramentas que podem fazer a diferença entre um código ok e um código top! Então, se liga nesse tópico e bora aprender! 🚀

### **O que é um Map? 🤔**

Map é uma coleção de pares chave-valor. Diferente dos objetos, no Map, as chaves podem ser de qualquer tipo - até objetos ou funções! Além disso, ele mantém a ordem de inserção, o que pode ser mega útil em algumas situações.

#### **Criando um Map**

```jsx
let meuMap = new Map();
```

Aqui, estamos criando um novo Map. Pensa nele como um super objeto, só que mais flexível e com superpoderes! 💪

### **Adicionando Elementos 🛠️**

Vamos adicionar alguns elementos ao nosso Map usando o método **`set`**.

#### **Exemplo de Adição**

```jsx
meuMap.set('chave1', 'valor1');
meuMap.set('chave2', 'valor2');
```

Nesse exemplo, adicionamos duas chaves ao Map: 'chave1' com o valor 'valor1' e 'chave2' com 'valor2'. O legal do Map é que ele aceita qualquer coisa como chave!

### **Acessando Elementos 🔍**

Agora, vamos ver como pegar valores de volta do nosso Map.

#### **Exemplo de Acesso**

```jsx
console.log(meuMap.get('chave1')); // valor1
```

Usamos o método **`get`** com a chave 'chave1' para pegar o valor associado. Aqui, ele retorna 'valor1'.

### **Iterando sobre um Map 🔄**

Maps são iteráveis, então podemos percorrer eles de várias maneiras.

#### **Exemplo de Iteração**

```jsx
for (let [chave, valor] of meuMap) {
  console.log(`${chave}: ${valor}`);
}
```

Neste loop **`for...of`**, desestruturamos cada par chave-valor e imprimimos eles. É uma maneira super prática de ver tudo o que tá no Map.

### **Métodos Úteis do Map 🧰**

Maps vêm com alguns métodos bem práticos.

#### **Exemplo de Métodos Úteis**

```jsx
console.log(meuMap.size);      // 2
meuMap.delete('chave2');       // Remove a chave 'chave2'
console.log(meuMap.has('chave2')); // false
```

- **`size`** nos mostra quantos pares chave-valor temos no Map.
- **`delete`** remove um par baseado na chave.
- **`has`** verifica se uma chave específica existe no Map.

### **Quando Usar um Map? 🧐**

Map é perfeito quando você precisa de uma coleção de pares chave-valor, onde as chaves são únicas e podem ser de qualquer tipo. É uma escolha melhor que objetos quando as chaves são desconhecidas até o tempo de execução, ou quando todas as chaves são do mesmo tipo e os valores também.

### **Convertendo Map para Objetos e Arrays ↔️**

Às vezes, você pode querer converter seu Map em um objeto ou array.

#### **Exemplo de Conversão**

```jsx
let mapParaObjeto = Object.fromEntries(meuMap);
console.log(mapParaObjeto); // { chave1: 'valor1' }

let chavesArray = [...meuMap.keys()];
console.log(chavesArray); // ['chave1']
```

- **`Object.fromEntries`** transforma o Map em um objeto.
- Usando spread (**`...`**), pegamos todas as chaves ou valores do Map e colocamos em um array.

### Exercícios para Praticar:

- [ ] **Criar e Adicionar Pares Chave-Valor no Map**:
Crie um **`Map`** chamado **`livros`** e adicione nele três pares de chave-valor, onde a chave é o título do livro e o valor é o autor.
- [ ] **Acessar Valor no Map**:
Acesse o valor associado a uma das chaves no **`Map`** **`livros`** que você criou e imprima o nome do autor.
- [ ] **Iterar Sobre um Map**:
Use um loop **`for...of`** para iterar sobre o **`Map`** **`livros`** e imprimir todos os pares chave-valor.
- [ ] **Usando Métodos do Map: size, delete, has**:
No seu **`Map`** **`livros`**, use o método **`size`** para imprimir o número de livros, delete para remover um livro pelo título e **`has`** para verificar se um livro ainda está no **`Map`**.
- [ ] **Map com Tipos de Chaves Diferentes**:
Crie um **`Map`** chamado **`colecao`** que contém diferentes tipos de chaves (como **`string`**, **`number`**, **`object`**) e seus respectivos valores.

**[⬆ voltar ao topo](#Índice)**


## Estrutura de Dados Set 

### **O que é um Set? 🤔**

Um Set é como um array, só que cada valor nele é único. Nada de repetição aqui, galera! Isso é super útil quando você quer garantir que cada elemento seja único, tipo quando tá lidando com uma lista de IDs ou algo assim.

#### **Criando um Set**

```jsx
let meuSet = new Set();
```

Aqui, estamos criando um novo Set vazio. É como abrir uma nova caixa para guardar coisas, mas só uma de cada tipo.

### **Adicionando Valores ao Set 🛒**

Para adicionar coisas no nosso Set, usamos o método **`add`**.

#### **Exemplo de Adição**

```jsx
meuSet.add(1);
meuSet.add(2);
meuSet.add(2); // Esse cara não vai entrar, porque 2 já está no Set
```

Nós adicionamos 1 e 2 ao Set. Tentamos adicionar 2 de novo, mas o Set já tem um 2, então ele ignora. Sets são tipo aquele amigo que não gosta de repetição.

### **Verificando a Presença de Valores 🔍**

Quer saber se algo tá no Set? Usa o **`has`**.

#### **Exemplo de Verificação**

```jsx
console.log(meuSet.has(1)); // true
console.log(meuSet.has(3)); // false
```

Aqui, estamos checando se 1 e 3 estão no Set. O 1 tá lá, mas o 3 não.

### **Contando os Valores 💯**

Pra saber quantos itens tem no Set, dá uma olhada no **`size`**.

#### **Exemplo de Tamanho**

```jsx
console.log(meuSet.size); // 2
```

Como só temos 1 e 2 no Set, o **`size`** mostra 2.

### **Dando um Rolê pelo Set 🚶‍♂️🚶‍♀️**

Quer ver tudo que tem no Set? É só iterar sobre ele.

#### **Exemplo de Iteração**

```jsx
for (let valor of meuSet) {
  console.log(valor);
}
```

Aqui, estamos passando por cada valor do Set e dando um print. Bem prático!

### **Limpando a Casa 🧹**

Sets têm uns métodos maneiros tipo **`delete`** e **`clear`**.

#### **Exemplo de Métodos**

```jsx
meuSet.delete(1); // Tchau, 1!
meuSet.clear();   // Limpou tudo!
```

Primeiro, a gente tira o 1 do Set. Depois, limpa tudo, deixando o Set zerado.

### **Sets no Dia a Dia 🌞**

Sets são ótimos pra quando você precisa de uma coleção sem repetição. Tipo, sabe quando você tem um monte de dados e precisa garantir que não tem nada duplicado? Então, Sets são perfeitos pra isso.

#### **Exemplo Prático**

```jsx
let numeros = [1, 2, 3, 2, 1];
let numerosUnicos = new Set(numeros);
console.log([...numerosUnicos]); // [1, 2, 3]
```

Pegamos um array com uns números repetidos e transformamos num Set. Depois, convertemos de volta pra array, mas agora só com valores únicos. Bem legal, né?

### Exercícios para Praticar Sets🔥:

- [ ] **Criar e Adicionar Valores ao Set**:
Crie um **`Set`** chamado **`frutas`** e adicione nele três frutas diferentes. Depois, tente adicionar uma fruta que já está no **`Set`**.
- [ ] **Verificar Valores no Set**:
Use o método **`has`** para verificar se uma fruta específica está no seu **`Set`** **`frutas`**.
- [ ] **Remover Valores do Set**:
Use o método **`delete`** para remover uma fruta do seu **`Set`** **`frutas`**.
- [ ] **Limpar o Set**:
Use o método **`clear`** para limpar todo o seu **`Set`** **`frutas`**.
- [ ] **Tamanho do Set**:
Crie um **`Set`** com vários valores e use a propriedade **`size`** para imprimir o número de elementos no **`Set`**.
- [ ] **Iterar Sobre um Set**:
Use um loop **`for...of`** para iterar sobre o seu **`Set`** e imprimir cada valor.
- [ ] **Criar um Set a Partir de um Array**:
Crie um **`array`** com alguns valores duplicados. Em seguida, crie um **`Set`** a partir desse **`array`** para remover as duplicatas.

**[⬆ voltar ao topo](#Índice)**


## Classes

Se você tá pensando em aprender js, entender classes é crucial. Elas são como moldes para criar objetos mais organizados e reutilizáveis. Então, sem mais delongas, bora lá! 🚀

### **O que são Classes?**

Classes, introduzidas no ES6, são um recurso do JavaScript que facilita a criação de objetos. Elas agem como um template ou um molde, a partir do qual você pode criar novos objetos que seguem um padrão.

#### **Criando uma Classe**

```jsx
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  falar() {
    console.log(`Oi, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}
```

Aqui criamos uma classe **`Pessoa`** com um construtor e um método **`falar`**, métodos nada mais são do que funções que estão dentro de uma classe.

O construtor é chamado quando criamos uma nova instância da classe.

**`this.nome`** e **`this.idade`** são propriedades da classe.

### **Criando Objetos a partir de Classes**

Para criar um objeto a partir de uma classe, usamos a palavra-chave **`new`**.

```jsx
let joao = new Pessoa('João', 25);
```

Neste exemplo, **`joao`** é uma nova instância da classe **`Pessoa`**. Ele tem as propriedades **`nome`** e **`idade`** que definimos no construtor.

Pense que quando você chama a classe e abre os (), você está passando dados para o construtor.

### **Chamando Métodos da Classe**

Vamos ver como chamar métodos definidos na classe.

```jsx
joao.falar();
```

Aqui, **`joao`** chama o método **`falar`**. Isso vai imprimir a mensagem com o nome e a idade.

### **Herança de Classes**

Uma das grandes vantagens das classes é a habilidade de herdar propriedades e métodos de outras classes.

#### **Exemplo de Herança**

```jsx
class Estudante extends Pessoa {
  constructor(nome, idade, curso) {
    super(nome, idade);
    this.curso = curso;
  }

  estudar() {
    console.log(`Estudando ${this.curso}`);
  }
}
```

Criamos uma classe **`Estudante`** que herda de **`Pessoa`**.

Chamar a função **`super(nome, idade)`** chama o construtor da classe pai, ou seja, vai passar os dados para o construtura da classe `Pessoa`.

Agora, **`Estudante`** tem todas as propriedades e métodos de **`Pessoa`**, e de bônus os seus próprios (curso e estudar).

### **Criando Instância da Classe Herdada**

Vamos criar um objeto da classe **`Estudante`**.

```jsx
let ana = new Estudante('Ana', 22, 'Engenharia');
```

**`ana`** é uma instância de **`Estudante`**, com as propriedades de **`Pessoa`** e também **`curso`**.

### **Métodos Estáticos**

As classes também podem ter métodos estáticos. Estes são métodos que você pode chamar diretamente na classe, sem criar uma instância dela.

#### **Exemplo de Método Estático**

```jsx
class Utilitario {
  static numeroAleatorio() {
    return Math.floor(Math.random() * 100);
  }
}

console.log(Utilitario.numeroAleatorio());
```

Aqui, **`numeroAleatorio`** é um método estático da classe **`Utilitario`**. Você pode chamá-lo diretamente, sem precisar instanciar a classe.

### **Propriedades Privadas**

Com a introdução do ES2020, agora é possível definir propriedades privadas em classes, usando o **`#`**.

#### **Exemplo de Propriedades Privadas**

```jsx
class ContaBancaria {
  #saldo;

  constructor(saldoInicial) {
    this.#saldo = saldoInicial;
  }

  depositar(valor) {
    this.#saldo += valor;
  }

  getSaldo() {
    return this.#saldo;
  }
}

let conta = new ContaBancaria(1000);
conta.depositar(500);
console.log(conta.getSaldo()); // 1500
```

A propriedade **`#saldo`** é privada. Isso significa que ela só pode ser acessada ou modificada dentro da classe **`ContaBancaria`**.

### Exercícios para praticar🔥

- [ ] **Criar uma Classe Animal**:
Crie uma classe **`Animal`** com um construtor que recebe o nome e o som que o animal faz. Adicione um método **`falar`** que imprime o som do animal.
- [ ] **Classe Veículo com Método de Velocidade**:
Desenvolva uma classe **`Veiculo`** com propriedades como **`marca`**, **`modelo`** e **`velocidadeMaxima`**. Adicione um método **`descrever`** que imprime uma descrição do veículo.
- [ ] **Classe Estudante com Notas**:
Amplie a classe **`Estudante`** para incluir um array de notas. Adicione um método **`calcularMedia`** que retorna a média das notas.
- [ ] **Método Estático para Conversão de Temperatura**:
Na classe **`Utilitario`**, adicione um método estático que converte temperatura de Celsius para Fahrenheit.
- [ ] **Jogo Simples com Classe**:
Crie uma classe **`Jogo`** com um método estático que gera um número aleatório e permite ao usuário adivinhar. O método retorna se o usuário acertou ou não.
- [ ] **Classe ContaBancaria com Método de Saque**:
Na classe **`ContaBancaria`**, adicione um método **`sacar`** que permite sacar um valor do saldo, garantindo que o saldo não fique negativo.

**[⬆ voltar ao topo](#Índice)**


## Strings

### **Características das Strings**

Strings são mais do que apenas textos. No JavaScript, elas são objetos que vêm com um monte de métodos úteis.

#### **Imutabilidade das Strings**

```jsx
let saudacao = "Olá";
saudacao[0] = 'A';
console.log(saudacao); // Olá
```

As strings são imutáveis. Isso significa que, uma vez criada, você não pode alterar um caractere individualmente. Tentar fazer isso não vai gerar um erro, mas também não vai mudar a string.

#### **Concatenação de Strings**

```jsx
let nome = "Maria";
let mensagem = "Oi, " + nome + "!";
console.log(mensagem); // Oi, Maria!
```

Aqui estamos juntando, ou concatenando, strings usando o operador **`+`**. É uma forma básica de construir strings a partir de outras strings.

### **Métodos Avançados de String**

JavaScript oferece vários métodos para trabalhar com strings de maneira mais sofisticada.

#### **Método `slice()`**

```jsx
let frase = "Aprendendo JavaScript em 2023!";
let ano = frase.slice(-5);
console.log(ano); // 2023!
```

**`slice()`** corta e retorna uma parte da string. Aqui, **`-5`** significa que estamos começando do quinto caractere a contar do fim.

#### **Método `replace()`**

```jsx
let novaFrase = frase.replace("2023", "2024");
console.log(novaFrase); // Aprendendo JavaScript em 2024!
```

**`replace()`** substitui um trecho da string por outro. Neste exemplo, substituímos "2023" por "2024".

#### **Método `toUpperCase()` e `toLowerCase()`**

```jsx
let grito = "olá".toUpperCase();
console.log(grito); // OLÁ

let sussurro = "OI".toLowerCase();
console.log(sussurro); // oi
```

Estes métodos transformam a string em maiúsculas ou minúsculas, respectivamente.

#### **Método `trim()`**

```jsx
let textoComEspacos = "   Olá, mundo!   ";
let textoSemEspacos = textoComEspacos.trim();
console.log(textoSemEspacos); // Olá, mundo!
```

**`trim()`** remove espaços em branco do início e do fim da string.

### **Strings e Caracteres Especiais**

Strings podem conter caracteres especiais, que são úteis para várias situações.

#### **Quebras de Linha e Tabulações**

```jsx
let poema = "Roses are red,\nViolets are blue.";
console.log(poema);
// Roses are red,
// Violets are blue.
```

**`\n`** cria uma nova linha. É útil para formatar textos longos ou poesia.

#### **Caracteres de Escape**

```jsx
let citação = "Ela disse: \"JavaScript é incrível!\"";
console.log(citação); // Ela disse: "JavaScript é incrível!"
```

Usamos a barra invertida **`\`** para incluir aspas dentro de uma string sem encerrar a string.

### **Template Literals**

Template literals são uma maneira mais poderosa e flexível de trabalhar com strings.

```jsx
let produto = "Node.js";
let versao = "v14.17.0";
let descricao = `Estudando ${produto} na versão ${versao}`;
console.log(descricao); // Estudando Node.js na versão v14.17.0
```

Aqui, usamos acentos graves (**```**) e **`${}`** para inserir variáveis e expressões dentro da string. Isso torna a concatenação mais fácil e legível.

### Exercícios para você ficar fera:

- [ ] **Criando um Convite**:
Use a concatenação de strings para criar um convite. Inclua o nome do destinatário, o tipo de evento e a data, usando variáveis.
- [ ] **Diário de Bordo**:
Escreva um pequeno diário de bordo usando template literals, incluindo data, local e uma descrição do que aconteceu no dia.
- [ ] **Redator de Notícias**:
Crie uma string que represente uma notícia, utilizando o método **`replace()`** para substituir um fato errado por um correto.
- [ ] **Caixa de Comentários**:
Use o método **`trim()`** para limpar os comentários dos usuários antes de publicá-los em um blog ou fórum.
- [ ] **Carta para um Amigo**:
Utilize **`\n`** para formatar uma carta para um amigo, com saudação, corpo da mensagem e despedida, cada um em uma nova linha.
- [ ] **Citações Famosas**:
Crie uma string que inclua uma citação famosa de uma pessoa, utilizando caracteres de escape para incluir aspas na citação.

**[⬆ voltar ao topo](#Índice)**


## Operador Spread 

O operador spread é um recurso poderoso que pode simplificar e tornar seu código muito mais flexível. Prontos para expandir seus conhecimentos? Vamos nessa! 🚀

### **O que é o Operador Spread?**

O Operador Spread, representado por três pontos (**`...`**), permite que você "espalhe" os elementos de um array ou de um objeto em outro lugar. Isso pode ser incrivelmente útil em várias situações.

#### **Usando Spread com Arrays**

```jsx
let numeros = [1, 2, 3];
let maisNumeros = [...numeros, 4, 5, 6];
console.log(maisNumeros); // [1, 2, 3, 4, 5, 6]
```

Aqui, usamos o Spread para criar um novo array **`maisNumeros`**, que contém todos os elementos de **`numeros`** seguidos por **`4, 5, 6`**. É uma maneira elegante e concisa de combinar arrays.

#### **Usando Spread com Objetos**

```jsx
let pessoa = { nome: 'João', idade: 25 };
let pessoaAtualizada = { ...pessoa, idade: 26 };
console.log(pessoaAtualizada); // { nome: 'João', idade: 26 }
```

Neste exemplo, criamos um novo objeto **`pessoaAtualizada`** que possui todas as propriedades de **`pessoa`**, mas com a **`idade`** atualizada. O Spread aqui nos permite copiar facilmente propriedades entre objetos.

### **Aplicações Práticas do Spread**

O Spread é útil em diversas situações, como na manipulação de dados e na passagem de argumentos para funções.

#### **Copiando Arrays**

```jsx
let original = [1, 2, 3];
let copia = [...original];
console.log(copia); // [1, 2, 3]
```

Ao usar o Spread, você cria uma cópia superficial do array. Isso é particularmente útil quando você não quer que as mudanças no novo array afetem o original.

#### **Concatenando Arrays**

```jsx
let inicio = [1, 2];
let fim = [3, 4];
let combinado = [...inicio, ...fim];
console.log(combinado); // [1, 2, 3, 4]
```

O Spread torna a concatenação de arrays uma tarefa simples e limpa.

#### **Espalhando Argumentos**

```jsx
function somar(a, b, c) {
  return a + b + c;
}

let numeros = [1, 2, 3];
console.log(somar(...numeros)); // 6
```

Aqui, espalhamos os elementos de **`numeros`** como argumentos individuais para a função **`somar`**.

#### **Combinando Objetos**

```jsx
let objeto1 = { a: 1, b: 2 };
let objeto2 = { c: 3, d: 4 };
let combinado = { ...objeto1, ...objeto2 };
console.log(combinado); // { a: 1, b: 2, c: 3, d: 4 }
```

O Spread também é eficaz para combinar ou clonar objetos.

### Exercícios🔥

- [ ] **Criando uma Lista de Compras**:
Use o operador spread para combinar dois arrays de itens de supermercado em uma lista de compras.
- [ ] **Atualizando um Perfil de Usuário**:
Crie um objeto **`usuario`** com propriedades como **`nome`** e **`email`**. Use o operador spread para criar um novo objeto com os dados do usuário e uma propriedade adicional **`status`**.
- [ ] **Festa de Aniversário**:
Crie uma função que aceita um número variável de nomes e os imprime como lista de convidados para uma festa de aniversário, usando o operador spread para coletar os nomes.
- [ ] **Clonando um Array de Músicas**:
Dado um array de músicas, crie uma cópia do array usando o operador spread. Altere um elemento no array copiado e verifique se o array original permanece inalterado.
- [ ] **Mesclando Objetos com Informações Complementares**:
Crie dois objetos, um com informações básicas de um filme (título e diretor) e outro com informações complementares (ano e gênero). Use o operador spread para mesclar esses objetos em um único objeto **`filme`**.
- [ ] **Criando um Menu de Restaurante Variável**:
Faça uma função **`criarMenu`** que aceita vários itens (entradas, pratos principais, sobremesas) como arrays e usa o operador spread para criar um único array de menu.

**[⬆ voltar ao topo](#Índice)**


## Desestruturação 

### **O que é Desestruturação?**

Desestruturação é um recurso do ES6 que permite extrair dados de arrays ou propriedades de objetos em variáveis distintas de forma prática e direta. É como desempacotar uma caixa e colocar cada item em seu próprio lugar.

#### **Desestruturação de Arrays**

```jsx
let numeros = [1, 2, 3];
let [primeiro, segundo, terceiro] = numeros;
console.log(primeiro, segundo, terceiro); // 1 2 3
```

Aqui, criamos um array **`numeros`** e, em seguida, usamos a desestruturação para criar três novas variáveis, cada uma recebendo um elemento do array. É uma maneira rápida de acessar itens individuais de um array.

#### **Desestruturação de Objetos**

```jsx
let pessoa = { nome: 'João', idade: 25 };
let { nome, idade } = pessoa;
console.log(nome, idade); // João 25
```

Neste exemplo, extraímos as propriedades **`nome`** e **`idade`** do objeto **`pessoa`** para duas novas variáveis. Isso simplifica muito o acesso a propriedades específicas de um objeto.

### **Usos Práticos da Desestruturação**

A desestruturação é extremamente útil em várias situações, como ao trabalhar com funções, arrays, ou quando lidamos com dados mais complexos.

#### **Em Funções**

```jsx
function exibirInfo({ nome, idade }) {
  console.log(`Nome: ${nome}, Idade: ${idade}`);
}

exibirInfo(pessoa); // Nome: João, Idade: 25
```

Ao usar a desestruturação em parâmetros de função, tornamos o código mais limpo e direto, evitando a necessidade de acessar as propriedades do objeto dentro da função.

#### **Com Arrays Aninhados**

```jsx
let cores = [["vermelho", "azul"], ["verde", "amarelo"]];
let [[primaria], [secundaria]] = cores;
console.log(primaria, secundaria); // ["vermelho", "azul"] ["verde", "amarelo"]
```

Aqui, desestruturamos um array de arrays. Isso mostra como a desestruturação pode ser adaptada para estruturas de dados mais complexas.

#### **Valores Padrão**

```jsx
let [a = 1, b = 2] = [3];
console.log(a, b); // 3 2
```

Neste exemplo, definimos valores padrão para **`a`** e **`b`**. **`a`** recebe o valor do array, enquanto **`b`** usa o valor padrão, pois o array não tem um segundo elemento.

#### **Trocando Valores de Variáveis**

```jsx
let x = 1, y = 2;
[x, y] = [y, x];
console.log(x, y); // 2 1
```

A desestruturação também pode ser usada para trocar valores entre variáveis de forma eficiente, sem a necessidade de uma variável temporária.

### Exercícios de Desestruturação🔥

- [ ] **Extrair Dados de um Array**:
Crie um array com três elementos e utilize a desestruturação para criar três variáveis, cada uma recebendo um elemento do array.
- [ ] **Extrair Propriedades de um Objeto**:
Crie um objeto com propriedades como `nome` e `idade`. Use a desestruturação para criar variáveis a partir dessas propriedades.
- [ ] **Desestruturação em Funções**:
Escreva uma função que recebe um objeto como parâmetro e use a desestruturação para trabalhar com as propriedades do objeto dentro da função.
- [ ] **Desestruturação com Arrays Aninhados**:
Crie um array de arrays e use a desestruturação para criar variáveis a partir dos elementos do array aninhado.
- [ ] **Valores Padrão na Desestruturação**:
Crie um array com um elemento e utilize a desestruturação para criar duas variáveis. A primeira deve receber o valor do array e a segunda deve usar um valor padrão.
- [ ] **Trocar Valores de Variáveis com Desestruturação**:
Crie duas variáveis e troque os valores entre elas utilizando desestruturação.

**[⬆ voltar ao topo](#Índice)**


## Arrow Functions 

Vamos se aprofundar sobre Arrow Functions em JavaScript. Esse é um tópico super legal e importante porque as Arrow Functions não só simplificam a sintaxe, mas também têm algumas peculiaridades que você precisa entender. Vamos lá! 🚀

### **Introdução às Arrow Functions**

Arrow Functions, introduzidas no ES6, são uma forma mais curta de escrever funções em JavaScript. Elas são especialmente úteis para funções anônimas e têm uma sintaxe mais enxuta.

#### **Sintaxe Básica**

```jsx
let somar = (a, b) => a + b;
console.log(somar(2, 3)); // 5
```

Aqui, **`somar`** é uma Arrow Function que recebe dois parâmetros **`a`** e **`b`** e retorna a soma deles. Note que não usamos a palavra-chave **`function`** e o retorno é implícito.

#### **Funções Sem Parâmetros**

```jsx
let saudar = () => console.log("Olá, mundo!");
saudar(); // Olá, mundo!
```

Se a função não tem parâmetros, ainda precisamos de parênteses vazios.

#### **Funções com Corpo de Bloco**

```jsx
let multiplicar = (a, b) => {
  let resultado = a * b;
  return resultado;
};
console.log(multiplicar(2, 4)); // 8
```

Para funções com mais de uma expressão, usamos chaves e a declaração **`return`**.

### **Características Importantes das Arrow Functions**

Arrow Functions não são apenas uma sintaxe mais curta. Elas têm características únicas que as diferenciam das funções tradicionais.

#### **`this` nas Arrow Functions**

```jsx
function Pessoa() {
  this.idade = 0;

  setInterval(() => {
    this.idade++;
    console.log(this.idade);
  }, 1000);
}

new Pessoa(); // Incrementa a idade a cada segundo

```

Em Arrow Functions, **`this`** é léxico, ou seja, refere-se ao contexto no qual a função foi criada, ao contrário das funções tradicionais.

#### **Não Podem Ser Construtores**

Arrow Functions não podem ser usadas como funções construtoras. Tentar fazer isso resultará em um erro.

```jsx
let Pessoa = () => {};
let p = new Pessoa(); // TypeError: Pessoa is not a constructor
```

### **Usos Práticos das Arrow Functions**

As Arrow Functions são especialmente úteis em callbacks e funções que exigem contexto léxico de **`this`**.

#### **Em Métodos de Array**

```jsx
let numeros = [1, 2, 3, 4, 5];
let dobrados = numeros.map(numero => numero * 2);
console.log(dobrados); // [2, 4, 6, 8, 10]

```

Arrow Functions são ótimas para operações em arrays, como **`map`**, **`filter`** e **`reduce`**.

#### **Callbacks**

```jsx
setTimeout(() => console.log("Olá depois de 1 segundo"), 1000);
```

Aqui, usamos uma Arrow Function como callback para **`setTimeout`**.

### Exercícios🔥

- [ ] **Calculadora Simples**:
Crie Arrow Functions para as operações básicas de matemática: soma, subtração, multiplicação e divisão. Cada função deve aceitar dois parâmetros e retornar o resultado da operação.
- [ ] **Função de Saudação Personalizada**:
Escreva uma Arrow Function que recebe um nome como parâmetro e retorna uma saudação personalizada.
- [ ] **Contador com Arrow Function**:
Use uma Arrow Function dentro de um **`setInterval`** para criar um contador que imprime um número a cada segundo.
- [ ] **Filtrar Números Pares**:
Dado um array de números, use uma Arrow Function com o método **`filter`** para criar um novo array apenas com números pares.
- [ ] **Conversor de Temperatura**:
Crie uma Arrow Function que converte a temperatura de Celsius para Fahrenheit.
- [ ] **Função de Ordenação**:
Implemente uma Arrow Function que recebe um array de strings e retorna um novo array com os itens ordenados alfabeticamente.

**[⬆ voltar ao topo](#Índice)**


## JSON

JSON, que significa JavaScript Object Notation, é uma das pedras angulares na troca de dados, especialmente em aplicações Node.js. Então, vamos mergulhar fundo nesse tópico crucial! 🌐

### **O que é JSON?**

JSON é um formato leve para troca de dados. Por ser fácil de ler e escrever para humanos e ao mesmo tempo fácil de interpretar e gerar para máquinas, tornou-se o formato padrão para intercâmbio de dados, especialmente na web.

#### **Estrutura Básica do JSON**

```jsx
{
  "nome": "João",
  "idade": 25,
  "interesses": ["programação", "jogos"],
  "ativo": true
}
```

Este é um exemplo de como um objeto JSON pode parecer. É muito semelhante aos objetos JavaScript, mas com algumas diferenças, como todas as chaves e strings precisam estar entre aspas duplas.

### **Trabalhando com JSON em JavaScript**

JavaScript tem métodos nativos para converter objetos em JSON e vice-versa, o que é fundamental para o desenvolvimento backend.

#### **Convertendo Objeto para JSON**

```jsx
let pessoa = {
  nome: "Ana",
  idade: 30,
  interesses: ["leitura", "viagens"]
};

let json = JSON.stringify(pessoa);
console.log(json); // {"nome":"Ana","idade":30,"interesses":["leitura","viagens"]}
```

**`JSON.stringify()`** converte um objeto JavaScript em uma string JSON. Isso é útil quando você precisa enviar dados para um servidor ou salvá-los de maneira formatada.

#### **Convertendo JSON para Objeto**

```jsx
let json = '{"nome":"Carlos","idade":28}';
let pessoa = JSON.parse(json);
console.log(pessoa.nome); // Carlos
```

**`JSON.parse()`** faz o inverso, transformando uma string JSON em um objeto JavaScript. Essencial para receber e trabalhar com dados de um servidor ou API.

### **Considerações Importantes**

- **Aspas Duplas**: No JSON, as chaves e strings devem estar sempre entre aspas duplas.
- **Dados Primitivos**: JSON pode representar dados como números, strings, booleanos, arrays, objetos e **`null`**.
- **Não Suporta Comentários**: JSON não permite o uso de comentários dentro do formato.

### **Usos Comuns do JSON**

JSON é amplamente utilizado em:

- **APIs e Web Services**: Para enviar e receber dados.
- **Configurações de Projeto**: Como em arquivos **`package.json`** em projetos Node.js.
- **Armazenamento de Dados**: Por ser um formato leve e fácil de ler.

### **Dicas para Trabalhar com JSON**

- **Validação**: Sempre valide o JSON antes de usá-lo. Existem várias ferramentas online para verificar se seu JSON está formatado corretamente.
- **Tratamento de Erros**: Use try-catch ao fazer parse de JSON, pois erros de formatação são comuns.
- 
**[⬆ voltar ao topo](#Índice)**
