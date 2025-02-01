# **Dia 17/01 - Grafos**

### **📌 Introdução**

Bem-vindo ao **décimo sétimo dia do desafio!** 🎉 Hoje vamos explorar os **Grafos**, uma estrutura de dados que pode parecer complicada à primeira vista, mas é incrivelmente poderosa e prática.

Os grafos são usados para modelar relações e conexões. Eles aparecem em redes sociais, rotas de GPS, sistemas de recomendação e até no funcionamento da internet.

Vamos entender o que são grafos, como representá-los no código e explorar aplicações práticas. 🚀

---

### **📚 O Que é um Grafo?**

Um **grafo** é uma coleção de **nós** (ou vértices) conectados por **arestas**. Essas conexões podem ser direcionadas ou não, e cada aresta pode ter um peso associado.

💡 **Exemplo no mundo real:**

- **Rede Social:** Cada pessoa é um nó, e cada conexão (amizade) é uma aresta.
- **Mapa de Rotas:** Cada cidade é um nó, e as estradas entre elas são as arestas.

📌 **Termos Importantes:**

- **Vértices (Nós):** Os pontos do grafo.
- **Arestas:** As conexões entre os vértices.
- **Grafo Direcionado:** As arestas têm uma direção.
- **Grafo Não Direcionado:** As arestas são bidirecionais.

![image](https://prod-files-secure.s3.us-west-2.amazonaws.com/f7feecbd-7058-4805-b782-5c71283c99cc/2c8c321c-f86f-4812-b7e9-ca9b72d7ee2d/image.png)

---

### **🔍 Como Representar um Grafo no Código?**

### **1. Usando Lista de Adjacência:**

É a forma mais comum de representar grafos. Cada nó tem uma lista de nós conectados a ele.

```jsx
const grafo = {
  1: [2, 5],
  2: [1, 4, 3],
  3: [2, 4],
  4: [2, 3, 5, 6],
  5: [1, 4],
  6: [4]
};

console.log(grafo);
```

### **2. Usando Matriz de Adjacência:**

É uma matriz que indica quais nós estão conectados.

```jsx
const matrizAdjacencia = [
  [0, 1, 1, 0], // A
  [1, 0, 0, 1], // B
  [1, 0, 0, 1], // C
  [0, 1, 1, 0]  // D
];

console.log(matrizAdjacencia[0][1]); // Saída: 1 (A está conectado a B)
```

---

### **🔄 Percorrendo um Grafo**

**Busca em Profundidade (DFS - Depth First Search):**
Explora o máximo de profundidade antes de voltar.

```jsx
function buscaEmProfundidade(grafo, no, visitados = new Set()) {
  if (visitados.has(no)) return;
  console.log(no);
  visitados.add(no);
  grafo[no].forEach(vizinho => buscaEmProfundidade(grafo, vizinho, visitados));
}

const grafo = {
  1: [2, 5],
  2: [1, 4, 3],
  3: [2, 4],
  4: [2, 3, 5, 6],
  5: [1, 4],
  6: [4]
};

buscaEmProfundidade(grafo, 1);
```

**Busca em Largura (BFS - Breadth First Search):**
Explora todos os nós no mesmo nível antes de descer.

```jsx
function buscaEmLargura(grafo, inicio) {
  const visitados = new Set();
  const fila = [inicio];

  while (fila.length > 0) {
    const no = fila.shift();
    if (!visitados.has(no)) {
      console.log(no);
      visitados.add(no);
      fila.push(...grafo[no]);
    }
  }
}

buscaEmLargura(grafo, 1);
```

---

### **💻 Exemplos Práticos**

**Rede Social:**
Simule conexões entre amigos:

```jsx
const redeSocial = {
  Alice: ["Bob", "Carol"],
  Bob: ["Alice", "David"],
  Carol: ["Alice", "Eve"],
  David: ["Bob"],
  Eve: ["Carol"]
};

console.log(redeSocial["Alice"]); // Saída: ['Bob', 'Carol']
```

**Rotas de GPS:**
Calcule rotas entre cidades:

```jsx
const rotas = {
  SP: ["RJ", "MG"],
  RJ: ["SP", "ES"],
  MG: ["SP", "ES"],
  ES: ["RJ", "MG"]
};

bfs(rotas, "SP");
// Saída:
// SP
// RJ
// MG
// ES
```

**Sistema de Recomendação:**
Recomende produtos baseados em conexões entre usuários e produtos:

```jsx
const recomendacoes = {
  Usuario1: ["ProdutoA", "ProdutoB"],
  Usuario2: ["ProdutoB", "ProdutoC"],
  Usuario3: ["ProdutoC", "ProdutoA"]
};

console.log(recomendacoes["Usuario1"]); // Saída: ['ProdutoA', 'ProdutoB']
```

---

### **🛠️ Dicas Importantes**

- **Escolha a Representação Correta:**
    
    Use lista de adjacência para grafos esparsos e matriz de adjacência para grafos densos.
    
- **Evite Loops Infinitos:**
    
    Sempre acompanhe os nós visitados para evitar percorrer o mesmo nó repetidamente.
    
- **Aplique o Grafo em Problemas Reais:**
    
    Como rotas de GPS, redes sociais e algoritmos de recomendação.
    

---

### **🎯 Exercícios Práticos**

1. Implemente um grafo para representar rotas entre cidades.
2. Crie uma função para verificar se dois nós estão conectados em um grafo.
3. Implemente um grafo para modelar um sistema de amizades em uma rede social.

---

### **🚀 Conclusão**

Parabéns por concluir o décimo sétimo dia do desafio! 🎉 Agora você entende como os grafos funcionam e como utilizá-los para modelar conexões e relações no mundo real.

Amanhã, vamos explorar um conceito mais avançado: **Programação Assíncrona**. Te vejo lá! 👋