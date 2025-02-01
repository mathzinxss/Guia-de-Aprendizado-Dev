# **Dia 16/01 - Árvores**

### **📌 Introdução**

Bem-vindo ao **décimo sexto dia do desafio!** 🎉 Hoje vamos explorar as **Árvores**, uma das estruturas de dados mais importantes na ciência da computação.

Uma árvore é uma **estrutura hierárquica** onde cada elemento (nó) pode ter "filhos". É amplamente usada para representar dados organizados de forma hierárquica, como sistemas de arquivos, hierarquias organizacionais ou mesmo jogos de tabuleiro.

Vamos entender os conceitos básicos, aprender a implementar árvores no JavaScript e ver aplicações práticas. 🚀

---

### **📚 O Que é uma Árvore?**

Uma **árvore** é composta de **nós** conectados por **arestas**. O nó principal é chamado de **raiz**, e cada nó pode ter 0 ou mais **filhos**.

💡 **Exemplo no mundo real:**

- **Árvore genealógica:** Representa relações familiares.
- **Sistema de arquivos:** Pastas e subpastas.

📌 **Termos Importantes:**

- **Raiz:** O nó principal da árvore.
- **Pai:** Um nó que tem filhos.
- **Filho:** Um nó que tem um pai.
- **Folha:** Um nó sem filhos.
- **Altura da Árvore:** O número máximo de níveis.

📌 **Visualização:**

```
         A (Raiz)
       /   \
      B     C
     / \   / \
    D   E F   G
```

---

### **🔍 Como Representar uma Árvore no Código?**

### **1. Usando Objetos:**

```jsx
const arvore = {
  valor: "A",
  filhos: [
    { valor: "B", filhos: [{ valor: "D", filhos: [] }, { valor: "E", filhos: [] }] },
    { valor: "C", filhos: [{ valor: "F", filhos: [] }, { valor: "G", filhos: [] }] }
  ]
};
```

### **2. Criando uma Classe para Nós da Árvore:**

```jsx
class No {
  constructor(valor) {
    this.valor = valor;
    this.filhos = [];
  }

  adicionarFilho(no) {
    this.filhos.push(no);
  }
}

const raiz = new No("A");
const noB = new No("B");
const noC = new No("C");

raiz.adicionarFilho(noB);
raiz.adicionarFilho(noC);

console.log(raiz);
```

---

### **🔄 Percorrendo uma Árvore**

**Busca em Profundidade (DFS - Depth First Search):**
Explora o máximo de profundidade antes de voltar e explorar outros caminhos.

```jsx
function buscaEmProfundidade(no) {
  console.log(no.valor);
  no.filhos.forEach(filho => buscaEmProfundidade(filho));
}

buscaEmProfundidade(raiz);
// Saída:
// A
// B
// C
```

**Busca em Largura (BFS - Breadth First Search):**
Explora todos os nós no mesmo nível antes de descer.

```jsx
function buscaEmLargura(raiz) {
  const fila = [raiz];
  while (fila.length > 0) {
    const no = fila.shift();
    console.log(no.valor);
    no.filhos.forEach(filho => fila.push(filho));
  }
}

buscaEmLargura(raiz);
// Saída:
// A
// B
// C
```

---

### **💻 Exemplos Práticos**

**Sistema de Arquivos:**

```jsx
class No {
  constructor(nome) {
    this.nome = nome;
    this.filhos = [];
  }

  adicionarFilho(filho) {
    this.filhos.push(filho);
  }
}

const pastaRaiz = new No("Raiz");
const pastaDocs = new No("Documentos");
const pastaImgs = new No("Imagens");

pastaRaiz.adicionarFilho(pastaDocs);
pastaRaiz.adicionarFilho(pastaImgs);

console.log(pastaRaiz);
// Saída:
// No { nome: 'Raiz', filhos: [No { nome: 'Documentos', filhos: [] }, No { nome: 'Imagens', filhos: [] }] }
```

**Árvore Genealógica:**

```jsx
class Pessoa {
  constructor(nome) {
    this.nome = nome;
    this.filhos = [];
  }

  adicionarFilho(filho) {
    this.filhos.push(filho);
  }
}

const avo = new Pessoa("João");
const pai = new Pessoa("Carlos");
const filho = new Pessoa("Pedro");

avo.adicionarFilho(pai);
pai.adicionarFilho(filho);

console.log(avo);
// Saída: Árvore com 3 gerações
```

---

### **🛠️ Dicas Importantes**

- **Escolha o Algoritmo Certo:**
    
    Use DFS para explorar toda a árvore e BFS para encontrar o caminho mais curto em árvores amplas.
    
- **Organize Bem os Nós:**
    
    Estruturas bem definidas tornam o gerenciamento de árvores muito mais simples.
    
- **Use Árvore para Dados Hierárquicos:**
    
    Sempre que precisar organizar informações em níveis (como menus ou pastas), considere usar árvores.
    

---

### **🎯 Exercícios Práticos**

1. Crie uma árvore para representar uma hierarquia organizacional (CEO - Diretores - Gerentes - Analistas).
2. Implemente uma função para contar o número total de nós em uma árvore.
3. Crie uma árvore genealógica e implemente um método para listar todos os descendentes de um nó.
4. Implemente uma busca em profundidade e largura para encontrar um nó com um valor específico.

---

### **🚀 Conclusão**

Parabéns por concluir o décimo sexto dia do desafio! 🎉 Agora você entende como as árvores funcionam e como utilizá-las para organizar dados hierárquicos.

Amanhã, vamos explorar outra estrutura fascinante: **Grafos**. Te vejo lá! 👋



