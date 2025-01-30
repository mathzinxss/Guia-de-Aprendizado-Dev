# **Dia 08/31 - Matrizes**

### **📌 Introdução**

Bem-vindo ao **oitavo dia do desafio!** 🎉 Hoje vamos explorar as **matrizes**, uma extensão dos arrays que permite armazenar dados em múltiplas dimensões.

Se um **array** é uma lista de itens, uma **matriz** é como uma tabela: você organiza os dados em linhas e colunas. Matrizes são extremamente úteis quando precisamos trabalhar com dados mais complexos, como em jogos, gráficos ou planilhas.

Vamos entender como funcionam, aprender a manipular, e explorar exemplos práticos no JavaScript. 🚀

---

### **📚 O Que é uma Matriz?**

Uma matriz é um **array de arrays**, ou seja, um array onde cada elemento também é um array.

💡 **Exemplo no mundo real:**

- Um **tabuleiro de xadrez**, onde cada célula é identificada por uma linha e uma coluna.
- Uma **planilha do Excel**, com células organizadas em linhas e colunas.

📌 **Exemplo no código:**

```jsx
let matriz = [
  [1, 2, 3], // Linha 0
  [4, 5, 6], // Linha 1
  [7, 8, 9]  // Linha 2
];
```

### **🔍 Como Acessar Elementos de uma Matriz**

Você usa dois índices para acessar os elementos:

1. O **primeiro índice** indica a linha.
2. O **segundo índice** indica a coluna.

```jsx
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matriz[1][2]);  // Saída: 6 (Linha 1, Coluna 2)
```

📌 **Dica:** Os índices começam em `0`, assim como nos arrays.

### **🔄 Criando Matrizes Dinamicamente**

Você pode criar uma matriz de forma dinâmica usando loops:

```jsx
let linhas = 3;
let colunas = 3;
let matriz = [];

for (let i = 0; i < linhas; i++) {
  matriz[i] = [];
  for (let j = 0; j < colunas; j++) {
    matriz[i][j] = i + j;  // Exemplo: Soma dos índices
  }
}

console.log(matriz);
// Saída:
// [
//   [0, 1, 2],
//   [1, 2, 3],
//   [2, 3, 4]
// ]
```

---

### **🔄 Métodos Úteis para Matrizes**

Embora os métodos nativos de arrays também funcionem em matrizes, você frequentemente precisará de loops para manipulá-las.

### **1. Iterar Sobre uma Matriz**

```jsx
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    console.log(`Elemento [${i}][${j}]: ${matriz[i][j]}`);
  }
}
```

### **2. Somar Todos os Elementos**

```jsx
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let soma = 0;
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    soma += matriz[i][j];
  }
}

console.log(`Soma total: ${soma}`);  // Saída: 45
```

### **3. Encontrar o Maior Valor**

```jsx
let matriz = [
  [1, 20, 3],
  [4, 5, 6],
  [7, 8, 90]
];

let maior = matriz[0][0];
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    if (matriz[i][j] > maior) {
      maior = matriz[i][j];
    }
  }
}

console.log(`Maior valor: ${maior}`);  // Saída: 90
```

---


### **💻 Exemplos Práticos**

**Tabuleiro de Xadrez:**

```jsx
let tabuleiro = [];
for (let i = 0; i < 8; i++) {
  tabuleiro[i] = [];
  for (let j = 0; j < 8; j++) {
    tabuleiro[i][j] = (i + j) % 2 === 0 ? "⬜" : "⬛";  // Branco ou preto
  }
}
console.log(tabuleiro);
```

**Tabela de Multiplicação:**

```jsx
let tabela = [];
for (let i = 1; i <= 5; i++) {
  tabela[i] = [];
  for (let j = 1; j <= 5; j++) {
    tabela[i][j] = i * j;
  }
}
console.log(tabela);
```

**Contar Elementos Maiores que um Valor:**

```jsx
let matriz = [
  [1, 10, 20],
  [30, 5, 6],
  [7, 8, 15]
];

let contador = 0;
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    if (matriz[i][j] > 10) {
      contador++;
    }
  }
}
console.log(`Elementos maiores que 10: ${contador}`);  // Saída: 4
```

### **🛠️ Dicas Importantes**

- **Pense em Linhas e Colunas:**
    
    Sempre imagine a matriz como uma tabela para facilitar o entendimento.
    
- **Cuidado com Índices Inválidos:**
    
    Tentar acessar uma posição fora da matriz retornará `undefined`.
    

```jsx
let matriz = [[1, 2], [3, 4]];
console.log(matriz[2][0]);  // Saída: undefined
```

- **Use Loops para Manipular Matrizes:**
Quase sempre será necessário um loop dentro de outro (loop aninhado) para percorrer os elementos.

---

### **🎯 Exercícios Práticos**

1. Crie uma matriz 3x3 e preencha-a com números sequenciais de 1 a 9.
2. Escreva uma função que receba uma matriz e retorne a soma de todos os seus elementos.
3. Crie um tabuleiro de xadrez 8x8, preenchendo-o com "⬜" e "⬛".
4. Verifique quantos números em uma matriz são pares.
5. Substitua todos os valores maiores que 10 em uma matriz por `0`.
6. Implemente uma função que multiplique todos os elementos de uma matriz por um valor fornecido.

---

### **🚀 Conclusão**

Parabéns por concluir o oitavo dia do desafio! 🎉 Agora você sabe como criar e manipular matrizes no JavaScript, uma ferramenta poderosa para trabalhar com dados em múltiplas dimensões.

Amanhã, vamos aprender sobre **Recursão**, um conceito avançado e fascinante que vai expandir ainda mais suas habilidades. Te vejo lá! 👋
