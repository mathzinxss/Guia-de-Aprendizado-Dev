# **Dia 26/01 - Clean Code**

Escrever **código limpo** é uma habilidade essencial para qualquer programador que deseja criar softwares sustentáveis e fáceis de entender. Clean Code não é apenas sobre o código funcionar, mas sobre ele ser legível, reutilizável e eficiente.

---

### **📌 O que é Clean Code?**

**Clean Code** (ou Código Limpo) é uma abordagem de programação que busca criar código legível, fácil de entender e manter.

**Por que isso é importante?**

- 📖 Facilita a leitura e entendimento do código por outras pessoas (ou pelo "você do futuro").
- 🛠️ Reduz o tempo de manutenção e correção de bugs.
- 🔄 Promove a reutilização e a escalabilidade do código.

---

### **🛠️ Princípios Básicos do Clean Code**

### **1. Nomes Significativos**

Escolher bons nomes para variáveis, funções e classes é essencial.

- ❌ **Ruim:**
    
    ```jsx
    let x = 10; // O que é "x"?
    ```
    
- ✅ **Bom:**
    
    ```jsx
    let numeroDeUsuarios = 10; // Nome significativo.
    ```
    

💡 **Dica:** Um bom nome deve dizer ao leitor *o que* a variável ou função faz.

---

### **2. Funções Pequenas e Simples**

Cada função deve realizar **apenas uma tarefa** e ser o mais curta possível.

- ❌ **Função Ruim:**
    
    ```jsx
    function calcularEExibirDesconto(preco, porcentagem) {
      const desconto = preco * (porcentagem / 100);
      console.log(`Desconto: ${desconto}`);
      return preco - desconto;
    }
    ```
    
- ✅ **Função Boa:**
    
    ```jsx
    function calcularDesconto(preco, porcentagem) {
      return preco * (porcentagem / 100);
    }
    
    function exibirDesconto(desconto) {
      console.log(`Desconto: ${desconto}`);
    }
    ```
    

💡 **Dica:** Separe funções por responsabilidade única.

---

### **3. Evite Comentários Desnecessários**

O código deve explicar a si mesmo, mas use comentários quando necessário para regras de negócios complexas.

- ❌ **Ruim:**
    
    ```jsx
    // Soma dois números
    let resultado = a + b;
    ```
    
- ✅ **Bom:**
    
    ```jsx
    let somaDosValores = a + b; // Soma os valores informados.
    ```
    

---

### **4. DRY (Don't Repeat Yourself)**

Evite duplicar código, reutilizando funções ou abstraindo lógicas.

- ❌ **Código Repetido:**
    
    ```jsx
    function calcularDesconto10(valor) {
      return valor * 0.9;
    }
    
    function calcularDesconto20(valor) {
      return valor * 0.8;
    }
    ```
    
- ✅ **Código Limpo:**
    
    ```jsx
    function calcularDesconto(valor, porcentagem) {
      return valor * (1 - porcentagem / 100);
    }
    ```
    

---

### **5. Elimine Números Mágicos**

Evite usar números ou strings "soltos" no código. Use constantes com nomes claros.

- ❌ **Ruim:**
    
    ```jsx
    if (tempo === 86400) {
      console.log("Um dia se passou.");
    }
    ```
    
- ✅ **Bom:**
    
    ```jsx
    const SEGUNDOS_EM_UM_DIA = 86400;
    
    if (tempo === SEGUNDOS_EM_UM_DIA) {
      console.log("Um dia se passou.");
    }
    ```
    

---

### **6. Linhas de Código Curtas**

Quebre linhas muito longas para melhorar a leitura.

- ❌ **Linha Longa:**
    
    ```jsx
    if (usuario.idade >= 18 && usuario.pais === "BR" && usuario.permissao === "admin") {
      console.log("Acesso permitido.");
    }
    ```
    
- ✅ **Linha Curta:**
    
    ```jsx
    const maiorDeIdade = usuario.idade >= 18;
    const brasileiro = usuario.pais === "BR";
    const ehAdmin = usuario.permissao === "admin";
    
    if (maiorDeIdade && brasileiro && ehAdmin) {
      console.log("Acesso permitido.");
    }
    ```
    

---

### **💡 Benefícios do Clean Code**

1. **Legibilidade:** Qualquer pessoa consegue entender o código facilmente.
2. **Manutenção Simples:** Reduz custos e tempo para corrigir ou atualizar o sistema.
3. **Escalabilidade:** Facilita a adição de novas funcionalidades.

---

### **🚀 Exercícios Práticos**

1. Reescreva a função abaixo, aplicando o princípio de **DRY**:

```jsx
function calcularImposto10(valor) {
  return valor * 0.1;
}

function calcularImposto20(valor) {
  return valor * 0.2;
}
```

2. Refatore o código a seguir para que as funções sejam menores e mais claras:

```jsx
function calcularFrete(valor, distancia) {
  const frete = distancia * 2;
  const total = valor + frete;
  console.log(`O frete é: ${frete}`);
  console.log(`O total é: ${total}`);
  return total;
}
```

3. Identifique e substitua os "números mágicos" no código abaixo:

```jsx
if (idade >= 18) {
  console.log("Maior de idade.");
}
``` 

4. Transforme os comentários ruins em boas práticas no código abaixo:

```jsx
// Verifica se o usuário é admin
if (usuario.permissao === "admin") {
  console.log("Acesso liberado.");
}
```

5. Refatore o seguinte código para melhorar os nomes de variáveis:

```jsx
let x = 100;
let y = 50;
console.log(x - y);
```

6. Separe as responsabilidades em funções menores:
    
    ```jsx
    function processarPedido(pedido) {
      const total = pedido.quantidade * pedido.preco;
      console.log(`Pedido processado: ${total}`);
    }
    ```
    

---

Com estas práticas e exercícios, você estará no caminho para escrever códigos mais limpos, legíveis e eficientes. 🚀